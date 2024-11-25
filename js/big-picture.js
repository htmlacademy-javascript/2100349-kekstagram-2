import {isEscapeKey, isEnterKey} from './utils.js';

const userOpenWindow = document.querySelector('.big-picture');
const userCloseWindow = userOpenWindow.document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModule();
  }
};

function openUserModule () {
  userOpenWindow.classList.remove('hidden');

  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModule () {
  userOpenWindow.classList.add('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

userOpenWindow.addEventListener('click', () => {
  openUserModule();
});

userOpenWindow.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModule();
  }
});

userCloseWindow.addEventListener('click', () => {
  closeUserModule();
});

userCloseWindow.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModule();
  }
});

