import { isEscapeKey } from './utils.js';

const windows = [];
let listener = null;

const onDocumentEsc = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const index = windows.length - 1;
    if(windows[index].condition && !windows[index].condition()){
      return;
    }
    windows[index].closeWindow();
    windows.length = windows.length - 1;

    if (!windows.length) {
      document.removeEventListener('keydown', onDocumentEsc);
      listener = null;
    }
  }
};

export const setEscControl = (closeWindow, condition = null) => {
  windows.push({
    closeWindow,
    condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentEsc);
  }
};

export const removeEscControl = () => {
  windows.length = windows.length - 1;
  if (!windows.length) {
    document.removeEventListener('keydown', onDocumentEsc);
    listener = null;
  }
};
