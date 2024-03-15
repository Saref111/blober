import{i as m,b as c}from"./assets/vendor-c3ed660f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const f=()=>{const t=document.querySelector(".screen"),e=document.querySelector("#load-svg"),r=document.querySelector("#copy-svg");document.querySelector("#copy-svg-as-base64").addEventListener("click",()=>{const o=new XMLSerializer().serializeToString(t),n=m(o);navigator.clipboard.writeText(n)}),r.addEventListener("click",()=>{const o=new XMLSerializer().serializeToString(t);navigator.clipboard.writeText(o)}),e.addEventListener("click",()=>{const o=new XMLSerializer().serializeToString(t),n=new Blob([o],{type:"image/svg+xml"}),i=URL.createObjectURL(n),l=document.createElement("a");l.href=i,l.download="blobs.svg",l.click(),URL.revokeObjectURL(i)})};class g{constructor(e){this.storage=localStorage,this.entities=new Set,this.metakey=e;const r=JSON.parse(this.storage.getItem(this.metakey)||"[]");this.entities=new Set(r)}save(){this.storage.setItem(this.metakey,JSON.stringify(Array.from(this.entities))),document.dispatchEvent(new Event("update"))}clear(){this.entities.clear(),this.storage.removeItem(this.metakey)}addEntity(e){this.entities.add(e),this.save()}removeEntity(e){this.entities.delete(e),this.save()}has(e){return Array.from(this.entities).some(r=>r.id===e)}getEntities(){return Array.from(this.entities)}getEntitiesCount(){return this.entities.size}findEntity(e){return Array.from(this.entities).find(e)}updateEntity(e,r){this.entities.has(e)&&(this.entities.delete(e),this.entities.add(r),this.save())}}const a=new g("__blobConfigs__"),h=()=>`#${Math.floor(Math.random()*16777215).toString(16)}`,u=(t,e)=>Math.floor(Math.random()*(e-t+1))+t,b=()=>Date.now().toString(36)+Math.random().toString(36).slice(2),p=()=>`translate(${u(-300,300)}, ${u(-300,300)})`,d=650,y=()=>{const t=Math.floor(Math.random()*1e9);return{id:b(),path:c({size:d,growth:1}).path,transform:p(),filterId:"filter",color:h(),seed:t,animationPaths:[c({size:d,growth:1.5,seed:(t+1).toString()}).path,c({size:d,growth:2,seed:(t+2).toString()}).path]}},v=t=>{const e=a.findEntity(r=>r.id===t);e&&a.removeEntity(e)},S=({id:t,color:e,seed:r})=>{const s=document.createElement("fieldset");return s.classList.add("blob-fieldset"),s.innerHTML=`
      <label>
          <span>Color:</span>
          <input value="${e}" type="color" name="color_${t}" id="color_${t}" />
      </label>
      <label>
        <span>Seed:</span>
        <input value="${r}" type="text" name="seed_${t}" id="seed_${t}" />
      </label>
      <button type="button" class="remove-blob">Remove</button>
  `,s.querySelector(".remove-blob").addEventListener("click",()=>v(t)),s},E=t=>{const e=t.querySelector("#add-blob"),r=s=>{s==null||s.preventDefault();const o=a.getEntities();t.querySelectorAll(".blob-fieldset").forEach(n=>n.remove()),o.forEach(n=>{t.insertAdjacentElement("beforeend",S(n))})};e.addEventListener("click",()=>{const s=y();a.addEntity(s)}),t.addEventListener("reset",s=>{s.preventDefault(),a.clear(),t.querySelectorAll(".blob-fieldset").forEach(o=>o.remove())}),document.addEventListener("update",r),r()},L=document.querySelector(".controls__form");f();E(L);
//# sourceMappingURL=commonHelpers.js.map
