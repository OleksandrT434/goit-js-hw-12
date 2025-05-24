import{a as g,S as L,i as m}from"./assets/vendor-DKtxmrwh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const b="50347023-c170e0a84468278d26beb99ca",v="https://pixabay.com/api/";async function p(e,o=1){const s={key:b,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await g.get(v,{params:s})).data.hits}catch{return console.log("error"),[]}}const a={allGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more"),bottomLoader:document.querySelector(".loader-bottom")};function w(){a.bottomLoader.classList.remove("hidden")}function d(){a.bottomLoader.classList.add("hidden")}function B(){a.loader.classList.remove("hidden")}function u(){a.loader.classList.add("hidden")}function S(){a.allGallery.innerHTML=""}function f(){a.loadMoreBtn.classList.add("hidden")}function h(){a.loadMoreBtn.classList.remove("hidden")}const q=new L(".gallery a",{captionsData:"alt",captionDelay:250});function M(e){return`
    <li class="gallery-item">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.webformatURL}"
          alt="${e.tags}"
        />
      </a>
      <div class="image-stats">
        <div class="stat-block">
          <p class="label">Likes</p>
          <p class="value">${e.likes}</p>
        </div>
        <div class="stat-block">
          <p class="label">Views</p>
          <p class="value">${e.views}</p>
        </div>
        <div class="stat-block">
          <p class="label">Comments</p>
          <p class="value">${e.comments}</p>
        </div>
        <div class="stat-block">
          <p class="label">Downloads</p>
          <p class="value">${e.downloads}</p>
        </div>
      </div>
    </li>`}function y(e){a.allGallery.insertAdjacentHTML("beforeend",e.map(M).join("")),q.refresh()}let n="",c=1;const $=document.querySelector(".form"),O=document.querySelector(".load-more");$.addEventListener("submit",async e=>{if(e.preventDefault(),n=e.target.elements["search-text"].value.trim(),!!n){c=1,B(),S();try{const o=await p(n,c);if(o.length===0){m.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),u(),f();return}y(o),h(),scrollFrame(()=>{const s=document.querySelector(".gallery-item:last-child");if(s){const l=s.getBoundingClientRect();window.scrollBy({top:l.height+24,behavior:"smooth"})}})}catch{}finally{u(),e.target.reset()}}});O.addEventListener("click",async e=>{w(),c+=1;try{const o=await p(n,c);if(o.length===0){m.show({message:"We are sorry, but you have reached the end of search results.",color:"blue",position:"topRight"}),f(),d();return}y(o),h()}catch(o){console.log("Error",o)}finally{d()}});
//# sourceMappingURL=index.js.map
