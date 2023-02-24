import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const items = [];

galleryItems.forEach((item) => {
  const galleryListItem = document.createElement('li');
  galleryListItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.setAttribute('alt', item.description);
  galleryImage.setAttribute('title', item.description);

  galleryLink.appendChild(galleryImage);
  galleryListItem.appendChild(galleryLink);
  items.push(galleryListItem);
});

gallery.append(...items);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});