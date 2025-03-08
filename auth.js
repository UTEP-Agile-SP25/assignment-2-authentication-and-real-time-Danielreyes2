import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, getElementById } from "@firebase/auth";
import { auth } from "./config";
import { db } from "./config";
import {doc, setDoc, getDocs, collection, addDoc, deleteDoc} from "firebase/firestore";


onAuthStateChanged(auth, async (user) => {
    if(user){
        console.log("Logged in User: ", user.email)
        await fetchUserData(user.uid)
    }else{
        console.log("No user is signed in ")
    }
})

async function fetchUserData(userID) {
    try{
        const userDoc = await getDocs(collection(db, "users"))
        const userData = userDoc.docs.find(doc => doc.id === userID)?.data()
        console.log("User data: ", userData)
        document.getElementById("greeting").innerHTML = "<h1> Hi, "+ userData.firstName + "</h1>"

    }catch(error){
        console.error("Error getting user data: ", error)
    }
    
}

export async function signUp(firstName, lastName, email, password){
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User signed up:", userCredential.user.email)
        console.log("User ID:", userCredential.user.uid)
        const userRef = doc(db, "users", userCredential.user.uid)
                
        await setDoc(userRef, {
            firstName:firstName,
            lastName:lastName,
            timestamp: new Date()
        })
    }catch(error){
        console.error("Error fetching user data: ", error)
    }
}

export async function login(email, password) {
    try{
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        window.location.href = "citymanager.html"
    }catch(error){
        console.error("Login error: ", error.message)
    }
    
}

export async function logout(params) {
    try{
        await signOut(auth)
        console.log("User signed out")
    }catch(error){
        console.log("Logout error: ", error.message)

    }
    
}

export async function addSong(title, artist) {
    try {
        const songRef = await addDoc(collection(db, "songs"), {
            title,
            artist,
        });
        console.log("Song added with ID:", songRef.id);
        return songRef;
    } catch (error) {
        console.error("Error adding song:", error);
        throw error;
    }
}

export async function deleteSong(songId) {
    try {
        await deleteDoc(doc(db, "songs",songId));
        console.log("Song deleted with ID:", songId);
    } catch (error) {
        console.error("Error deleting song: ", error.message);
    }
}