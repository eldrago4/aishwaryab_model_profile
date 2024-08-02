document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.querySelector('.hamburger');
  const menuLinks = document.querySelector('.second'); 

  // Create the overlay element
  const overlay = document.createElement('div');
  overlay.classList.add('menu-overlay');
  document.body.appendChild(overlay); // Append overlay to the body

  // Create the close button
  const closeButton = document.createElement('span');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  menuLinks.appendChild(closeButton);

  function toggleMenu() {
      const menu = document.getElementById("MainMenuId");
      if (menu && menuLinks) {
          menu.classList.toggle('open');
          menuLinks.classList.toggle('open');
          overlay.classList.toggle('open'); // Toggle the overlay as well
      } else {
          console.error("Menu or menu links not found.");
      }
  }

  hamburger.addEventListener('click', toggleMenu);
  closeButton.addEventListener('click', toggleMenu); // Close on close button click
  overlay.addEventListener('click', toggleMenu);    // Close on overlay click
});
