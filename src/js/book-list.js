import { getBooksByCategory, getPopularBooks } from './modules/books-api';
import { refs } from './modules/refs';
import { booksTemplate } from './modules/render-functions';

refs.bookList.addEventListener('click', onBtnSeeMoreCLick);
function onBtnSeeMoreCLick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  getBooksByCategory(e.target.dataset.top).then(value => {
    if (value.length === 0) {
      return alert('Noooooooo');
    }
    const markup = booksTemplate(value);
    refs.bookList.innerHTML = markup;
  });
}
