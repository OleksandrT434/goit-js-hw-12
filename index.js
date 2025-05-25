import{a as v,S as w,i as f}from"./assets/vendor-DKtxmrwh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const B="50347023-c170e0a84468278d26beb99ca",S="https://pixabay.com/api/";async function p(e,o=1){const s={key:B,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15};try{return(await v.get(S,{params:s})).data}catch{return console.log("error"),[]}}const a={allGallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more"),bottomLoader:document.querySelector(".loader-bottom")};function q(){console.log("Нижній спінер"),a.bottomLoader.classList.remove("hidden")}function h(){a.bottomLoader.classList.add("hidden")}function M(){a.loader.classList.remove("hidden")}function y(){a.loader.classList.add("hidden")}function $(){a.allGallery.innerHTML=""}function n(){a.loadMoreBtn.classList.add("hidden")}function g(){a.loadMoreBtn.classList.remove("hidden")}const O=new w(".gallery a",{captionsData:"alt",captionDelay:250});function R(e){return`
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
    </li>`}function L(e){a.allGallery.insertAdjacentHTML("beforeend",e.map(R).join("")),O.refresh()}let c="",d=1,m=0,l=0;const k=document.querySelector(".form"),x=document.querySelector(".load-more");n();y();h();k.addEventListener("submit",async e=>{if(e.preventDefault(),c=e.target.elements["search-text"].value.trim(),!!c){d=1,l=0,M(),$();try{const{hits:o,totalHits:s}=await p(c,d);if(m=s,o.length===0){f.show({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),n();return}L(o),l+=o.length,l<m?g():n(),b()}catch(o){console.log(o)}finally{y(),e.target.reset()}}});x.addEventListener("click",async()=>{q(),n(),console.log("Нижній спінер"),d+=1;try{const{hits:e}=await p(c,d);l+=e.length,g(),(e.length===0||l>=m)&&(n(),f.info({message:"We are sorry, but you have reached the end of search results.",position:"topRight"})),L(e),b()}catch(e){console.log(e)}finally{h()}});function b(){const e=document.querySelector(".gallery-item:last-child");if(e){const o=e.getBoundingClientRect();window.scrollBy({top:o.height+24,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
