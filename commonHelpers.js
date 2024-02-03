import{b as i}from"./assets/vendor-84288bc5.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const u=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,c=(e,o)=>Math.floor(Math.random()*(o-e+1))+e,a=400,f=()=>`translate(${c(-300,300)}, ${c(-300,300)})`,p=e=>{const{path:o}=i({size:a,growth:1});return`<g transform="${f()}" filter="url(#filter)">
                <path d="${o}" fill="${e}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${o};${i({size:a,growth:1.5}).path};${i({size:a,growth:1.5}).path};${o}" 
                    />
                </path>
            </g>`},g=(e={},o)=>{e.color||(e.color=u());const n=p(e.color);o.insertAdjacentHTML("afterbegin",n)},b=e=>{const o=document.querySelector(".screen");o.innerHTML="",e.forEach(n=>{g(n,o)})},m=e=>{const o=new FormData(e),n=[];for(const[s,t]of o.entries()){const[r,l]=s.split("_");n[l]||(n[l]={}),n[l][r]=t}return n},d=e=>`
        <fieldset class="blob-fieldset">
            <label>
                <span>Color:</span>
                <input value="${u()}" type="color" name="color_${e}" id="color_${e}" />
            </label>
        </fieldset>`,h=(e,o)=>{e.querySelector("#add-blob").addEventListener("click",()=>{const s=e.querySelectorAll(".blob-fieldset").length;e.insertAdjacentHTML("beforeend",d(s))}),e.addEventListener("submit",s=>{s.preventDefault();const t=m(e);o(t)}),e.insertAdjacentHTML("beforeend",d(0))},y=document.querySelector(".controls__form");h(y,b);
//# sourceMappingURL=commonHelpers.js.map
