function categoryTemplate(category) {
  return `<li class="category-item">
        <a class="category-all-list>${category.list_name}</a>
        </li>`;
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
