import{b as l}from"./assets/vendor-84288bc5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const c=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,f=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,u=t=>{const e=f(0,t.length-1);return t.splice(e,1)[0]},a=400,d=`<defs>
                    <filter id="filter" x="-100" y="-100" width="750" height="750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>
                </defs>`,m=["translate(75, 75)","translate(0, -75)","translate(-75, 0)"],g=t=>{const{path:e}=l({size:a,growth:1});return`<g transform="${u(m)}" filter="url(#filter)">
                <path d="${e}" fill="${t}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${e};${l({size:a,growth:1.5}).path};${l({size:a,growth:1.5}).path};${e}" 
                    />
                </path>
            </g>`},p=(t={},e)=>{t.color||(t.color=c());const n=g(t.color);e.insertAdjacentHTML("afterbegin",n)},h=t=>{const e=document.querySelector(".screen");e.innerHTML="",e.insertAdjacentHTML("beforeend",d),t.forEach(n=>{p(n,e)})},y=t=>{const e=new FormData(t),n=[];for(const[i,r]of e.entries()){const[o,s]=i.split("_");n[s]||(n[s]={}),n[s][o]=r}return n},b=(t,e)=>{t.addEventListener("submit",n=>{n.preventDefault();const i=y(t);e(i)})},L=document.querySelector(".controls__form");b(L,h);
//# sourceMappingURL=commonHelpers.js.map
