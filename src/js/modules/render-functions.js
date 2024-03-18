import icons from '../../img/icons.svg';
console.log(icons);
function categoryTemplate(category) {
  return `<li class="category-item">${category.list_name}</li>`;
}
export function categoriesTemplate(array) {
  return array.map(categoryTemplate).join('');
}

function bookTemlate({ book_image, author, title, _id }) {
  return `<li class="book-item" data-id="${_id}">
  <div class="book-item-img">
      <img src="${book_image}" alt="bookname"/></div>
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
      <ul class="top-book-list">
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
                  >
                  <svg class="icon-link" width="18px" height="18px">
              <use href=".${icons}#${infoLink.name}"></use>
            </svg>
                </a>
              </li>`;
}

function shopBookTemlate({
  book_image,
  author,
  title,
  buy_links,
  description,
  list_name,
  _id,
}) {
  return `<li class="item-shoplist" data-id="${_id}">
      <div class="img-book">
        <img src="${book_image}" alt="book" />
      </div>
      <div class="book-info-shoplist">
        <div class="book-info-header" >
          <div class="book-name-header">
            <h2 class="book-title-header">${title}</h2>
            <h3 class="book-category-header">${list_name}</h3>
          </div>
          <div class="icon-header">
            <svg class="icon-trash-header" width="18px" height="18px">
              <use href=".${icons}#icon-x-close"></use>
            </svg>
          </div> 
        </div>
        <div class="book-desc-shoplist">
          <p>${description}</p>
        </div>
        <div class="book-footer">
          <div class="book-author-footer"><p>${author}</p></div>
          <ul class="book-link-footer">${modalLinksTemplate(buy_links)}</ul>
        </div>
      </div>
    </li>`;
}

export function shopListTemlate(array) {
  console.log(array.map(shopBookTemlate).join(''));
  return array.map(shopBookTemlate).join('');
}
