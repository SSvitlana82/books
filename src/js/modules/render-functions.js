import icons from '../../img/icons.svg';
console.log(icons);
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

function supportTemplate(supportObject, index) {
  return `<li class="support-item">
      <a target="_blank" href="${supportObject.url}" class="support-item-link">
        <p class="support-item-name">${index + 1}</p>
        <svg class="support-item-logo">
        <use href=".${icons}#${supportObject.img}"></use>
        </svg>
      </a>
    </li>`;
}

export function supportsTemplate(array) {
  return array.map(supportTemplate).join('');
}

export function modalTemplate({
  book_image,
  author,
  title,
  buy_links,
  description,
}) {
  return `<img
          src="${book_image}"
          alt="книга"
        />
        <ul class="list-modal">
          <li class="item-modal">
            <h2 class="name-modal">${title}</h2>
            <p class="author-modal">${author}</p>
            <p class="description-modal">${description}
            </p>
            <ul class="buy-list-modal">
              ${modalLinksTemplate(buy_links)}
            </ul>
          </li>
        </ul>`;
}
function modalLinksTemplate(buy_links) {
  const arrayModal = ['Amazon', 'Apple Books', 'Bookshop'];
  const links = arrayModal.map(nameStore => {
    return buy_links.find(objectLink => objectLink.name === nameStore);
  });
  return links.map(modallinkTemplate).join('');
}

function modallinkTemplate(infoLink) {
  if (!infoLink) {
    return '';
  }
  return `<li class="item-buy">
                <a
                  href="${infoLink.url}"
                  class="link-buy-modal"
                  >${infoLink.name}
                </a>
              </li>`;
}
