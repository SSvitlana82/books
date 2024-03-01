import { refs } from './modules/refs';
refs.boorgerMenuBtn.addEventListener('click', onBoorgerMenuBtnClick);
function onBoorgerMenuBtnClick(e) {
  refs.boorgerMenuBackdrop.classList.remove('hidden');
}
console.log('hello');
