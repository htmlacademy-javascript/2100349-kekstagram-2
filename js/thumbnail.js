const containerElement = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');


export const renderCards = (photos) => {
  console.log(photos);
const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = cardTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = photo.url;
    thumbnail.querySelector('.picture__comments').textContent = photo.comments.length;
    thumbnail.querySelector('.picture__likes').textContent = photo.likes;
    fragment.append(thumbnail)
  });
  containerElement.append(fragment);
};
