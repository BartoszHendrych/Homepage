{
   const welcome = () => {
      console.log("Hello World!");
   }

   const toggleBackground = () => {
      const body = document.querySelector(".body");
      const buttonChangeColorElement = document.querySelector(".buttonChangeColorElement");

      body.classList.toggle("gray");
      buttonChangeColorElement.innerText = body.classList.contains("gray")
      ? "Poprzedni" : "Szary"; 
   };

   const init  = () => {
      const button = document.querySelector(".button");
      button.addEventListener("click", toggleBackground);

      welcome();
   };
   
   init();
}