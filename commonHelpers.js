import{b as y,i as I}from"./assets/vendor-a8b16073.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const w=()=>{let e="#";for(let t=0;t<3;t++){let n=Math.floor(Math.random()*256).toString(16);e+=n.padStart(2,"0")}return e},L=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,T=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),M=()=>"translate",E=650,H=`<defs>
                    <filter id="filter" x="-100" y="-100" width="1750" height="1750"
                        filterUnits="userSpaceOnUse" col4or-interpolation-filters="sRGB">
                        <feGaussianBlur stdDeviation="65.5" result="effect1_foregroundBlur_32_5690" />
                    </filter>                   
                </defs>`,O=` <circle
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
                        </text>`;class q{constructor(t){this.storage=localStorage,this.entities=new Set,this.metakey=t;const n=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(n)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey),document.dispatchEvent(new Event("update"))}addEntity(t){this.entities.add(t),this.save()}removeEntity(t){this.entities.delete(t),this.save()}has(t){return Array.from(this.entities).some(n=>n.id===t)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(t){return Array.from(this.entities).find(t)}updateEntity(t,n){if(this.entities.has(t)){const o=Array.from(this.entities),r=o.findIndex(s=>s===t);o[r]=n,this.entities=new Set(o),this.save()}}moveEntity(t,n){const r=Array.from(this.entities).filter(s=>s!==t);r.splice(n,0,t),this.entities=new Set(r),this.save()}}const l=new q("__blobConfigs__"),D=e=>{const t=y({size:E,growth:1,seed:e.seed.toString()}).path,n=[y({size:E,growth:1.5,seed:(e.seed+1).toString()}).path,y({size:E,growth:2,seed:(e.seed+2).toString()}).path];return`<g style="--color: ${e.color};" transform="${e.transform.type}(${e.transform.args.join(", ")})" filter="url(#${e.filterId})" id="${e.id}">
    <path d="${t}" fill="${e.color}" >
        ${e.animation.play&&`<animate 
              attributeName="d" 
              dur="${e.animation.speed}s" 
              repeatCount="indefinite"
              keyTimes="0;0.33;0.67;1" 
              values="${t};${n.join(";")};${t}" 
          />`}
    </path>
  </g>`},z=(e,t)=>{const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.innerHTML=t;const o=n.querySelector("g");let r=e.transform.args[0],s=e.transform.args[1],i=0,d=0;const u=a=>{const c=a.clientX-r,b=a.clientY-s;i=c,d=b,o.setAttribute("transform",`translate(${c} ${b})`)};return o.addEventListener("mousedown",a=>{a.stopPropagation(),r=a.clientX-r,s=a.clientY-s,document.addEventListener("mousemove",u),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",u),l.updateEntity(e,{...e,transform:{type:"translate",args:[i,d]}})})}),o.addEventListener("mouseover",()=>{const a=document.getElementById(`blob_${e.id}`);a&&a.classList.add("blob-fieldset--hover")}),o.addEventListener("mouseout",()=>{const a=document.getElementById(`blob_${e.id}`);a&&a.classList.remove("blob-fieldset--hover")}),o},N=(e,t)=>{e.color||(e.color=w());const n=z(e,D(e));t.insertAdjacentElement("afterbegin",n)},B=e=>{const t=document.querySelector(".screen");if(!e.length){t.innerHTML=O;return}t.innerHTML="",t.insertAdjacentHTML("beforeend",H),e.forEach(n=>{N(n,t)})},R=()=>{const e=document.querySelector(".screen"),t=document.querySelector("#load-svg"),n=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e),s=I(r);navigator.clipboard.writeText(s)}),n.addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e);navigator.clipboard.writeText(r)}),t.addEventListener("click",()=>{const r=new XMLSerializer().serializeToString(e),s=new Blob([r],{type:"image/svg+xml"}),i=URL.createObjectURL(s),d=document.createElement("a");d.href=i,d.download="blobs.svg",d.click(),URL.revokeObjectURL(i)})},j=()=>{const e=Math.floor(Math.random()*1e9);return{id:T(),transform:{type:M(),args:[L(-300,300),L(-300,300)]},filterId:"filter",color:w(),animation:{play:!0,speed:10},seed:e}};let m=null,p=null,v=null,f=null,g=null,h=null;const U=e=>{const t=l.findEntity(n=>n.id===e);t&&l.removeEntity(t)},F=(e,t)=>{var s;e.preventDefault();const n=(s=e.dataTransfer)==null?void 0:s.getData("text/plain");if(n===t)return;const o=l.findEntity(i=>i.id===n),r=l.findEntity(i=>i.id===t);!o||!r||l.moveEntity(o,l.getEntities().indexOf(r))},_=e=>{m&&e.removeEventListener("mouseover",m),p&&e.removeEventListener("mouseout",p),m=()=>{const[t,n]=e.id.split("_"),o=document.getElementById(`${n}`);o&&o.classList.add("hover")},p=()=>{const[t,n]=e.id.split("_"),o=document.getElementById(`${n}`);o&&o.classList.remove("hover")},e.addEventListener("mouseover",m),e.addEventListener("mouseout",p)},A=(e,t)=>{v&&e.removeEventListener("dragstart",v),f&&e.removeEventListener("dragover",f),g&&e.removeEventListener("drop",g),v=n=>{var o;(o=n.dataTransfer)==null||o.setData("text/plain",t)},g=n=>F(n,t),f=n=>{n.preventDefault()},e.addEventListener("dragstart",v),e.addEventListener("drop",g),e.addEventListener("dragover",f)},x=(e,t,n)=>{e.setAttribute("id",`blob_${t}`),e.setAttribute("draggable","true"),e.setAttribute("style",`--color: ${n};`),e.classList.add("blob-fieldset")},k=(e,t)=>{const n=e.querySelector(".remove-blob");h&&n.removeEventListener("click",h),h=()=>U(t),n.addEventListener("click",h)},S=({id:e,color:t,seed:n,animation:o})=>{const r=document.createElement("fieldset");return x(r,e,t),r.innerHTML=`
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
    `,k(r,e),_(r),A(r,e),r},$=(e,t)=>{x(e,t.id,t.color),k(e,t.id),_(e),A(e,t.id)},G=e=>{const t=e.target,[n,o]=t.name.split("_"),r=l.findEntity(i=>i.id===o);if(!r)return;let s={...r};n==="color"?s.color=t.value:n==="seed"?s.seed=parseInt(t.value,10):n==="animation"?s.animation.play=t.checked:n==="speed"&&(s.animation.speed=parseInt(t.value,10)),l.updateEntity(r,s)},X=e=>{const t=e.querySelector("#add-blob"),n=o=>{o==null||o.preventDefault();const r=l.getEntities(),s=e.querySelectorAll(".blob-fieldset");if(!r.length){s.forEach(i=>i.remove());return}if(!s.length){r.forEach(i=>{e.insertAdjacentElement("beforeend",S(i))});return}r.forEach((i,d)=>{const u=i.id,a=e.querySelector(`#blob_${u}`);if(!a){e.insertAdjacentElement("beforeend",S(i));return}const c=Array.from(e.children).indexOf(a);d!==c?($(a,i),e.insertBefore(a,e.children[c+3])):$(a,i)})};t.addEventListener("click",()=>{const o=j();l.addEntity(o)}),e.addEventListener("reset",o=>{o.preventDefault(),e.querySelectorAll(".blob-fieldset").forEach(r=>r.remove()),l.clear()}),document.addEventListener("update",n),e.addEventListener("input",G),n()},P=document.querySelector(".controls__form");R();X(P);document.addEventListener("update",()=>{B(l.getEntities())});B(l.getEntities());
//# sourceMappingURL=commonHelpers.js.map
