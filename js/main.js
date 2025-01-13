
import { renderCards } from './thumbnail.js';

import './form.js';
import { showErrorMessage } from './utils.js';
import { getData } from './api.js';


getData()
  .then((data) => {
    renderCards(data);
  })
  .catch(() => {
    showErrorMessage();
  });
