import { isValid, reset as resetValidation } from './validation.js';
import { reset as resetScale } from './scale.js';
import { reset as resetEffects } from './effects.js';
import { PopupType, SubmitButtonTexts } from './constants.js';
import { showPopup } from './popup.js';
import { sendData } from './api.js';
import { removeEscControl, setEscControl } from './escape-control.js';

const form = document.querySelector('.img-upload__form');
const modal = form.querySelector('.img-upload__overlay');
const uploadFile = form.querySelector('#upload-file');
const body = document.body;
const closeButton = modal.querySelector('#upload-cancel');
const imgPreview = modal.querySelector('.img-upload__preview img');
const effectsElements = modal.querySelectorAll('.effects__preview');
const submitButton = modal.querySelector('#upload-submit');
const hashtag = modal.querySelector('.text__hashtags');
const description = modal.querySelector('.text__description');

const setPreviewImage = () => {
  const file = uploadFile.files[0];
  const url = URL.createObjectURL(file);
  imgPreview.src = url;
  effectsElements.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
  });
};

const closeModal = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');

  form.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

const canCloseModal = () => !(document.activeElement === hashtag || document.activeElement === description);

const showModal = () => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');

  setPreviewImage();
  setEscControl(closeModal, canCloseModal);
};

uploadFile.addEventListener('change', () => {
  showModal();
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
  removeEscControl();
});

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
        removeEscControl();
        showPopup(PopupType.SUCCESS);
      })
      .catch(() => {
        showPopup(PopupType.ERROR);
      })
      .finally(() => {
        disableSubmitButton(false);
      });
  }
});
