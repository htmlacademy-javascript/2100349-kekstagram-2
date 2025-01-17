import { DEFAULT_EFFECT, EffectsSettings } from './constants.js';

const sliderBlock = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.effect-level');

let currentEffect = DEFAULT_EFFECT;

noUiSlider.create(sliderBlock, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower'
});

const renderImage = () => {
  const { style, units } = EffectsSettings[currentEffect];
  imgPreview.style.filter = `${style}(${effectLevel.value}${units})`;
};

sliderBlock.noUiSlider.on('update', () => {
  effectLevel.value = sliderBlock.noUiSlider.get();
  renderImage();
});

const updateSlider = () => {
  const { min, max, step } = EffectsSettings[currentEffect];
  sliderBlock.noUiSlider.updateOptions({
    range: {
      min,
      max
    },
    start: max,
    step
  });
};

export const reset = () => {
  currentEffect = DEFAULT_EFFECT;
  document.querySelector('.effects__radio[value="none"]').checked = true;
  sliderContainer.classList.add('hidden');
  imgPreview.style.filter = '';
};

effectsList.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  if (currentEffect === DEFAULT_EFFECT) {
    reset();
  } else {
    sliderContainer.classList.remove('hidden');
    updateSlider();
  }
});

reset();
