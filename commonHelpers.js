import{b as c,i as g}from"./assets/vendor-a8b16073.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const f=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,u=(e,o)=>Math.floor(Math.random()*(o-e+1))+e,p=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),a=400,b=`<defs>
                    <filter id="filter" x="-100" y="-100" width="750" height="750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>
                </defs>`,m=()=>`translate(${u(-300,300)}, ${u(-300,300)})`,y=e=>{const{path:o}=c({size:a,growth:1});return`<g transform="${m()}" filter="url(#filter)">
                <path d="${o}" fill="${e}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${o};${c({size:a,growth:1.5}).path};${c({size:a,growth:1.5}).path};${o}" 
                    />
                </path>
            </g>`},h=(e,o)=>{e.color||(e.color=f());const n=y(e.color);o.insertAdjacentHTML("afterbegin",n)},S=e=>{const o=document.querySelector(".screen");o.innerHTML="",o.insertAdjacentHTML("beforeend",b),e.forEach(n=>{h(n,o)})},v=()=>{const e=document.querySelector(".screen"),o=document.querySelector("#load-svg"),n=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const t=new XMLSerializer().serializeToString(e),r=g(t);navigator.clipboard.writeText(r)}),n.addEventListener("click",()=>{const t=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(t)}),o.addEventListener("click",()=>{const t=new XMLSerializer().serializeToString(e),r=new Blob([t],{type:"image/svg+xml"}),i=URL.createObjectURL(r),l=document.createElement("a");l.href=i,l.download="blobs.svg",l.click(),URL.revokeObjectURL(i)})},L=e=>{const o=new FormData(e),n=[];for(const[s,t]of o.entries()){const[r,i]=s.split("_");n[i]||(n[i]={id:p()}),n[i][r]=t}return n},d=e=>`
        <fieldset class="blob-fieldset">
            <label>
                <span>Color:</span>
                <input value="${f()}" type="color" name="color_${e}" id="color_${e}" />
            </label>
        </fieldset>`,B=(e,o)=>{e.querySelector("#add-blob").addEventListener("click",()=>{const s=e.querySelectorAll(".blob-fieldset").length;e.insertAdjacentHTML("beforeend",d(s))}),e.addEventListener("reset",s=>{s.preventDefault(),e.querySelectorAll(".blob-fieldset").forEach(t=>t.remove()),e.insertAdjacentHTML("beforeend",d(0))}),e.addEventListener("submit",s=>{s.preventDefault();const t=L(e);o(t)}),e.insertAdjacentHTML("beforeend",d(0))},w=document.querySelector(".controls__form");v();B(w,S);
//# sourceMappingURL=commonHelpers.js.map
