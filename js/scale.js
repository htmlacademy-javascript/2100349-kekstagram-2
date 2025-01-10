import { MAX_SCALE, MIN_SCALE, STEP_SCALE, DEFAULT_SCALE, SCALE_FACTOR } from './constants.js';

const minusButton = document.querySelector('.scale__control--smaller');
const plusButton = document.querySelector('.scale__control--bigger');
const valueInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

let currentScale = DEFAULT_SCALE;

const renderImage = () => {
  imgPreview.style.transform = `scale(${currentScale * SCALE_FACTOR})`;
  valueInput.value = `${currentScale}%`;
};

minusButton.addEventListener('click', () => {
  currentScale = currentScale - STEP_SCALE < MIN_SCALE ? MIN_SCALE : currentScale - STEP_SCALE;
  renderImage();
});

plusButton.addEventListener('click', () => {
  currentScale = currentScale + STEP_SCALE > MAX_SCALE ? MAX_SCALE : currentScale + STEP_SCALE;
  renderImage();
});

export const reset = () => {
  currentScale = DEFAULT_SCALE;
  renderImage();
};

reset();
