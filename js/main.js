import {PHOTO_COUNT, DESCRIPTIONS} from './util.js';

import {getRandomArrayElement, getRandomIntInclusive, uniquePhoto, uniqueId, createComments} from './script.js';


const createPhoto = () => {
  const id = uniqueId();
  return {
    id: id,
    url: `photos/${uniquePhoto()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomIntInclusive(15, 200),
    comments: Array.from({ length: getRandomIntInclusive(0, 30) }, createComments),
  };
};

const createPhotos = () => Array.from({ length: PHOTO_COUNT }, createPhoto);

console.log(
  createPhotos()
);
