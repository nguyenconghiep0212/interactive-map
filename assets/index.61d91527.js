import{d as l,B as m,c as p,b as t,m as r,t as a,u as f,F as _,C as v,a as s}from"./vendor.f1f6ee3c.js";import{u as h}from"./useI18n.24f44f80.js";import"./index.764d55ea.js";const g={class:"h-full mx-8 my-3"},x={class:"grid grid-cols-2 gap-2"},k=["onClick"],F=l({__name:"index",setup(y){const{t:i}=h(),n=m(),c=p(()=>n.options.routes.map(e=>{if(!e.meta.hidden)return{title:e.meta?e.meta.title:e.name,to:e.name}}).filter(e=>e));function u(e){window.open(n.resolve({name:e}).href,"_self")}return(e,B)=>(s(),t("div",g,[r("div",null,a(f(i)("view.test")),1),r("div",x,[(s(!0),t(_,null,v(c.value,(o,d)=>(s(),t("div",{key:d,class:"px-4 py-2 rounded-sm cursor-pointer bg-slate-400",onClick:C=>u(o.to)},a(o.title),9,k))),128))])]))}});export{F as default};
