const containerElement = document.querySelector('.pictures');
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');


export const renderCards = (photos) => {
  console.log(photos);
const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const thumbnail = cardTemplate.cloneNode(true);
    thumbnail.querySelector('.picture_img').src = photo.url;
    thumbnail.querySelector('.picture_comments').data.textContent('comments'.length);
    thumbnail.querySelector('#likes');
  });
  containerElement.append(fragment);
};
