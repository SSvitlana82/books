import { refs } from './refs';
console.log(refs);
refs.themeBtn.addEventListener('change', onThemeChange);
function onThemeChange() {
  document.body.classList.toggle('light-theme');
  document.body.classList.toggle('dark-theme');
  console.log(document.body.classList);
}
