const burgerBtn = document.getElementById("burger-button");
const mainMenu = document.getElementById("main-menu");

mainMenu.classList.remove('main-menu--animated');

burgerBtn.addEventListener("click", function () {
    toggleMainMenu();
});

document.body.addEventListener('click', function (e) {
   const mainMenuActive = mainMenu.classList.contains('main-menu--animated');
   if (!mainMenu.contains(e.target) && !burgerBtn.contains(e.target) && mainMenuActive) {
       toggleMainMenu();
   }
});

function toggleMainMenu() {
    mainMenu.classList.toggle("main-menu--animated");
}