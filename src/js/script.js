// document.addEventListener("DOMContentLoaded", function () {
    let burgerBtn = document.getElementById("burger-button");
    let mainMenu = document.getElementById("main-menu");

    mainMenu.classList.remove('main-menu--animated');

    burgerBtn.addEventListener("click", function () {
        mainMenu.classList.toggle("main-menu--animated");

        // if (mainMenu.classList.contains("main-menu--animated")) {
        //     document.body.addEventListener(`mouseup`, function () {
        //         mainMenu.classList.remove('main-menu--animated');
        //     });
        // }
    });
// });