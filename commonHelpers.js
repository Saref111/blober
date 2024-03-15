import{b as c,i as h}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const f=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,u=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,g=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),b=()=>`translate(${u(-300,300)}, ${u(-300,300)})`,d=650,p=`<defs>
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
                        </text>`,v=e=>{const t=c({size:d,growth:1,seed:e.seed.toString()}).path,n=[c({size:d,growth:1.5,seed:(e.seed+1).toString()}).path,c({size:d,growth:2,seed:(e.seed+2).toString()}).path];return`<g transform="${e.transform}" filter="url(#${e.filterId})">
                <path d="${t}" fill="${e.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${t};${n.join(";")};${t}" 
                    />
                </path>
            </g>`},S=(e,t)=>{e.color||(e.color=f());const n=v(e);t.insertAdjacentHTML("afterbegin",n)},m=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=y;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",p),e.forEach(n=>{S(n,t)})},E=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),n=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const o=new XMLSerializer().serializeToString(e),r=h(o);navigator.clipboard.writeText(r)}),n.addEventListener("click",()=>{const o=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(o)}),t.addEventListener("click",()=>{const o=new XMLSerializer().serializeToString(e),r=new Blob([o],{type:"image/svg+xml"}),a=URL.createObjectURL(r),l=document.createElement("a");l.href=a,l.download="blobs.svg",l.click(),URL.revokeObjectURL(a)})};class L{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const n=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(n)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(n=>n.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,n){this.entities.has(t)&&(this.entities.delete(t),this.entities.add(n),this.save())}}const i=new L("__blobConfigs__"),B=()=>{const e=Math.floor(Math.random()*1e9);return{id:g(),transform:b(),filterId:"filter",color:f(),seed:e}},w=e=>{const t=i.findEntity(n=>n.id===e);t&&i.removeEntity(t)},k=({id:e,color:t,seed:n})=>{const s=document.createElement("fieldset");return s.classList.add("blob-fieldset"),s.innerHTML=`
      <label>
          <span>Color:</span>
          <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
      </label>
      <label>
        <span>Seed:</span>
        <input value="${n}" type="text" name="seed_${e}" id="seed_${e}" />
      </label>
      <button type="button" class="remove-blob">Remove</button>
  `,s.querySelector(".remove-blob").addEventListener("click",()=>w(e)),s},M=e=>{const t=e.querySelector("#add-blob"),n=s=>{s==null||s.preventDefault();const o=i.getEntities();e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),o.forEach(r=>{e.insertAdjacentElement("beforeend",k(r))})};t.addEventListener("click",()=>{const s=B();i.addEntity(s)}),e.addEventListener("reset",s=>{s.preventDefault(),i.clear(),e.querySelectorAll(".blob-fieldset").forEach(o=>o.remove())}),document.addEventListener("update",n),n()},$=document.querySelector(".controls__form");E();M($);document.addEventListener("update",()=>{m(i.getEntities())});m(i.getEntities());
//# sourceMappingURL=commonHelpers.js.map
