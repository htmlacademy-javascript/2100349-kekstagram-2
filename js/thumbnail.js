import { openUserModule } from "./big-picture.js";

const containerElement = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

let localData;

export const renderCards = (photos) => {
  localData = [...photos];
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = cardTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = photo.url;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    thumbnail.dataset.id = photo.id;
    fragment.append(thumbnail);
  });
  containerElement.append(fragment);
};

containerElement.addEventListener('click', ({ target }) => {
  const card = target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localData.find((item) => item.id === id);
    openUserModule(photo);
  }
});
