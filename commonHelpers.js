import{b as i}from"./assets/vendor-84288bc5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const c=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,f=(r,e)=>Math.floor(Math.random()*(e-r+1))+r,u=r=>{const e=f(0,r.length-1);return r.splice(e,1)[0]},l=400,d=`<defs>
                    <filter id="filter" x="-100" y="-100" width="750" height="750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>
                </defs>`,m=["translate(75, 75)","translate(0, -75)","translate(-75, 0)"],p=r=>{const{path:e}=i({size:l,growth:1});return`<g transform="${u(m)}" filter="url(#filter)">
                <path d="${e}" fill="${r}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${e};${i({size:l,growth:1.5}).path};${i({size:l,growth:1.5}).path};${e}" 
                    />
                </path>
            </g>`},g=(r={},e)=>{r.color||(r.color=c());const n=p(r.color);e.insertAdjacentHTML("afterbegin",n)},h=r=>{const e=document.querySelector(".screen");e.innerHTML="",e.insertAdjacentHTML("beforeend",d),r.forEach(n=>{g(n,e)})};h([{}]);
//# sourceMappingURL=commonHelpers.js.map
