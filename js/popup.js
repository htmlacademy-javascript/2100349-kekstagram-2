import { PopupType } from './constants.js';
import { removeEscControl, setEscControl } from './escape-control.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const body = document.body;

const templates = {
  [PopupType.SUCCESS]: successTemplate,
  [PopupType.ERROR]: errorTemplate
};

export const showPopup = (type) => {
  const newPopup = templates[type].cloneNode(true);
  body.append(newPopup);

  setEscControl(()=>{
    newPopup.remove();
  });

  newPopup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      newPopup.remove();
      removeEscControl();
    }
  });
};
