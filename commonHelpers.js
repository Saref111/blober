import{b as c,i as g}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const f=()=>{let e="#";for(let t=0;t<3;t++){let o=Math.floor(Math.random()*256).toString(16);e+=o.padStart(2,"0")}return console.log(e),e},u=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,h=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),p=()=>`translate(${u(-300,300)}, ${u(-300,300)})`,d=650,b=`<defs>
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
                        </text>`,v=e=>{const t=c({size:d,growth:1,seed:e.seed.toString()}).path,o=[c({size:d,growth:1.5,seed:(e.seed+1).toString()}).path,c({size:d,growth:2,seed:(e.seed+2).toString()}).path];return`<g transform="${e.transform}" filter="url(#${e.filterId})">
                <path d="${t}" fill="${e.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${t};${o.join(";")};${t}" 
                    />
                </path>
            </g>`},S=(e,t)=>{e.color||(e.color=f());const o=v(e);t.insertAdjacentHTML("afterbegin",o)},m=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=y;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",b),e.forEach(o=>{S(o,t)})},E=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),o=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),r=g(n);navigator.clipboard.writeText(r)}),o.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(n)}),t.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),r=new Blob([n],{type:"image/svg+xml"}),a=URL.createObjectURL(r),l=document.createElement("a");l.href=a,l.download="blobs.svg",l.click(),URL.revokeObjectURL(a)})};class L{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const o=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(o)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(o=>o.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,o){if(this.entities.has(t)){const s=Array.from(this.entities),n=s.findIndex(r=>r===t);s[n]=o,this.entities=new Set(s),this.save()}}}const i=new L("__blobConfigs__"),B=()=>{const e=Math.floor(Math.random()*1e9);return{id:h(),transform:p(),filterId:"filter",color:f(),seed:e}},w=e=>{const t=i.findEntity(o=>o.id===e);t&&i.removeEntity(t)},k=({id:e,color:t,seed:o})=>{const s=document.createElement("fieldset");return s.classList.add("blob-fieldset"),s.innerHTML=`
      <label>
          <span>Color:</span>
          <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
      </label>
      <label>
        <span>Seed:</span>
        <input value="${o}" type="text" name="seed_${e}" id="seed_${e}" />
      </label>
      <button type="button" class="remove-blob">Remove</button>
  `,s.querySelector(".remove-blob").addEventListener("click",()=>w(e)),s},x=e=>{const t=e.target,[o,s]=t.name.split("_"),n=i.findEntity(a=>a.id===s);if(!n)return;let r={...n};o==="color"?r.color=t.value:o==="seed"&&(r.seed=parseInt(t.value,10)),i.updateEntity(n,r)},M=e=>{const t=e.querySelector("#add-blob"),o=s=>{s==null||s.preventDefault();const n=i.getEntities();e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),n.forEach(r=>{e.insertAdjacentElement("beforeend",k(r))})};t.addEventListener("click",()=>{const s=B();i.addEntity(s)}),e.addEventListener("reset",s=>{s.preventDefault(),i.clear(),e.querySelectorAll(".blob-fieldset").forEach(n=>n.remove())}),document.addEventListener("update",o),e.addEventListener("input",x),o()},_=document.querySelector(".controls__form");E();M(_);document.addEventListener("update",()=>{m(i.getEntities())});m(i.getEntities());
//# sourceMappingURL=commonHelpers.js.map
