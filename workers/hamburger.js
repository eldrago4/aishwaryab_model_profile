document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector('.hamburger');
    const menuLinks = document.querySelector('.second');
    const overlay = document.createElement('div');
    overlay.classList.add('menu-overlay');
    document.body.appendChild(overlay);

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    menuLinks.appendChild(closeButton);

    const menu = document.getElementById("MainMenuId");

    function toggleMenu() {
        if (menu && menuLinks) {
            menu.classList.toggle('open');
            menuLinks.classList.toggle('open');
            overlay.classList.toggle('open');
        } else {
            console.error("Menu or menu links not found.");
        }
    }

    hamburger.addEventListener('click', toggleMenu);
    closeButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
});
