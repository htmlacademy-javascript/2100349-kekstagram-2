
import { renderCards } from './thumbnail.js';

import './form.js';
import { showErrorMessage } from './utils.js';
import { getData } from './api.js';
import { initFilter } from './filter.js';


getData()
  .then((data) => {
    renderCards(data);
    initFilter(data);
  })
  .catch(() => {
    showErrorMessage();
  });
