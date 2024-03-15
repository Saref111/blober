import{b as d,i as v}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const h=()=>{let e="#";for(let t=0;t<3;t++){let r=Math.floor(Math.random()*256).toString(16);e+=r.padStart(2,"0")}return e},p=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,b=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),E=()=>"translate",u=650,S=`<defs>
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
                        </text>`;class w{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const r=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(r)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(r=>r.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,r){if(this.entities.has(t)){const o=Array.from(this.entities),n=o.findIndex(s=>s===t);o[n]=r,this.entities=new Set(o),this.save()}}moveEntity(t,r){const n=Array.from(this.entities).filter(s=>s!==t);n.splice(r,0,t),this.entities=new Set(n),this.save()}}const a=new w("__blobConfigs__"),B=e=>{const t=d({size:u,growth:1,seed:e.seed.toString()}).path,r=[d({size:u,growth:1.5,seed:(e.seed+1).toString()}).path,d({size:u,growth:2,seed:(e.seed+2).toString()}).path];return`<g style="--color: ${e.color};" transform="${e.transform.type}(${e.transform.args.join(", ")})" filter="url(#${e.filterId})">
                <path d="${t}" fill="${e.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${t};${r.join(";")};${t}" 
                    />
                </path>
            </g>`},x=(e,t)=>{const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.innerHTML=t;const o=r.querySelector("g");let n=e.transform.args[0],s=e.transform.args[1],i=0,l=0;const m=c=>{const f=c.clientX-n,g=c.clientY-s;i=f,l=g,o.setAttribute("transform",`translate(${f} ${g})`)};return o.addEventListener("mousedown",c=>{c.stopPropagation(),n=c.clientX-n,s=c.clientY-s,document.addEventListener("mousemove",m),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",m),a.updateEntity(e,{...e,transform:{type:"translate",args:[i,l]}})})}),o},A=(e,t)=>{e.color||(e.color=h());const r=x(e,B(e));t.insertAdjacentElement("afterbegin",r)},y=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=L;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",S),e.forEach(r=>{A(r,t)})},$=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),r=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),s=v(n);navigator.clipboard.writeText(s)}),r.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(n)}),t.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),s=new Blob([n],{type:"image/svg+xml"}),i=URL.createObjectURL(s),l=document.createElement("a");l.href=i,l.download="blobs.svg",l.click(),URL.revokeObjectURL(i)})},k=()=>{const e=Math.floor(Math.random()*1e9);return{id:b(),transform:{type:E(),args:[p(-300,300),p(-300,300)]},filterId:"filter",color:h(),seed:e}},T=e=>{const t=a.findEntity(r=>r.id===e);t&&a.removeEntity(t)},_=(e,t)=>{var s;e.preventDefault();const r=(s=e.dataTransfer)==null?void 0:s.getData("text/plain");if(r===t)return;const o=a.findEntity(i=>i.id===r),n=a.findEntity(i=>i.id===t);!o||!n||a.moveEntity(o,a.getEntities().indexOf(n))},M=(e,t)=>{e.addEventListener("dragstart",r=>{var o;(o=r.dataTransfer)==null||o.setData("text/plain",t)}),e.addEventListener("drop",r=>_(r,t)),e.addEventListener("dragover",r=>{r.preventDefault()})},I=({id:e,color:t,seed:r})=>{const o=document.createElement("fieldset");return o.setAttribute("id",`blob_${e}`),o.setAttribute("draggable","true"),o.setAttribute("style",`--color: ${t};`),o.classList.add("blob-fieldset"),o.innerHTML=`
        <label>
            <span>Color:</span>
            <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
        </label>
        <label>
          <span>Seed:</span>
          <input value="${r}" type="number" name="seed_${e}" id="seed_${e}" />
        </label>
        <button type="button" class="remove-blob">Remove</button>
    `,o.querySelector(".remove-blob").addEventListener("click",()=>T(e)),M(o,e),o},q=e=>{const t=e.target,[r,o]=t.name.split("_"),n=a.findEntity(i=>i.id===o);if(!n)return;let s={...n};r==="color"?s.color=t.value:r==="seed"&&(s.seed=parseInt(t.value,10)),a.updateEntity(n,s)},D=e=>{const t=e.querySelector("#add-blob"),r=o=>{o==null||o.preventDefault();const n=a.getEntities();e.querySelectorAll(".blob-fieldset").forEach(s=>s.remove()),n.forEach(s=>{e.insertAdjacentElement("beforeend",I(s))})};t.addEventListener("click",()=>{const o=k();a.addEntity(o)}),e.addEventListener("reset",o=>{o.preventDefault(),e.querySelectorAll(".blob-fieldset").forEach(n=>n.remove()),a.clear()}),document.addEventListener("update",r),e.addEventListener("change",q),r()},z=document.querySelector(".controls__form");$();D(z);document.addEventListener("update",()=>{y(a.getEntities())});y(a.getEntities());
//# sourceMappingURL=commonHelpers.js.map
