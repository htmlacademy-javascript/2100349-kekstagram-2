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

export const Effects = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

export const EffectsSettings = {
  [Effects.NONE]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: '',
    units: ''
  },
  [Effects.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'grayscale',
    units: ''
  },
  [Effects.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
    style: 'sepia',
    units: ''
  },
  [Effects.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
    style: 'invert',
    units: '%'
  },
  [Effects.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
    style: 'blur',
    units: 'px'
  },
  [Effects.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
    style: 'brightness',
    units: ''
  },
};

export const DEFAULT_EFFECT = Effects.NONE;

export const PopupType = {
  SUCCESS: 'success',
  ERROR: 'error'
};

export const Filter = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export const SubmitButtonTexts = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};
