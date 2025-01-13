import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';
import { POPUPS_TYPES } from './constants.js';
import { showPopup } from './popup.js';
import { sendData } from './api.js';

const uploadFile = document.querySelector('#upload-file');
const modal = document.querySelector('.img-upload__overlay');
const body = document.body;
const closeButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const imgPreview = document.querySelector('.img-upload__preview img');
const effectsElements = document.querySelectorAll('.effects__preview');
const submitButton = document.querySelector('#upload-submit');

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

const SubmitButtonTexts = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const disableSubmitButton = (isDisabled = true) => {
  submitButton.disabled = isDisabled;
  submitButton.textContent = isDisabled ? SubmitButtonTexts.SENDING : SubmitButtonTexts.IDLE;
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    disableSubmitButton();


    sendData(new FormData(form))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closeModal();
        showPopup(POPUPS_TYPES.SUCCESS);
      })
      .catch(() => {
        showPopup(POPUPS_TYPES.ERROR);
      })
      .finally(() => {
        disableSubmitButton(false);
      });

  }
});
