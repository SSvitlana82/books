import"./assets/style-d5eaecd2.js";import{a as r}from"./assets/vendor-0cb09735.js";const n={boorgerMenuBtn:document.querySelector(".btn-burger-menu"),boorgerMenuBackdrop:document.querySelector(".js-header-backdrop"),categoryList:document.querySelector(".js-category-list"),bookList:document.querySelector(".js-book-list")};n.boorgerMenuBtn.addEventListener("click",c);function c(e){n.boorgerMenuBackdrop.classList.remove("hidden")}console.log("hello");const a="https://books-backend.p.goit.global/books";async function s(){const e=`${a}/category-list`;return(await r.get(e)).data}async function i(e){const t={category:e},o=`${a}/category`;return(await r.get(o,{params:t})).data}function l(e){return`<li class="category-item">
        <a class="category-all-list>${e.list_name}</a>
        </li>`}function g(e){return e.map(l).join("")}function u({book_image:e,author:t,title:o}){return`<li>
      <img src="${e}" alt="bookname" />
      <h3>${o}</h3>
      <p>${t}</p>
    </li>`}function m(e){return e.map(u).join("")}n.categoryList.addEventListener("click",p);s().then(e=>{const t=g(e);n.categoryList.innerHTML=t});function p(e){e.target!==e.currentTarget&&i(e.target.textContent).then(t=>{console.log(t);const o=m(t);n.bookList.innerHTML=o})}
//# sourceMappingURL=commonHelpers.js.map
