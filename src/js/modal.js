import { getBookInfo } from './modules/books-api';
/* import { modalLinksTemplate } from './modules/render-functions'; */
import { refs } from './modules/refs';
import { modalTemplate } from './modules/render-functions';

export async function openModal(idBook) {
  const book = await getBookInfo(idBook);
  const markupBook = modalTemplate(book);
  refs.modal.content.innerHTML = markupBook;
  showModal();
}
export function showModal() {
  refs.modal.mainBackdrop.classList.remove('hidden');
}
export function hideModal() {
  refs.modal.mainBackdrop.classList.add('hidden');
}
refs.modal.mainBackdrop.addEventListener('click', onCloseModal);
function onCloseModal(e) {
  if (e.target === e.currentTarget) {
    hideModal();
    return;
  }
}
