import{S as g,i as y}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function L(r){const s="https://pixabay.com/",i="api/",o=new URLSearchParams({key:"42797390-82869f1936654cf50378828df",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${i}?${o}`;return fetch(e).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const w=new g(".gallery a",{captionsData:"alt",captionDelay:250}),u=document.querySelector(".gallery");function $(r){const s=v(r);u.innerHTML=s,w.refresh()}function v(r){return r.map(S).join(`
`)}function S(r){const{webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:h,previewWidth:m,previewHeight:p}=r;return`<li class="gallery-item">
    <a class="gallery-link" href="${i}">
        <img
            class="gallery-image"
            src="${s}"
            alt="${o}"
            width="${m}"
            height="${p}"
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
                <p>${h}</p>
            </li>
        </ul>
</li>`}function a(){u.innerHTML=""}const b="/goit-js-hw-11/assets/error-03aea49c.svg",d=document.querySelector(".loader");function E(){d.classList.remove("is-hide")}function c(){d.classList.add("is-hide")}function l(r){y.error({message:r,backgroundColor:"#EF4040",messageColor:"#fff",position:"topRight",iconUrl:b})}const f=document.querySelector(".js-form"),I="Sorry, there are no images matching your search query. Please try again!",M="Error, empty field";f.addEventListener("submit",O);function O(r){r.preventDefault(),E(),a();const i=r.target.elements.search.value.trim().split(" ").join("+");if(!i){a(),l(M),c();return}L(i).then(o=>{o.hits.length===0?(c(),l(I)):$(o.hits)}).catch(console.log).finally(()=>{c(),f.reset()}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
