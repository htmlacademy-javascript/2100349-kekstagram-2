const PHOTO_COUNT = 25;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'У моего кота получилась фотография лучше.',
];

const DESCRIPTIONS = [
  'Утро!',
  'Котик',
  'Солнышко',
  'Красивое фото',
  'Что-то новенькое',
];

const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
];

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
