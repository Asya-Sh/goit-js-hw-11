import{S as f,i as d}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function h(r){const s="https://pixabay.com",o="/api",i=new URLSearchParams({key:"42797390-82869f1936654cf50378828df",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${o}?${i}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const m=new f(".gallery a",{captionsData:"alt",captionDelay:250}),p=document.querySelector(".gallery");function g(r){const s=y;p.innerHTML=s,m.refresh()}function y(r){return r.map(L).join(`
`)}function L(r){const{webformatURL:s,largeImageURL:o,tags:i,likes:e,views:t,comments:n,downloads:u}=r;return`<li class="gallery-item">
    <a class="gallery-link" href="${o}">
        <img
            class="gallery-image"
            src="${s}"
            alt="${i}"
            width="${previewWidth}"
            height="${previewHeight}"
        />
    </a>
    <ul class="desc-list">
            <li class="desc-item">
                <h3 class="desc-title">Likes</h3>
                <p>${e}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Views</h3>
                <p>${t}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Comments</h3>
                <p>${n}</p>
            </li>
            <li class="desc-li">
                <h3 class="desc-title">Downloads</h3>
                <p>${u}</p>
            </li>
        </ul>
</li>`}const c=document.querySelector(".loader");function w(){c.classList.remove("is-hide")}function l(){c.classList.add("is-hide")}function a(r){d.error({title:"Error",message:r,iconUrl:error,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",transitionIn:"fadeInDown",transitionOut:"fadeOutRight",closeOnClick:"false"})}const $=document.querySelector(".js-form");$.addEventListener("submit",O);function O(r){r.preventDefault(),w(),clearMarkup();const s=r.target.elements.data.value.trim().split(" ");if(userValue.filter(o=>o).join("+"),!s){clearMarkup(),a("Please enter a search term"),l();return}h(s).then(function(o){o.hits.length===0?(clearMarkup(),a("Sorry, no images found. Please try again.")):g(o.hits)}).catch(function(o){console.error("Error fetching images:",o),a("An error occurred. Please try again later.")}).finally(function(){l()}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
