import{d as u,p as g,c as _,b as s,l as e,M as r,O as c,a,t as l}from"./vendor.67a6217c.js";import{u as v}from"./useI18n.e516dc0d.js";import"./index.108f9505.js";const h={class:"h-full mx-[15vw] space-y-2 my-3"},k=e("div",{class:"flex justify-between items-center h-[50vh]"},null,-1),w=e("div",{class:"tracking-widest text-lg text-bold opacity-60"},"SKILLS",-1),f={class:"flex justify-center"},x={class:"grid grid-cols-5 gap-3 w-1/2"},y=["src"],J={class:"tracking-widest truncate text-bold opacity-60"},S=e("div",{class:"tracking-widest text-lg text-bold opacity-60"},"DEMO",-1),b={class:"grid grid-cols-2 gap-2"},j=["onClick"],M=u({__name:"index",setup(B){v();const n=g(),d=_(()=>n.options.routes.map(t=>{if(!t.meta.hidden)return{title:t.meta?t.meta.title:t.name,to:t.name}}).filter(t=>t)),p=[{name:"Javascript",url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},{name:"Javascript",url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},{name:"Javascript",url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},{name:"Javascript",url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},{name:"Javascript",url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},{name:"Javascript",url:"https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"}];function m(t){window.open(n.resolve({name:t}).href,"_self")}return(t,C)=>(a(),s("div",h,[k,w,e("div",f,[e("div",x,[(a(),s(r,null,c(p,(i,o)=>e("div",{key:o,class:"rounded-lg bg-white bg-opacity-10 aspect-square flex flex-col justify-center items-center"},[e("img",{src:i.url,class:"w-5 h-5"},null,8,y),e("div",J,l(i.name),1)])),64))])]),S,e("div",b,[(a(!0),s(r,null,c(d.value,(i,o)=>(a(),s("div",{key:o,class:"px-4 py-2 rounded-sm cursor-pointer bg-slate-400",onClick:I=>m(i.to)},l(i.title),9,j))),128))])]))}});export{M as default};
