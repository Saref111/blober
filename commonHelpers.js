import{b as d,i as y}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const h=()=>{let e="#";for(let t=0;t<3;t++){let s=Math.floor(Math.random()*256).toString(16);e+=s.padStart(2,"0")}return e},p=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,b=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),E=()=>"translate",u=650,S=`<defs>
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
                        </text>`;class w{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const s=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(s)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(s=>s.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,s){if(this.entities.has(t)){const o=Array.from(this.entities),n=o.findIndex(r=>r===t);o[n]=s,this.entities=new Set(o),this.save()}}moveEntity(t,s){const n=Array.from(this.entities).filter(r=>r!==t);n.splice(s,0,t),this.entities=new Set(n),this.save()}}const a=new w("__blobConfigs__"),B=e=>{const t=d({size:u,growth:1,seed:e.seed.toString()}).path,s=[d({size:u,growth:1.5,seed:(e.seed+1).toString()}).path,d({size:u,growth:2,seed:(e.seed+2).toString()}).path];return`<g style="--color: ${e.color};" transform="${e.transform.type}(${e.transform.args.join(", ")})" filter="url(#${e.filterId})">
                <path d="${t}" fill="${e.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${t};${s.join(";")};${t}" 
                    />
                </path>
            </g>`},x=(e,t)=>{const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.innerHTML=t;const o=s.querySelector("g");let n=e.transform.args[0],r=e.transform.args[1],i=0,l=0;const f=c=>{const m=c.clientX-n,g=c.clientY-r;i=m,l=g,o.setAttribute("transform",`translate(${m} ${g})`)};return o.addEventListener("mousedown",c=>{c.stopPropagation(),n=c.clientX-n,r=c.clientY-r,document.addEventListener("mousemove",f),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",f),a.updateEntity(e,{...e,transform:{type:"translate",args:[i,l]}})})}),o},A=(e,t)=>{e.color||(e.color=h());const s=x(e,B(e));t.insertAdjacentElement("afterbegin",s)},v=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=L;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",S),e.forEach(s=>{A(s,t)})},$=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),s=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),r=y(n);navigator.clipboard.writeText(r)}),s.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(n)}),t.addEventListener("click",()=>{const n=new XMLSerializer().serializeToString(e),r=new Blob([n],{type:"image/svg+xml"}),i=URL.createObjectURL(r),l=document.createElement("a");l.href=i,l.download="blobs.svg",l.click(),URL.revokeObjectURL(i)})},T=()=>{const e=Math.floor(Math.random()*1e9);return{id:b(),transform:{type:E(),args:[p(-300,300),p(-300,300)]},filterId:"filter",color:h(),seed:e}},k=e=>{const t=a.findEntity(s=>s.id===e);t&&a.removeEntity(t)},_=(e,t)=>{var r;e.preventDefault();const s=(r=e.dataTransfer)==null?void 0:r.getData("text/plain");if(s===t)return;const o=a.findEntity(i=>i.id===s),n=a.findEntity(i=>i.id===t);!o||!n||a.moveEntity(o,a.getEntities().indexOf(n))},M=({id:e,color:t,seed:s})=>{const o=document.createElement("fieldset");return o.setAttribute("id",`blob_${e}`),o.setAttribute("draggable","true"),o.setAttribute("style",`--color: ${t};`),o.classList.add("blob-fieldset"),o.innerHTML=`
        <label>
            <span>Color:</span>
            <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
        </label>
        <label>
          <span>Seed:</span>
          <input value="${s}" type="text" name="seed_${e}" id="seed_${e}" />
        </label>
        <button type="button" class="remove-blob">Remove</button>
    `,o.querySelector(".remove-blob").addEventListener("click",()=>k(e)),o.addEventListener("dragstart",r=>{var i;(i=r.dataTransfer)==null||i.setData("text/plain",e)}),o.addEventListener("drop",r=>_(r,e)),o.addEventListener("dragover",r=>{r.preventDefault()}),o},I=e=>{const t=e.target,[s,o]=t.name.split("_"),n=a.findEntity(i=>i.id===o);if(!n)return;let r={...n};s==="color"?r.color=t.value:s==="seed"&&(r.seed=parseInt(t.value,10)),a.updateEntity(n,r)},q=e=>{const t=e.querySelector("#add-blob"),s=o=>{o==null||o.preventDefault();const n=a.getEntities();e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),n.forEach(r=>{e.insertAdjacentElement("beforeend",M(r))})};t.addEventListener("click",()=>{const o=T();a.addEntity(o)}),e.addEventListener("reset",o=>{o.preventDefault(),e.querySelectorAll(".blob-fieldset").forEach(n=>n.remove()),a.clear()}),document.addEventListener("update",s),e.addEventListener("input",I),s()},z=document.querySelector(".controls__form");$();q(z);document.addEventListener("update",()=>{v(a.getEntities())});v(a.getEntities());
//# sourceMappingURL=commonHelpers.js.map
