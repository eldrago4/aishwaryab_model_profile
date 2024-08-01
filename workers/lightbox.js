function closeLightbox() {
    lightbox.classList.add("hidden");
  }
const galleryContainer = document.getElementById("AGtj3LS93HjyMn10");
const lightbox = document.getElementById("pbLightbox");
const lightboxImage = document.getElementById("lightboxImage");
// script.js
document.querySelector(".closeX").addEventListener('click', closeLightbox);

imageUrls.forEach(url => {
    const figure = document.createElement('figure');
    figure.classList.add("Item", "fade-in");
    const img = document.createElement('img');
    img.src = url;
    img.loading = 'lazy';
    img.classList.add('lazy-img'); 

    img.addEventListener('click', () => {
        lightboxImage.src = url;
        lightbox.classList.remove("hidden");
    });

    figure.appendChild(img);
    galleryContainer.appendChild(figure);
});

function closeLightbox() {
    lightbox.classList.add("hidden");
}
