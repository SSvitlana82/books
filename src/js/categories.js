import { getCategories, getBooksByCategory } from './modules/books-api';
import { refs } from './modules/refs';
import { categoriesTemplate, booksTemplate } from './modules/render-functions';

refs.categoryList.addEventListener('click', onCategoryClick);
getCategories().then(value => {
  const markup = categoriesTemplate(value);
  refs.categoryList.innerHTML = markup;
});

function onCategoryClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }

  getBooksByCategory(e.target.textContent).then(value => {
    console.log(value);
    const markup = booksTemplate(value);
    refs.bookList.innerHTML = markup;
  });
}
