let burgerBtn = document.getElementById("burger-button");
let mainMenu = document.getElementById("main-menu");

burgerBtn.addEventListener("click", function () {
    mainMenu.classList.toggle("main-menu--animated");
});

