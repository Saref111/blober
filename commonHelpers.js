import{b as d,i as v}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const h=()=>{let e="#";for(let t=0;t<3;t++){let o=Math.floor(Math.random()*256).toString(16);e+=o.padStart(2,"0")}return e},g=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,b=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),E=()=>"translate",u=650,S=`<defs>
                    <filter id="filter" x="-100" y="-100" width="1750" height="1750"
                    filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>                   
                </defs>`,L=` <circle
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
                        </text>`;class w{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const o=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(o)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(o=>o.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,o){if(this.entities.has(t)){const s=Array.from(this.entities),n=s.findIndex(r=>r===t);s[n]=o,this.entities=new Set(s),this.save()}}}const a=new w("__blobConfigs__"),B=e=>{const t=d({size:u,growth:1,seed:e.seed.toString()}).path,o=[d({size:u,growth:1.5,seed:(e.seed+1).toString()}).path,d({size:u,growth:2,seed:(e.seed+2).toString()}).path];return`<g style="--color: ${e.color};" transform="${e.transform.type}(${e.transform.args.join(", ")})" filter="url(#${e.filterId})">
                <path d="${t}" fill="${e.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${t};${o.join(";")};${t}" 
                    />
                </path>
            </g>`},x=(e,t)=>{const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.innerHTML=t;const s=o.querySelector("g");let n=e.transform.args[0],r=e.transform.args[1],i=0,l=0;const m=c=>{const f=c.clientX-n,p=c.clientY-r;i=f,l=p,s.setAttribute("transform",`translate(${f} ${p})`)};return s.addEventListener("mousedown",c=>{c.stopPropagation(),n=c.clientX-n,r=c.clientY-r,document.addEventListener("mousemove",m),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",m),a.updateEntity(e,{...e,transform:{type:"translate",args:[i,l]}})})}),s},k=(e,t)=>{e.color||(e.color=h());const o=x(e,B(e));t.insertAdjacentElement("afterbegin",o)},y=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=L;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",S),e.forEach(o=>{k(o,t)})},$=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),o=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),r=v(n);navigator.clipboard.writeText(r)}),o.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(n)}),t.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),r=new Blob([n],{type:"image/svg+xml"}),i=URL.createObjectURL(r),l=document.createElement("a");l.href=i,l.download="blobs.svg",l.click(),URL.revokeObjectURL(i)})},A=()=>{const e=Math.floor(Math.random()*1e9);return{id:b(),transform:{type:E(),args:[g(-300,300),g(-300,300)]},filterId:"filter",color:h(),seed:e}},M=e=>{const t=a.findEntity(o=>o.id===e);t&&a.removeEntity(t)},T=({id:e,color:t,seed:o})=>{const s=document.createElement("fieldset");return s.classList.add("blob-fieldset"),s.innerHTML=`
      <label>
          <span>Color:</span>
          <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
      </label>
      <label>
        <span>Seed:</span>
        <input value="${o}" type="text" name="seed_${e}" id="seed_${e}" />
      </label>
      <button type="button" class="remove-blob">Remove</button>
  `,s.querySelector(".remove-blob").addEventListener("click",()=>M(e)),s},_=e=>{const t=e.target,[o,s]=t.name.split("_"),n=a.findEntity(i=>i.id===s);if(!n)return;let r={...n};o==="color"?r.color=t.value:o==="seed"&&(r.seed=parseInt(t.value,10)),a.updateEntity(n,r)},I=e=>{const t=e.querySelector("#add-blob"),o=s=>{s==null||s.preventDefault();const n=a.getEntities();e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),n.forEach(r=>{e.insertAdjacentElement("beforeend",T(r))})};t.addEventListener("click",()=>{const s=A();a.addEntity(s)}),e.addEventListener("reset",s=>{s.preventDefault(),a.clear(),e.querySelectorAll(".blob-fieldset").forEach(n=>n.remove())}),document.addEventListener("update",o),e.addEventListener("input",_),o()},q=document.querySelector(".controls__form");$();I(q);document.addEventListener("update",()=>{y(a.getEntities())});y(a.getEntities());
//# sourceMappingURL=commonHelpers.js.map
