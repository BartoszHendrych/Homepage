console.log("Hello!");

let button = document.querySelector(".button");
let body = document.querySelector(".body");
let button__colorChange = document.querySelector(".button__colorChange");

button.addEventListener("click", () => {
   body.classList.toggle("gray");

   button__colorChange.innerText = body.classList.contains("gray")
   ? "Poprzedni" : "Szary"; 
});