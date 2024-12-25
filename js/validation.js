import { MAX_DESCRIPTION_LENGTH, HASHTAG_FORMULA, HASHTAGS_COUNT } from './constants.js';

const form = document.querySelector('.img-upload__form');
const hashtag = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const checkDescription = (value) => value.length <= MAX_DESCRIPTION_LENGTH;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashTags = (value) => {
  const hashtags = getHashtags(value);
  return hashtags.every((hash) => HASHTAG_FORMULA.test(hash));
};

const checkCountHashtags = (value) => {
  const hashtags = getHashtags(value);
  return hashtags.length <= HASHTAGS_COUNT;
};

const checkUniques = (value) => {
  const hashtags = getHashtags(value);
  return [...new Set(hashtags)].length === hashtags.length;
};

pristine.addValidator(
  description,
  checkDescription,
  `Текст описания не должен превышать ${MAX_DESCRIPTION_LENGTH} символов`
);

pristine.addValidator(
  hashtag,
  checkHashTags,
  'Хештег должен включать только буквы и цифры'
);

pristine.addValidator(
  hashtag,
  checkCountHashtags,
  `Количество хештегов не должно превышать ${HASHTAGS_COUNT}`
);

pristine.addValidator(
  hashtag,
  checkUniques,
  'Хештеги не должны повторяться'
);

export const reset = () => {
  pristine.reset();
};

export const isValid = () => pristine.validate();
