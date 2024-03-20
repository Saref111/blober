import{b as v,i as L}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const E=()=>{let e="#";for(let t=0;t<3;t++){let n=Math.floor(Math.random()*256).toString(16);e+=n.padStart(2,"0")}return e},b=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,B=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),_=()=>"translate",f=650,$=`<defs>
                    <filter id="filter" x="-100" y="-100" width="1750" height="1750"
                        filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>                   
                </defs>`,H=` <circle
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
                        </text>`;class w{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const n=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(n),this.bgColor=localStorage.getItem(`${t}_bgColor`)||"#f3dddd"}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),this.storage.setItem(`${this.metakey}_bgColor`,this.bgColor),document.dispatchEvent(new Event("update"))}setBGColor(t){this.bgColor=t,this.storage.setItem(`${this.metakey}_bgColor`,t),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),this.bgColor="#f3dddd",this.storage.removeItem(`${this.metakey}_bgColor`),document.dispatchEvent(new Event("update"))}getBGColor(){return this.bgColor}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(n=>n.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,n){if(this.entities.has(t)){const o=Array.from(this.entities),r=o.findIndex(s=>s===t);o[r]=n,this.entities=new Set(o),this.save()}}moveEntity(t,n){const r=Array.from(this.entities).filter(s=>s!==t);r.splice(n,0,t),this.entities=new Set(r),this.save()}}const a=new w("__blobConfigs__"),A=e=>{const t=v({size:f,growth:1,seed:e.seed.toString()}).path,n=[v({size:f,growth:1.5,seed:(e.seed+1).toString()}).path,v({size:f,growth:2,seed:(e.seed+2).toString()}).path];return`<g style="--color: ${e.color};" transform="${e.transform.type}(${e.transform.args.join(", ")})" filter="url(#${e.filterId})" id="${e.id}">
    <path d="${t}" fill="${e.color}" >
        ${e.animation.play&&`<animate 
              attributeName="d" 
              dur="${e.animation.speed}s" 
              repeatCount="indefinite"
              keyTimes="0;0.33;0.67;1" 
              values="${t};${n.join(";")};${t}" 
          />`}
    </path>
  </g>`},I=(e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.innerHTML=t;const o=n.querySelector("g");let r=e.transform.args[0],s=e.transform.args[1],i=0,d=0;const g=l=>{const m=l.clientX-r,p=l.clientY-s;i=m,d=p,o.setAttribute("transform",`translate(${m} ${p})`)};return o.addEventListener("mousedown",l=>{l.stopPropagation(),r=l.clientX-r,s=l.clientY-s,document.addEventListener("mousemove",g),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",g),a.updateEntity(e,{...e,transform:{type:"translate",args:[i,d]}})})}),o.addEventListener("mouseover",()=>{const l=document.getElementById(`blob_${e.id}`);l&&l.classList.add("blob-fieldset--hover")}),o.addEventListener("mouseout",()=>{const l=document.getElementById(`blob_${e.id}`);l&&l.classList.remove("blob-fieldset--hover")}),o},O=(e,t)=>{e.color||(e.color=E());const n=I(e,A(e));t.insertAdjacentElement("afterbegin",n)},S=()=>{const e=a.getEntities(),t=a.getBGColor(),n=document.querySelector("#main-screen");if(document.querySelector("#bg-color-screen").setAttribute("fill",t),!e.length){n.innerHTML=H;return}n.innerHTML="",n.insertAdjacentHTML("beforeend",$),e.forEach(r=>{O(r,n)})},k=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),n=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e),s=L(r);navigator.clipboard.writeText(s)}),n.addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(r)}),t.addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e),s=new Blob([r],{type:"image/svg+xml"}),i=URL.createObjectURL(s),d=document.createElement("a");d.href=i,d.download="blobs.svg",d.click(),URL.revokeObjectURL(i)})},T=()=>{const e=Math.floor(Math.random()*1e9);return{id:B(),transform:{type:_(),args:[b(-300,300),b(-300,300)]},filterId:"filter",color:E(),animation:{play:!0,speed:10},seed:e}},c=new Map,x=e=>{const t=a.findEntity(n=>n.id===e);t&&a.removeEntity(t)},M=(e,t)=>{var s;e.preventDefault(),e.stopPropagation();const n=(s=e.dataTransfer)==null?void 0:s.getData("text/plain");if(n===t)return;const o=a.findEntity(i=>i.id===n),r=a.findEntity(i=>i.id===t);!o||!r||a.moveEntity(o,a.getEntities().indexOf(r))},u=e=>e.id.split("_")[1],q=e=>{let t=c.get(u(e));t!=null&&t.mouseOverHandler&&e.removeEventListener("mouseover",t.mouseOverHandler),t!=null&&t.mouseOutHandler&&e.removeEventListener("mouseout",t.mouseOutHandler),c.set(u(e),{mouseOverHandler:()=>{const[n,o]=e.id.split("_"),r=document.getElementById(`${o}`);r&&r.classList.add("hover")},mouseOutHandler:()=>{const[n,o]=e.id.split("_"),r=document.getElementById(`${o}`);r&&r.classList.remove("hover")}}),t=c.get(u(e)),t&&(e.addEventListener("mouseover",t.mouseOverHandler),e.addEventListener("mouseout",t.mouseOutHandler))},C=(e,t)=>{let n=c.get(u(e));n!=null&&n.dragStartHandler&&e.removeEventListener("dragstart",n.dragStartHandler),n!=null&&n.dragOverHandler&&e.removeEventListener("dragover",n.dragOverHandler),n!=null&&n.dropHandler&&e.removeEventListener("drop",n.dropHandler),c.set(u(e),{dragStartHandler:o=>{var r;"dataTransfer"in o&&((r=o.dataTransfer)==null||r.setData("text/plain",t))},dragOverHandler:o=>{o.preventDefault(),o.stopPropagation()},dropHandler:o=>M(o,t)}),n=c.get(u(e)),n&&(e.addEventListener("dragstart",n.dragStartHandler),e.addEventListener("drop",n.dropHandler),e.addEventListener("dragover",n.dragOverHandler))},G=(e,t,n)=>{e.setAttribute("id",`blob_${t}`),e.setAttribute("draggable","true"),e.setAttribute("style",`--color: ${n};`),e.classList.add("blob-fieldset")},D=(e,t)=>{const n=e.querySelector(".remove-blob");let o=c.get(u(e));o!=null&&o.removeHandler&&n.removeEventListener("click",o.removeHandler),c.set(u(e),{removeHandler:()=>{x(t)}}),o=c.get(u(e)),o&&n.addEventListener("click",o.removeHandler)},h=({id:e,color:t,seed:n,animation:o})=>{const r=document.createElement("fieldset");return G(r,e,t),r.innerHTML=`
        <label>
            <span>Color:</span>
            <input value="${t}" type="color" name="color_${e}" id="color_${e}" />
        </label>
        <label>
          <span>Seed:</span>
          <input value="${n}" type="number" name="seed_${e}" id="seed_${e}" />
        </label>
        <details>
          <summary>Animation</summary>
          <label>
            <span>Play:</span>
            <input ${o.play&&"checked"} type="checkbox" name="animation_${e}" id="animation_${e}" />
          </label>
          <label>
            <span>Speed (s):</span>
            <input value="${o.speed}" type="number" name="speed_${e}" id="speed_${e}" />
          </label>
        </details>
        <button type="button" class="remove-blob">Remove</button>
    `,D(r,e),q(r),C(r,e),r},y=4,N=e=>{const t=e.target,[n,o]=t.name.split("_"),r=a.findEntity(i=>i.id===o);if(!r)return;let s={...r};n==="color"?s.color=t.value:n==="seed"?s.seed=parseInt(t.value,10):n==="animation"?s.animation.play=t.checked:n==="speed"&&(s.animation.speed=parseInt(t.value,10)),a.updateEntity(r,s)},z=e=>{const t=e.querySelector("#add-blob"),n=o=>{o==null||o.preventDefault();const r=a.getEntities(),s=e.querySelectorAll(".blob-fieldset");if(!r.length){s.forEach(i=>i.remove());return}if(!s.length){r.forEach(i=>{e.insertAdjacentElement("beforeend",h(i))});return}s.forEach((i,d)=>{const g=i.id.split("_")[1];if(!r.find(m=>m.id===g)){i.remove();return}}),r.forEach((i,d,g)=>{const l=i.id,m=e.querySelector(`#blob_${l}`);if(!m){e.insertAdjacentElement("beforeend",h(i));return}const p=Array.from(e.children).indexOf(m);d!==p-y&&e.insertBefore(m,e.children[d+y])})};t.addEventListener("click",()=>{const o=T();a.addEntity(o)}),e.addEventListener("reset",o=>{o.preventDefault(),e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),a.clear()}),document.addEventListener("update",n),e.addEventListener("input",N),n()},R=()=>{const e=document.getElementById("bg-color");e.value=a.getBGColor(),e.addEventListener("input",()=>{a.setBGColor(e.value)}),document.addEventListener("update",()=>{e.value=a.getBGColor()})},U=document.querySelector(".controls__form");k();z(U);document.addEventListener("update",()=>{S()});S();R();
//# sourceMappingURL=commonHelpers.js.map
