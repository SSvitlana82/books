import {
  getCategories,
  getBooksByCategory,
  getPopularBooks,
} from './modules/books-api';
import { refs } from './modules/refs';
import {
  categoriesTemplate,
  booksTemplate,
  popularBooksTemplate,
} from './modules/render-functions';

refs.categoryList.addEventListener('click', onCategoryClick);
getCategories().then(value => {
  value.unshift({ list_name: 'ALL CATEGORIES' });
  const markup = categoriesTemplate(value);

  refs.categoryList.innerHTML = markup;
});

function onCategoryClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  if (e.target.textContent === 'ALL CATEGORIES') {
    renderTopBooks();
    refs.bookList.classList.remove('book-list-seemore');
    return;
  }
  refs.bookList.classList.add('book-list-seemore');
  getBooksByCategory(e.target.textContent).then(value => {
    if (value.length === 0) {
      return alert('Noooooooo');
    }
    const markup = booksTemplate(value);
    refs.bookList.innerHTML = markup;
  });
}
function renderTopBooks() {
  getPopularBooks().then(value => {
    if (value.length === 0) {
      return alert('Noooooooo');
    }

    const markup = popularBooksTemplate(value);
    refs.bookList.innerHTML = markup;
  });
}
renderTopBooks();
