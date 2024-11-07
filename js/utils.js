import {MESSAGES, NAMES} from './constants.js';

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const counter = () => {
  let sum = 0;
  return () => {
    sum = sum + 1;
    return sum;
  };
};

const uniquePhoto = counter();
const uniqueId = counter();
const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createComments = () => ({
  id: getRandomIntInclusive(0, 30),
  avatar: `img/avatar-${getRandomIntInclusive(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {getRandomArrayElement, getRandomIntInclusive, uniquePhoto, uniqueId, createComments};
