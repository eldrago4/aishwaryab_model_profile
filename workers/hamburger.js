document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const menuLinks = document.getElementById("menuLinks"); // Get the existing menu links container
  
    function toggleMenu() {
      if (menuLinks) { // Check if menuLinks exists
        const isMenuVisible = window.getComputedStyle(menuLinks).display === 'block';
        menuLinks.style.display = isMenuVisible ? 'none' : 'block';
      } else {
        console.error("Menu links container not found.");
      }
    }
  
    hamburger.addEventListener('click', toggleMenu);
  });
  