(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=l(o);fetch(o.href,t)}})();const y={donations:document.querySelector(".js-support-list"),boorgerMenuBtn:document.querySelector(".btn-burger-menu"),boorgerMenuBackdrop:document.querySelector(".js-header-backdrop"),categoryList:document.querySelector(".js-category-list"),bookList:document.querySelector(".js-book-list"),modal:{mainBackdrop:document.querySelector(".js-backdrop"),closeBtn:document.querySelector(".js-modal-btn-close"),message:document.querySelector(".js-message-modal"),shopListBtn:document.querySelector(".js-btn-modal-buy"),content:document.querySelector(".js-modal-content")}},n="/books/assets/icons-7e8ba0b9.svg";console.log(n);function c(e){return`<li class="category-item">${e.list_name}</li>`}function g(e){return e.map(c).join("")}function u({book_image:e,author:s,title:l,_id:r}){return`<li class="book-item" data-id="${r}">
  <div class="book-item-img">
      <img src="${e}" alt="bookname"/></div>
      <h3>${l}</h3>
      <p>${s}</p>
    </li>`}function m(e){return e.map(u).join("")}function d(e){return`<li class="popular-top-book">
      <h3>${e.list_name}</h3>
      <ul class="top-book-list">
         ${m(e.books)}
      </ul>
      <button data-top="${e.list_name}">SEE MORE</button>
    </li>`}function h(e){return e.map(d).join("")}function p(e,s){return`<li class="support-item">
      <a target="_blank" href="${e.url}" class="support-item-link">
        <p class="support-item-name">${s+1}</p>
        <svg class="support-item-logo">
        <use href=".${n}#${e.img}"></use>
        </svg>
      </a>
    </li>`}function v(e){return e.map(p).join("")}function $({book_image:e,author:s,title:l,buy_links:r,description:o}){return`<img
          src="${e}"
          alt="книга"
        />
        <ul class="list-modal">
          <li class="item-modal">
            <h2 class="name-modal">${l}</h2>
            <p class="author-modal">${s}</p>
            <p class="description-modal">${o}
            </p>
            <ul class="buy-list-modal">
              ${a(r)}
            </ul>
          </li>
        </ul>`}function a(e){return["Amazon","Apple Books","Bookshop"].map(r=>e.find(o=>o.name===r)).map(f).join("")}function f(e){return e?`<li class="item-buy">
                <a
                  href="${e.url}"
                  class="link-buy-modal"
                  >${e.name}
                </a>
              </li>`:""}function b({book_image:e,author:s,title:l,buy_links:r,description:o,list_name:t,_id:i}){return`<li>
      <div>
        <img src="${e}" alt="book" />
      </div>
      <div>
        <div>
          <div>
            <h2>${l}</h2>
            <h3>${t}</h3>
          </div>
          <div>
            
          </div> 
        </div>
        <div><p>${o}</p></div>
        <div>
          <div><p>${s}</p></div>
          <div>${a(r)}</div>
        </div>
      </div>
    </li>`}function k(e){return e.map(b).join("")}export{k as a,m as b,g as c,$ as m,h as p,y as r,v as s};
//# sourceMappingURL=render-functions-e29f07a1.js.map
