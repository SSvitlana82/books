import { updateModalMarkup } from './modules/storage';
import { getBookInfo } from './modules/books-api';
/* import { modalLinksTemplate } from './modules/render-functions'; */
import { refs } from './modules/refs';
import { modalTemplate } from './modules/render-functions';

export async function openModal(idBook) {
  const book = await getBookInfo(idBook);
  const markupBook = modalTemplate(book);
  refs.modal.content.innerHTML = markupBook;
  showModal();
  updateModalMarkup(idBook);
  refs.modal.shopListBtn.setAttribute('data-id', idBook);
}
export function showModal() {
  refs.modal.mainBackdrop.classList.remove('hidden');
  document.body.classList.add('hide-scroll');
  window.addEventListener('keydown', onModalEsc);
}
export function hideModal() {
  refs.modal.mainBackdrop.classList.add('hidden');
  document.body.classList.remove('hide-scroll');
  window.removeEventListener('keydown', onModalEsc);
}
refs.modal.mainBackdrop.addEventListener('click', onCloseModal);
console.log('hello');
function onCloseModal(e) {
  if (e.target === e.currentTarget) {
    hideModal();
    return;
  }
}

function onModalEsc(i) {
  console.log(i);
  if (i.code === 'Escape') {
    hideModal();
    return;
  }
}
