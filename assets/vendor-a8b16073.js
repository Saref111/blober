const M=({size:r=400,growth:a=6,edges:t=6,seed:e=null}={})=>{var{destPoints:n,seedValue:o}=x(r,a,t,e),l=N(n);return{path:l,seedValue:o}},g=r=>r*(Math.PI/180),_=r=>{var a=360/r;return Array(r).fill("a").map((t,e)=>e*a)},A=r=>{var a=4294967295,t=123456789+r&a,e=987654321-r&a;return function(){e=36969*(e&65535)+(e>>>16)&a,t=18e3*(t&65535)+(t>>>16)&a;var n=(e<<16)+(t&65535)>>>0;return n/=4294967296,n}},P=(r,a,t)=>{let e=a+r*(t-a);return e>t?e=e-a:e<a&&(e=e+a),e},V=(r,a,t)=>{var e=r+a*Math.cos(g(t)),n=r+a*Math.sin(g(t));return[Math.round(e),Math.round(n)]},b=r=>(r.sort(()=>Math.random()-.5),r),x=(r,a,t,e)=>{let n=r/2,o=a*(n/10),l=r/2,h=_(t),d=b([99,999,9999,99999,999999])[0],s=Math.floor(Math.random()*d),f=e||s,v=A(f),u=[];return h.forEach(m=>{let C=P(v(),o,n),S=V(l,C,m);u.push(S)}),{destPoints:u,seedValue:f}},N=r=>{let a="";var t=[(r[0][0]+r[1][0])/2,(r[0][1]+r[1][1])/2];a+="M"+t[0]+","+t[1];for(var e=0;e<r.length;e++){var n=r[(e+1)%r.length],o=r[(e+2)%r.length];t=[(n[0]+o[0])/2,(n[1]+o[1])/2],a+="Q"+n[0]+","+n[1]+","+t[0]+","+t[1]}return a+="Z",a};var G=M;const c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",R=r=>{r=r.replace(/\r\n/g,`
`);let a=0,t="";for(;a<r.length;a++){const e=r.charCodeAt(a);e<128?t+=String.fromCharCode(e):e>127&&e<2048?(t+=String.fromCharCode(e>>6|192),t+=String.fromCharCode(63&e|128)):(t+=String.fromCharCode(e>>12|224),t+=String.fromCharCode(e>>6&63|128),t+=String.fromCharCode(63&e|128))}return t},w=r=>{let a,t,e,n,o,l,h,d=0,s="";for(r=R(r);d<r.length;)a=r.charCodeAt(d++),t=r.charCodeAt(d++),e=r.charCodeAt(d++),n=a>>2,o=(3&a)<<4|t>>4,l=(15&t)<<2|e>>6,h=63&e,isNaN(t)?l=h=64:isNaN(e)&&(h=64),s=s+c.charAt(n)+c.charAt(o)+c.charAt(l)+c.charAt(h);return s},y=r=>typeof r=="string"?"string":typeof SVGElement<"u"&&r instanceof SVGElement?"element":void 0,i=r=>"data:image/svg+xml;base64,"+w(r),E=r=>i(new XMLSerializer().serializeToString(r)),z=r=>{switch(y(r)){case"string":return i(r);case"element":return E(r);default:return r}};export{G as b,z as i};
//# sourceMappingURL=vendor-a8b16073.js.map