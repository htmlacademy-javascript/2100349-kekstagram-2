import { createPhotos } from './data.js';
import { renderCards } from './thumbnail.js';

import './form.js';

const data = createPhotos();
renderCards(data);
