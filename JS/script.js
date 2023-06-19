{
   const welcome = () => {
      console.log("Hello World!");
   }

   const onChangeBackgroundClick = () => {
      const body = document.querySelector(".body");
      const button__colorChange = document.querySelector(".button__colorChange");

      body.classList.toggle("gray");
      button__colorChange.innerText = body.classList.contains("gray")
      ? "Poprzedni" : "Szary"; 
   };

   const init  = () => {
      const button = document.querySelector(".button");
      button.addEventListener("click", onChangeBackgroundClick);

      welcome();
   };
   
   init();
}