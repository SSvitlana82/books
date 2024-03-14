import { refs } from './js/modules/refs';
import { shopListTemlate } from './js/modules/render-functions';

const shopList = JSON.parse(localStorage.getItem('shopListStorage')) || [];
const markup = shopListTemlate(shopList);
console.log(markup);
refs.bookList.innerHTML = markup;
