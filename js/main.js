import { createPhotos } from './data.js';
import { renderCards } from './thumbnail.js';

const data = createPhotos();
renderCards(data);
