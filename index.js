import{S as l,a as c}from"./assets/vendor-CSA7w3Pc.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();new l(".swiper",{slidesPerView:4,spaceBetween:16,slidesPerGroup:1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,pageUpDown:!0},mousewheel:{invert:!0},breakpoints:{310:{slidesPerView:1},740:{slidesPerView:2},1024:{slidesPerView:3},1440:{slidesPerView:4,spaceBetween:10}}});const a={list:document.querySelector(".reviews-list")};document.addEventListener("DOMContentLoaded",async()=>{try{const r=await u(),s=p(r);a.list.innerHTML=s}catch(r){a.list.innerHTML='<p class="reviews-err">---Not found---</p>',console.log(r)}});async function u(){return(await c.get("https://portfolio-js.b.goit.study/api/reviews")).data}function d(r){const{author:s,avatar_url:o,review:i}=r;return`<li class="reviews-item swiper-slide">
              <img
                class="reviews-img"
                src="${o}"
                alt="foto author"
              />
              <h2 class="reviews-name">${s}</h2>
              <p class="reviews-txt">${i}</p>
            </li>`}function p(r){return r.map(d).join("")}
//# sourceMappingURL=index.js.map
