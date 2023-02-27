import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach(element => {
  const galleryItem = document.createElement('div');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', element.original);

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', element.preview);
  galleryImage.setAttribute('alt', element.description);
  galleryImage.setAttribute('data-source', element.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);
  items.push(galleryItem);
});

gallery.append(...items);

gallery.addEventListener('click', evt => {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const selectedImage = evt.target.getAttribute('data-source');
  const instance = basicLightbox.create(`<img src="${selectedImage}" width="800" height="600">`);
  instance.show();

  const handleKeyDown = evt => {
    if (evt.key === 'Escape') {
      instance.close();
      gallery.removeEventListener('keydown', handleKeyDown);
    }
  };

  gallery.addEventListener('keydown', handleKeyDown);
});
