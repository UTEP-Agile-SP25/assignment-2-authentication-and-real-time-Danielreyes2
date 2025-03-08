import { signUp, login, logout, addSong, deleteSong } from "./auth";


const signupForm = document.querySelector("#signupForm")
signupForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const firstname = document.getElementById("firstName").value
    const lastname = document.getElementById("lastName").value
    const email = document.getElementById("signupEmail").value
    const password = document.getElementById("signupPassword").value

    signUp(firstname, lastname, email, password)
}
)

const logoutForm = document.querySelector("#logoutForm")
logoutForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    logout()
}
)


const loginForm = document.querySelector("#loginForm")
loginForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const email = document.getElementById("loginEmail").value
    const password = document.getElementById("loginPassword").value
    login(email, password)
}
)


const addSongForm = document.querySelector("#addSongForm");
addSongForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value.trim();
    const artist = document.getElementById("artist").value.trim();

    addSong(title, artist)
      .then(() => {
          alert("Song added successfully!");
          console.log("Song added: ", songId, title, artist)
          addSongForm.reset();
      })
      .catch((error) => {
          console.error("Error adding song: ", error);
      });
});

const deleteSongForm = document.querySelector("#deleteSongForm");
deleteSongForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const songId = document.getElementById("songId").value;

    deleteSong(songId)
      .then(() => {
          alert("Song deleted successfully from Firebase!");
          console.log("song" , title, "deleted")
          deleteSongForm.reset();
      })
      .catch((error) => {
          console.error("Error deleting song: ", error);
          alert("There was an error deleting the song. Please try again.");
      });
});

