import { POPUPS_TYPES } from './constants.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  [POPUPS_TYPES.SUCCESS]: successTemplate,
  [POPUPS_TYPES.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const newPopup = templates[type].cloneNode(true);
  body.append(newPopup);
  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove();
    }
  });
};
