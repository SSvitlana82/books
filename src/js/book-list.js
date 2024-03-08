import { getBooksByCategory, getPopularBooks } from './modules/books-api';
import { refs } from './modules/refs';
import { booksTemplate } from './modules/render-functions';
import { openModal } from './modal';

refs.bookList.addEventListener('click', onBtnSeeMoreCLick);
function onBtnSeeMoreCLick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  refs.bookList.classList.add('book-list-seemore');

  getBooksByCategory(e.target.dataset.top).then(value => {
    if (value.length === 0) {
      return alert('Noooooooo');
    }
    const markup = booksTemplate(value);
    refs.bookList.innerHTML = markup;
  });
}
refs.bookList.addEventListener('click', onBookClick);
function onBookClick(eventBook) {
  if (eventBook.tagret === eventBook.currentTarget) {
    return;
  }
  if (eventBook.target.nodeName === 'BUTTON') {
    return;
  }
  const liElem = eventBook.target.closest('.book-item');

  const id = liElem.dataset.id;
  openModal(id);
}
