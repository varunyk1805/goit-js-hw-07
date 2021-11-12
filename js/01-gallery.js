import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const images = galleryItems.map(image => 
    `<div class="gallery__item">
        <a class="gallery__link" href="${image.original}" onclick="event.preventDefault()">
            <img
                class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
            />
        </a>
    </div>`
).join('');

gallery.insertAdjacentHTML('beforeend', images);


const fullSizeImage = event => {
    const originalImage = event.target.getAttribute('data-source');
    
    const instanse = basicLightbox.create(`
    <img width="1400" height="900" src="${originalImage}">
	`);
    instanse.show();

    document.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instanse.close()
        }
    });
};

gallery.addEventListener('click', fullSizeImage);