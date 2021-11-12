import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const images = galleryItems.map(image => 
    `<a class="gallery__item" href="${image.original}">
        <img
            class="gallery__image"
            src="${image.preview}"
            alt="${image.description}"
        />
    </a>`
).join('');

gallery.insertAdjacentHTML('beforeend', images);


gallery.addEventListener('click', event => {
    event.preventDefault();
    new SimpleLightbox('.gallery__item',
        {
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250
        });
})
