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
  console.log(markup);
  refs.categoryList.innerHTML = markup;
});

function onCategoryClick(e) {
  console.log(e.target);
  console.log(e.currentTarget);
  if (e.target === e.currentTarget) {
    return;
  }
  if (e.target.textContent === 'ALL CATEGORIES') {
    renderTopBooks();
    return;
  }
  getBooksByCategory(e.target.textContent).then(value => {
    console.log(value);
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
    console.log(value);
    const markup = popularBooksTemplate(value);
    refs.bookList.innerHTML = markup;
  });
}
renderTopBooks();
