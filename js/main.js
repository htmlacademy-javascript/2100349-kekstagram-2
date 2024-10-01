function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const MESSAGE_TEXT = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'У моего кота получилась фотография лучше.',
];

const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
];

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

const createComments = () => ({
  id: getRandomIntInclusive(0, 30),
  avatar: 'img/avatar-'+ getRandomIntInclusive(1, 6) + '.svg',
  message: getRandomArrayElement(MESSAGE_TEXT),
  name: getRandomArrayElement(NAMES),
});

const createPhotoObjects = () => ({
  id: getRandomIntInclusive(1, 25),
  url: 'photos/' + getRandomIntInclusive(1, 25) + '.jpg',
  description: 'Новая фотография',
  likes: getRandomIntInclusive(15, 200),
  comments: createComments(),
});

console.log (
  createPhotoObjects()
);
