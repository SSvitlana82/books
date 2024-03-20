import{a as c}from"./vendor-0cb09735.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const i={donations:document.querySelector(".js-support-list"),boorgerMenuBtn:document.querySelector(".btn-burger-menu"),boorgerMenuBackdrop:document.querySelector(".js-header-backdrop"),categoryList:document.querySelector(".js-category-list"),bookList:document.querySelector(".js-book-list"),errorBook:document.querySelector(".error-img"),modal:{mainBackdrop:document.querySelector(".js-backdrop"),closeBtn:document.querySelector(".js-modal-btn-close"),message:document.querySelector(".js-message-modal"),shopListBtn:document.querySelector(".js-btn-modal-buy"),content:document.querySelector(".js-modal-content")},themeBtn:document.querySelector(".js-toggle")},u="https://books-backend.p.goit.global/books";async function O(){const e=`${u}/category-list`;return(await c.get(e)).data}async function M(){const e=`${u}/top-books`;return(await c.get(e)).data}async function x(e){e=e.trim();const t={category:e},s=`${u}/category`;return(await c.get(s,{params:t})).data}async function m(e){e=e.trim();const t=`${u}/${e}`;return(await c.get(t)).data}const d="/books/assets/icons-fc923b26.svg";function g(e){return`<li class="category-item">${e.list_name}</li>`}function I(e){return e.map(g).join("")}function h({book_image:e,author:t,title:s,_id:n}){return`<li class="book-item" data-id="${n}">
  <div class="book-item-img">
      <img src="${e}" alt="bookname"/></div>
      <h3>${s}</h3>
      <p>${t}</p>
    </li>`}function f(e){return e.map(h).join("")}function k(e){return`<li class="popular-top-book">
      <h3>${e.list_name}</h3>
      <ul class="top-book-list">
         ${f(e.books)}
      </ul>
      <button data-top="${e.list_name}">SEE MORE</button>
    </li>`}function P(e){return e.map(k).join("")}function y(e,t){return`<li class="support-item">
      <a target="_blank" href="${e.url}" class="support-item-link">
        <p class="support-item-name">${t+1}</p>
        <svg class="support-item-logo">
        <use href=".${d}#${e.img}"></use>
        </svg>
      </a>
    </li>`}function b(e){return e.map(y).join("")}function A({book_image:e,author:t,title:s,buy_links:n,description:o}){return`<img
          src="${e}"
          alt="книга"
        />
        <ul class="list-modal">
          <li class="item-modal">
            <h2 class="name-modal">${s}</h2>
            <p class="author-modal">${t}</p>
            <p class="description-modal">${o}
            </p>
            <ul class="buy-list-modal">
              ${p(n)}
            </ul>
          </li>
        </ul>`}function p(e){return["Amazon","Apple_Books","Bookshop"].map(n=>e.find(o=>o.name.replaceAll(" ","_")===n)).map(v).join("")}function v(e){return e?`<li class="item-buy">
                <a
                  href="${e.url}"
                  class="link-buy-modal"
                  >
                  <svg class="icon-link" width="18px" height="18px">
              <use href=".${d}#${e.name}"></use>
            </svg>
                </a>
              </li>`:""}function S({book_image:e,author:t,title:s,buy_links:n,description:o,list_name:r,_id:l}){return console.log(n),`<li class="item-shoplist" data-id="${l}">
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
              <use href=".${d}#icon-x-close"></use>
            </svg>
          </div> 
        </div>
        <div class="book-desc-shoplist">
          <p>${o}</p>
        </div>
        <div class="book-footer">
          <div class="book-author-footer"><p>${t}</p></div>
          <ul class="book-link-footer">${p(n)}</ul>
        </div>
      </div>
    </li>`}function E(e){return e.map(S).join("")}i.modal.shopListBtn.addEventListener("click",$);const a=JSON.parse(localStorage.getItem("shopListStorage"))||[];async function $(e){const t=e.target.getAttribute("data-id");await L(t),w(t)}function w(e){a.some(s=>s._id===e)===!1?(i.modal.shopListBtn.textContent="ADD TO SHOPPING LIST",i.modal.message.classList.add("hidden")):(i.modal.shopListBtn.textContent="remove",i.modal.message.classList.remove("hidden"))}async function L(e){if(a.some(s=>s._id===e)===!1){const s=await m(e);a.push(s),localStorage.setItem("shopListStorage",JSON.stringify(a))}else{const s=a.findIndex(n=>n._id===e);a.splice(s,1),localStorage.setItem("shopListStorage",JSON.stringify(a))}}const B=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:"icon-ukraine"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:"icon-ukraine"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:"icon-ukraine"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:"icon-ukraine"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:"icon-ukraine"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:"icon-ukraine"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:"icon-ukraine"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:"icon-ukraine"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:"icon-user"}],T=b(B);i.donations.innerHTML=T;console.log(i);i.themeBtn.addEventListener("change",j);function j(){document.body.classList.toggle("light-theme"),document.body.classList.toggle("dark-theme"),console.log(document.body.classList)}export{x as a,f as b,I as c,M as d,m as e,L as f,O as g,A as m,P as p,i as r,E as s,w as u};
//# sourceMappingURL=toggle-d10e64ed.js.map
