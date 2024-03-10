import { refs } from './refs';
import { getBookInfo } from './books-api';

refs.modal.shopListBtn.addEventListener('click', onShopListBtnClick);
const shopList = JSON.parse(localStorage.getItem('shopListStorage')) || [];

async function onShopListBtnClick(event) {
  const bookId = event.target.getAttribute('data-id');
  const bookInShop = shopList.some(book => {
    return book._id === bookId;
  });
  console.log(bookInShop);

  if (bookInShop === false) {
    const book = await getBookInfo(bookId);
    shopList.push(book);
    localStorage.setItem('shopListStorage', JSON.stringify(shopList));
  } else {
    const indexBook = shopList.findIndex(book => {
      return book._id === bookId;
    });
    shopList.splice(indexBook, 1);
    localStorage.setItem('shopListStorage', JSON.stringify(shopList));
  }
  updateModalMarkup(bookId);
}
export function updateModalMarkup(bookId) {
  const bookInShop = shopList.some(book => {
    return book._id === bookId;
  });
  console.log(bookInShop);

  if (bookInShop === false) {
    refs.modal.shopListBtn.textContent = 'ADD TO SHOPPING LIST';
    refs.modal.message.classList.add('hidden');
  } else {
    refs.modal.shopListBtn.textContent = 'remove';
    refs.modal.message.classList.remove('hidden');
  }
}
