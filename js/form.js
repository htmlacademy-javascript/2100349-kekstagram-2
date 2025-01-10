import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';

const uploadFile = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');
const body = document.body;
const closeButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectsElements = document.querySelectorAll('.effects__preview');

const setPreviewImage = () => {
  const file = uploadFile.files[0];
  const url = URL.createObjectURL(file);
  imgPreview.src = url;
  effectsElements.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
  });
};

const showModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');

  setPreviewImage();
};

const closeModal = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');

  form.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

uploadFile.addEventListener('change', () => {
  showModal();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

form.addEventListener('submit', (evt) => {

  if (!isValid()) {
    evt.preventDefault();
  }
});
