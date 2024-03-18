import { refs } from './js/modules/refs';
import { shopListTemlate } from './js/modules/render-functions';
import { updateStorige } from './js/modules/storage';

const shopList = JSON.parse(localStorage.getItem('shopListStorage')) || [];
const markup = shopListTemlate(shopList);
console.log(markup);

refs.bookList.innerHTML = markup;
refs.bookList.insertAdjacentHTML(
  'beforebegin',
  '<h1 class="title-shoplist">Shopping<span> List</span></h1>'
);
console.log(refs.donations);
console.log(window.screen.width);

if (window.screen.width < 1440) {
  refs.donations.parentElement.remove();
}
//==================================================================

refs.bookList.addEventListener('click', onBookRemove);
function onBookRemove(i) {
  if (!i.target.classList.contains('icon-trash-header')) {
    return;
  }
  const bookElem = i.target.closest('.item-shoplist');
  const bookId = bookElem.dataset.id;

  console.log(bookId);
  updateStorige(bookId);
  bookElem.remove();
}
