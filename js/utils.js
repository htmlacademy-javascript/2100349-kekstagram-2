const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;
import { MASSAGE_TIME } from './constants';

export const showErrorMessage = () => {
  const newErrorMessage = errorTemplate.cloneNode(true);
  body.append(newErrorMessage);
  setTimeout(() => {
    newErrorMessage.remove();
  }, MASSAGE_TIME);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export { isEscapeKey, isEnterKey, debounce };
