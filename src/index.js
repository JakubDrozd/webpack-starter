import generateJoke from "./generateJoke.js";
import "./styles/main.scss";
import avatar from "./assets/avatar.png";

const avatarIMG = document.getElementById("avatarIMG");

avatarIMG.src = avatar;

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();
