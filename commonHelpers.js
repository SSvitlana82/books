import"./assets/style-d5eaecd2.js";import{a as r}from"./assets/vendor-0cb09735.js";const e={boorgerMenuBtn:document.querySelector(".btn-burger-menu"),boorgerMenuBackdrop:document.querySelector(".js-header-backdrop"),categoryList:document.querySelector(".js-category-list"),bookList:document.querySelector(".js-book-list")};e.boorgerMenuBtn.addEventListener("click",l);function l(o){e.boorgerMenuBackdrop.classList.remove("hidden")}console.log("hello");const s="https://books-backend.p.goit.global/books";async function u(){const o=`${s}/category-list`;return(await r.get(o)).data}async function g(){const o=`${s}/top-books`;return(await r.get(o)).data}async function i(o){o=o.trim();const t={category:o},n=`${s}/category`;return(await r.get(n,{params:t})).data}function p(o){return`<li class="category-item">${o.list_name}</li>`}function k(o){return o.map(p).join("")}function m({book_image:o,author:t,title:n}){return`<li>
      <img src="${o}" alt="bookname" />
      <h3>${n}</h3>
      <p>${t}</p>
    </li>`}function a(o){return o.map(m).join("")}function b(o){return`<li class="popular-top-book">
      <h3>${o.list_name}</h3>
      <ul>
         ${a(o.books)}
      </ul>
      <button data-top="${o.list_name}">SEE MORE</button>
    </li>`}function L(o){return o.map(b).join("")}e.categoryList.addEventListener("click",d);u().then(o=>{o.unshift({list_name:"ALL CATEGORIES"});const t=k(o);console.log(t),e.categoryList.innerHTML=t});function d(o){if(console.log(o.target),console.log(o.currentTarget),o.target!==o.currentTarget){if(o.target.textContent==="ALL CATEGORIES"){c();return}i(o.target.textContent).then(t=>{if(console.log(t),t.length===0)return alert("Noooooooo");const n=a(t);e.bookList.innerHTML=n})}}function c(){g().then(o=>{if(o.length===0)return alert("Noooooooo");console.log(o);const t=L(o);e.bookList.innerHTML=t})}c();e.bookList.addEventListener("click",f);function f(o){o.target.nodeName==="BUTTON"&&i(o.target.dataset.top).then(t=>{if(t.length===0)return alert("Noooooooo");const n=a(t);e.bookList.innerHTML=n})}
//# sourceMappingURL=commonHelpers.js.map
