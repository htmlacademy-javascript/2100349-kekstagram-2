export const PHOTO_COUNT = 25;

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'У моего кота получилась фотография лучше.',
];

export const DESCRIPTIONS = [
  'Утро!',
  'Котик',
  'Солнышко',
  'Красивое фото',
  'Что-то новенькое',
];

export const NAMES = [
  'Иван',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
];

export const COMMENTS_STEP = 5;

export const MAX_DESCRIPTION_LENGTH = 140;

export const HASHTAG_FORMULA = /^#[a-zA-Zа-яА-ЯёЁ0-9]{1,19}$/;

export const HASHTAGS_COUNT = 5;

export const MAX_SCALE = 100;
export const MIN_SCALE = 25;
export const STEP_SCALE = 25;
export const DEFAULT_SCALE = MAX_SCALE;
export const SCALE_FACTOR = 0.01;
export const MASSAGE_TIME = 5000;
export const GET_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
export const POST_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';


/*
Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;
chrome
sepia
marvin
phobos
heat
none
*/

export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const EffectsSettings = {
  [EFFECTS.NONE]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: '',
    units: ''
  },
  [EFFECTS.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};

export const DEFAULT_EFFECT = EFFECTS.NONE;

export const POPUPS_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const FILTERS = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};
