const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const showErrorMessage = () => {
  const newErrorMessage = errorTemplate.cloneNode(true);
  body.append(newErrorMessage);
  setTimeout(() => {
    newErrorMessage.remove();
  }, 5000);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

export { isEscapeKey, isEnterKey };
