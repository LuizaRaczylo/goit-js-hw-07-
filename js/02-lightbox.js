import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    (item) =>
      `<a class="gallery__item" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}" 
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", createGallery);

console.log(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    canimationSpeed: 250,
    captionPosition: 'bottom',
});
gallery.addEventListener("click",lightbox);
