import{b as c,i as h}from"./assets/vendor-a8b16073.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const f=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,u=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,g=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),p=()=>`translate(${u(-300,300)}, ${u(-300,300)})`,d=650,b=`<defs>
                    <filter id="filter" x="-100" y="-100" width="1750" height="1750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>                   
                </defs>`,y=` <circle
                            cx="250"
                            cy="250"
                            r="200"
                            fill="none"
                            stroke="black"
                            stroke-width="2"
                        />
                        <text
                            x="50%"
                            y="50%"
                            text-anchor="middle"
                            font-size="30"
                            fill="black"
                        >
                            Hello, Blob!
                        </text>`,v=t=>{const e=c({size:d,growth:1,seed:t.seed.toString()}).path,o=[c({size:d,growth:1.5,seed:(t.seed+1).toString()}).path,c({size:d,growth:2,seed:(t.seed+2).toString()}).path];return`<g transform="${t.transform}" filter="url(#${t.filterId})">
                <path d="${e}" fill="${t.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${e};${o.join(";")};${e}" 
                    />
                </path>
            </g>`},S=(t,e)=>{t.color||(t.color=f());const o=v(t);e.insertAdjacentHTML("afterbegin",o)},m=t=>{const e=document.querySelector(".screen");if(!t.length){e.innerHTML=y;return}e.innerHTML="",e.insertAdjacentHTML("beforeend",b),t.forEach(o=>{S(o,e)})},E=()=>{const t=document.querySelector(".screen"),e=document.querySelector("#load-svg"),o=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(t),r=h(n);navigator.clipboard.writeText(r)}),o.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(t);navigator.clipboard.writeText(n)}),e.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(t),r=new Blob([n],{type:"image/svg+xml"}),a=URL.createObjectURL(r),l=document.createElement("a");l.href=a,l.download="blobs.svg",l.click(),URL.revokeObjectURL(a)})};class L{constructor(e){this.storage=localStorage,this.entities=new Set,this.metakey=e;const o=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(o)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(e){this.entities.add(e),this.save()}removeEntity(e){this.entities.delete(e),this.save()}has(e){return Array.from(this.entities).some(o=>o.id===e)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(e){return Array.from(this.entities).find(e)}updateEntity(e,o){if(this.entities.has(e)){const s=Array.from(this.entities),n=s.findIndex(r=>r===e);s[n]=o,this.entities=new Set(s),this.save()}}}const i=new L("__blobConfigs__"),B=()=>{const t=Math.floor(Math.random()*1e9);return{id:g(),transform:p(),filterId:"filter",color:f(),seed:t}},w=t=>{const e=i.findEntity(o=>o.id===t);e&&i.removeEntity(e)},k=({id:t,color:e,seed:o})=>{const s=document.createElement("fieldset");return s.classList.add("blob-fieldset"),s.innerHTML=`
      <label>
          <span>Color:</span>
          <input value="${e}" type="color" name="color_${t}" id="color_${t}" />
      </label>
      <label>
        <span>Seed:</span>
        <input value="${o}" type="text" name="seed_${t}" id="seed_${t}" />
      </label>
      <button type="button" class="remove-blob">Remove</button>
  `,s.querySelector(".remove-blob").addEventListener("click",()=>w(t)),s},x=t=>{const e=t.target,[o,s]=e.name.split("_"),n=i.findEntity(a=>a.id===s);if(!n)return;let r={...n};o==="color"?r.color=e.value:o==="seed"&&(r.seed=parseInt(e.value,10)),i.updateEntity(n,r)},M=t=>{const e=t.querySelector("#add-blob"),o=s=>{s==null||s.preventDefault();const n=i.getEntities();t.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),n.forEach(r=>{t.insertAdjacentElement("beforeend",k(r))})};e.addEventListener("click",()=>{const s=B();i.addEntity(s)}),t.addEventListener("reset",s=>{s.preventDefault(),i.clear(),t.querySelectorAll(".blob-fieldset").forEach(n=>n.remove())}),document.addEventListener("update",o),t.addEventListener("input",x),o()},_=document.querySelector(".controls__form");E();M(_);document.addEventListener("update",()=>{m(i.getEntities())});m(i.getEntities());
//# sourceMappingURL=commonHelpers.js.map
