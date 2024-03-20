import { refs } from './js/modules/refs';
import { shopListTemlate } from './js/modules/render-functions';
import { updateStorige } from './js/modules/storage';
import './js/donations';
import './js/modules/toggle';

const shopList = JSON.parse(localStorage.getItem('shopListStorage')) || [];
const markup = shopListTemlate(shopList);

refs.bookList.innerHTML = markup;
refs.bookList.insertAdjacentHTML(
  'beforebegin',
  '<h1 class="title-shoplist">Shopping<span> List</span></h1>'
);

if (window.screen.width < 1440) {
  refs.donations.parentElement.remove();
}
//==================================================================

refs.bookList.addEventListener('click', onBookRemove);

function onBookRemove(i) {
  const iconHeader = i.target.closest('.icon-header');
  console.log(iconHeader);
  if (!iconHeader) {
    return;
  }
  const bookElem = i.target.closest('.item-shoplist');
  const bookId = bookElem.dataset.id;

  updateStorige(bookId);
  bookElem.remove();
  errorBook();
}

//==================================================================
function errorBook() {
  const shopList = JSON.parse(localStorage.getItem('shopListStorage')) || [];
  if (shopList.length > 0) {
    refs.errorBook.classList.add('hidden');
  } else refs.errorBook.classList.remove('hidden');
}
errorBook();
