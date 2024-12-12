import {isEscapeKey, isEnterKey} from './utils.js';

const modal = document.querySelector('.big-picture');
const userCloseWindow = modal.querySelector('.big-picture__cancel');
const image = modal.querySelector('.big-picture__img img');
const caption = modal.querySelector('.social__caption');
const likesCount = modal.querySelector('.likes-count');
const totalComments = modal.querySelector('.social__comment-total-count');
const commentsList = modal.querySelector('.social__comments');
const commentItem = modal.querySelector('.social__comment');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

const showModal = () => {
  modal.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  document.body.classList.add('modal-open');
};

const closeModal = () => {
  modal.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.body.classList.remove('modal-open');
};

const renderComment = ({ avatar, message, name }) => {
  const newComment = commentItem.cloneNode(true);
  const avatarImage = newComment.querySelector('.social__picture');
  avatarImage.src = avatar;
  avatarImage.alt = name;
  newComment.querySelector('.social__text').textContent = message;
  return newComment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    fragment.append(renderComment(item));
  });
  commentsList.append(fragment);
};

const render = ({ url, description, likes, comments }) => {
  console.log(image);
  console.log(url);
  image.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  totalComments.textContent = comments.length;
  renderComments(comments);
};

export function openUserModule(photo) {
  showModal();
  commentsList.innerHTML = '';
  render(photo);
}

function closeUserModal() {
  closeModal();
}

modal.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openUserModule();
  }
});

userCloseWindow.addEventListener('click', () => {
  closeUserModal();
});

userCloseWindow.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    closeUserModal();
  }
});

export {modal, userCloseWindow,image, caption, likesCount, totalComments, commentsList,commentItem};
