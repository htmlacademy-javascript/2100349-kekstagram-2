import { FILTERS } from './constants.js';
import { renderCards } from './thumbnail.js';
import { debounce } from './utils.js';

const filtersSection = document.querySelector('.img-filters');
const formFilter = document.querySelector('.img-filters__form');

let localPhotos;
let currentFilter = FILTERS.DEFAULT;

const FiltersAction = {
  [FILTERS.DEFAULT]: () => localPhotos,
  [FILTERS.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, 10),
  [FILTERS.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
};

const setActiveButton = (button) => {
  document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const debounceRenderCards = debounce(renderCards);

formFilter.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button && button.id !== currentFilter) {
    currentFilter = button.id;
    const id = button.id;
    const photos = FiltersAction[id]();
    debounceRenderCards(photos);
    setActiveButton(button);
  }
});

export const initFilter = (data) => {
  localPhotos = [...data];
  filtersSection.classList.remove('img-filters--inactive');
};
