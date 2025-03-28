document.addEventListener("DOMContentLoaded", () => {
  const gameGrid = document.querySelector(".game-grid");
  
  // Animación de aparición para la grid de juegos
  gameGrid.style.opacity = "0";
  gameGrid.style.transform = "translateY(50px)";
  setTimeout(() => {
    gameGrid.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    gameGrid.style.opacity = "1";
    gameGrid.style.transform = "translateY(0)";
  }, 500);
});