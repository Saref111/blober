import{b as c,i as y}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const v=()=>{let e="#";for(let t=0;t<3;t++){let o=Math.floor(Math.random()*256).toString(16);e+=o.padStart(2,"0")}return e},p=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,b=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),E=()=>"translate",u=650,S=`<defs>
                    <filter id="filter" x="-100" y="-100" width="1750" height="1750"
                        filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
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
                        </text>`;class w{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const o=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(o)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(o=>o.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,o){if(this.entities.has(t)){const n=Array.from(this.entities),r=n.findIndex(s=>s===t);n[r]=o,this.entities=new Set(n),this.save()}}moveEntity(t,o){const r=Array.from(this.entities).filter(s=>s!==t);r.splice(o,0,t),this.entities=new Set(r),this.save()}}const a=new w("__blobConfigs__"),B=e=>{const t=c({size:u,growth:1,seed:e.seed.toString()}).path,o=[c({size:u,growth:1.5,seed:(e.seed+1).toString()}).path,c({size:u,growth:2,seed:(e.seed+2).toString()}).path];return`<g style="--color: ${e.color};" transform="${e.transform.type}(${e.transform.args.join(", ")})" filter="url(#${e.filterId})" id="${e.id}">
                <path d="${t}" fill="${e.color}" >
                    <animate 
                        attributeName="d" 
                        dur="10s" 
                        repeatCount="indefinite" 
                        keyTimes="0;0.33;0.67;1" 
                        values="${t};${o.join(";")};${t}" 
                    />
                </path>
            </g>`},$=(e,t)=>{const o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.innerHTML=t;const n=o.querySelector("g");let r=e.transform.args[0],s=e.transform.args[1],i=0,l=0;const m=d=>{const f=d.clientX-r,g=d.clientY-s;i=f,l=g,n.setAttribute("transform",`translate(${f} ${g})`)};return n.addEventListener("mousedown",d=>{d.stopPropagation(),r=d.clientX-r,s=d.clientY-s,document.addEventListener("mousemove",m),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",m),a.updateEntity(e,{...e,transform:{type:"translate",args:[i,l]}})})}),n.addEventListener("mouseover",()=>{const d=document.getElementById(`blob_${e.id}`);d&&d.classList.add("blob-fieldset--hover")}),n.addEventListener("mouseout",()=>{const d=document.getElementById(`blob_${e.id}`);d&&d.classList.remove("blob-fieldset--hover")}),n},_=(e,t)=>{e.color||(e.color=v());const o=$(e,B(e));t.insertAdjacentElement("afterbegin",o)},h=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=L;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",S),e.forEach(o=>{_(o,t)})},A=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),o=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e),s=y(r);navigator.clipboard.writeText(s)}),o.addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(r)}),t.addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e),s=new Blob([r],{type:"image/svg+xml"}),i=URL.createObjectURL(s),l=document.createElement("a");l.href=i,l.download="blobs.svg",l.click(),URL.revokeObjectURL(i)})},x=()=>{const e=Math.floor(Math.random()*1e9);return{id:b(),transform:{type:E(),args:[p(-300,300),p(-300,300)]},filterId:"filter",color:v(),seed:e}},T=e=>{const t=a.findEntity(o=>o.id===e);t&&a.removeEntity(t)},I=(e,t)=>{var s;e.preventDefault();const o=(s=e.dataTransfer)==null?void 0:s.getData("text/plain");if(o===t)return;const n=a.findEntity(i=>i.id===o),r=a.findEntity(i=>i.id===t);!n||!r||a.moveEntity(n,a.getEntities().indexOf(r))},k=(e,t)=>{e.addEventListener("dragstart",o=>{var n;(n=o.dataTransfer)==null||n.setData("text/plain",t)}),e.addEventListener("drop",o=>I(o,t)),e.addEventListener("dragover",o=>{o.preventDefault()})},M=({id:e,color:t,seed:o})=>{const n=document.createElement("fieldset");return n.setAttribute("id",`blob_${e}`),n.setAttribute("draggable","true"),n.setAttribute("style",`--color: ${t};`),n.classList.add("blob-fieldset"),n.innerHTML=`
        <label>
            <span>Color:</span>
            <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
        </label>
        <label>
          <span>Seed:</span>
          <input value="${o}" type="number" name="seed_${e}" id="seed_${e}" />
        </label>
        <button type="button" class="remove-blob">Remove</button>
    `,n.querySelector(".remove-blob").addEventListener("click",()=>T(e)),n.addEventListener("mouseover",()=>{const[s,i]=n.id.split("_"),l=document.getElementById(`${i}`);l&&l.classList.add("hover")}),n.addEventListener("mouseout",()=>{const[s,i]=n.id.split("_"),l=document.getElementById(`${i}`);l&&l.classList.remove("hover")}),k(n,e),n},q=e=>{const t=e.target,[o,n]=t.name.split("_"),r=a.findEntity(i=>i.id===n);if(!r)return;let s={...r};o==="color"?s.color=t.value:o==="seed"&&(s.seed=parseInt(t.value,10)),a.updateEntity(r,s)},D=e=>{const t=e.querySelector("#add-blob"),o=n=>{n==null||n.preventDefault();const r=a.getEntities();e.querySelectorAll(".blob-fieldset").forEach(s=>s.remove()),r.forEach(s=>{e.insertAdjacentElement("beforeend",M(s))})};t.addEventListener("click",()=>{const n=x();a.addEntity(n)}),e.addEventListener("reset",n=>{n.preventDefault(),e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),a.clear()}),document.addEventListener("update",o),e.addEventListener("change",q),o()},z=document.querySelector(".controls__form");A();D(z);document.addEventListener("update",()=>{h(a.getEntities())});h(a.getEntities());
//# sourceMappingURL=commonHelpers.js.map
