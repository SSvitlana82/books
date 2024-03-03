function categoryTemplate(category) {
  return `<li class="category-item">${category.list_name}</li>`;
}
export function categoriesTemplate(array) {
  return array.map(categoryTemplate).join('');
}

function bookTemlate({ book_image, author, title }) {
  return `<li>
      <img src="${book_image}" alt="bookname" />
      <h3>${title}</h3>
      <p>${author}</p>
    </li>`;
}
export function booksTemplate(array) {
  return array.map(bookTemlate).join('');
}

function popularCategoryTemplate(topCategory) {
  return `<li class="popular-top-book">
      <h3>${topCategory.list_name}</h3>
      <ul>
         ${booksTemplate(topCategory.books)}
      </ul>
      <button data-top="${topCategory.list_name}">SEE MORE</button>
    </li>`;
}

export function popularBooksTemplate(array) {
  return array.map(popularCategoryTemplate).join('');
}
