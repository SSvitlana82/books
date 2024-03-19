import{a as c}from"./vendor-0cb09735.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const l={donations:document.querySelector(".js-support-list"),boorgerMenuBtn:document.querySelector(".btn-burger-menu"),boorgerMenuBackdrop:document.querySelector(".js-header-backdrop"),categoryList:document.querySelector(".js-category-list"),bookList:document.querySelector(".js-book-list"),errorBook:document.querySelector(".error-img"),modal:{mainBackdrop:document.querySelector(".js-backdrop"),closeBtn:document.querySelector(".js-modal-btn-close"),message:document.querySelector(".js-message-modal"),shopListBtn:document.querySelector(".js-btn-modal-buy"),content:document.querySelector(".js-modal-content")}},u="https://books-backend.p.goit.global/books";async function T(){const e=`${u}/category-list`;return(await c.get(e)).data}async function j(){const e=`${u}/top-books`;return(await c.get(e)).data}async function q(e){e=e.trim();const o={category:e},s=`${u}/category`;return(await c.get(s,{params:o})).data}async function m(e){e=e.trim();const o=`${u}/${e}`;return(await c.get(o)).data}const p="/books/assets/icons-fc923b26.svg";function f(e){return`<li class="category-item">${e.list_name}</li>`}function x(e){return e.map(f).join("")}function g({book_image:e,author:o,title:s,_id:a}){return`<li class="book-item" data-id="${a}">
  <div class="book-item-img">
      <img src="${e}" alt="bookname"/></div>
      <h3>${s}</h3>
      <p>${o}</p>
    </li>`}function h(e){return e.map(g).join("")}function b(e){return`<li class="popular-top-book">
      <h3>${e.list_name}</h3>
      <ul class="top-book-list">
         ${h(e.books)}
      </ul>
      <button data-top="${e.list_name}">SEE MORE</button>
    </li>`}function O(e){return e.map(b).join("")}function k(e,o){return`<li class="support-item">
      <a target="_blank" href="${e.url}" class="support-item-link">
        <p class="support-item-name">${o+1}</p>
        <svg class="support-item-logo">
        <use href=".${p}#${e.img}"></use>
        </svg>
      </a>
    </li>`}function w(e){return e.map(k).join("")}function I({book_image:e,author:o,title:s,buy_links:a,description:t}){return`<img
          src="${e}"
          alt="книга"
        />
        <ul class="list-modal">
          <li class="item-modal">
            <h2 class="name-modal">${s}</h2>
            <p class="author-modal">${o}</p>
            <p class="description-modal">${t}
            </p>
            <ul class="buy-list-modal">
              ${d(a)}
            </ul>
          </li>
        </ul>`}function d(e){return["Amazon","Apple_Books","Bookshop"].map(a=>e.find(t=>t.name.replaceAll(" ","_")===a)).map(y).join("")}function y(e){return e?`<li class="item-buy">
                <a
                  href="${e.url}"
                  class="link-buy-modal"
                  >
                  <svg class="icon-link" width="18px" height="18px">
              <use href=".${p}#${e.name}"></use>
            </svg>
                </a>
              </li>`:""}function $({book_image:e,author:o,title:s,buy_links:a,description:t,list_name:r,_id:i}){return console.log(a),`<li class="item-shoplist" data-id="${i}">
      <div class="img-book">
        <img src="${e}" alt="book" />
      </div>
      <div class="book-info-shoplist">
        <div class="book-info-header" >
          <div class="book-name-header">
            <h2 class="book-title-header">${s}</h2>
            <h3 class="book-category-header">${r}</h3>
          </div>
          <div class="icon-header">
            <svg class="icon-trash-header" width="18px" height="18px">
              <use href=".${p}#icon-x-close"></use>
            </svg>
          </div> 
        </div>
        <div class="book-desc-shoplist">
          <p>${t}</p>
        </div>
        <div class="book-footer">
          <div class="book-author-footer"><p>${o}</p></div>
          <ul class="book-link-footer">${d(a)}</ul>
        </div>
      </div>
    </li>`}function M(e){return e.map($).join("")}l.modal.shopListBtn.addEventListener("click",S);const n=JSON.parse(localStorage.getItem("shopListStorage"))||[];async function S(e){const o=e.target.getAttribute("data-id");await L(o),v(o)}function v(e){n.some(s=>s._id===e)===!1?(l.modal.shopListBtn.textContent="ADD TO SHOPPING LIST",l.modal.message.classList.add("hidden")):(l.modal.shopListBtn.textContent="remove",l.modal.message.classList.remove("hidden"))}async function L(e){if(n.some(s=>s._id===e)===!1){const s=await m(e);n.push(s),localStorage.setItem("shopListStorage",JSON.stringify(n))}else{const s=n.findIndex(a=>a._id===e);n.splice(s,1),localStorage.setItem("shopListStorage",JSON.stringify(n))}}export{q as a,h as b,x as c,j as d,m as e,M as f,T as g,L as h,I as m,O as p,l as r,w as s,v as u};
//# sourceMappingURL=storage-83df1bca.js.map
