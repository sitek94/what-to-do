import{S as E,i as T,s as D,e as _,k as y,c as m,a as g,n as b,d as v,b as d,f as C,E as p,J as I,K as k,L as N,t as P,g as U,I as q,M as F}from"../chunks/vendor-ecc0d1ce.js";function x(a,t,l){const c=a.slice();return c[5]=t[l],c[6]=t,c[7]=l,c}function z(a){let t,l,c,s,u,h;function i(){a[3].call(l,a[6],a[7])}function n(){a[4].call(s,a[6],a[7])}return{c(){t=_("div"),l=_("input"),c=y(),s=_("input"),this.h()},l(e){t=m(e,"DIV",{class:!0});var o=g(t);l=m(o,"INPUT",{type:!0,class:!0}),c=b(o),s=m(o,"INPUT",{type:!0,placeholder:!0,class:!0}),o.forEach(v),this.h()},h(){d(l,"type","checkbox"),d(l,"class","svelte-zmnqnf"),d(s,"type","text"),d(s,"placeholder","What needs to be done?"),d(s,"class","svelte-zmnqnf"),d(t,"class","todo svelte-zmnqnf")},m(e,o){C(e,t,o),p(t,l),l.checked=a[5].done,p(t,c),p(t,s),I(s,a[5].text),u||(h=[k(l,"change",i),k(s,"input",n)],u=!0)},p(e,o){a=e,o&1&&(l.checked=a[5].done),o&1&&s.value!==a[5].text&&I(s,a[5].text)},d(e){e&&v(t),u=!1,N(h)}}}function S(a){let t,l,c,s,u,h,i=a[0],n=[];for(let e=0;e<i.length;e+=1)n[e]=z(x(a,i,e));return{c(){t=_("div");for(let e=0;e<n.length;e+=1)n[e].c();l=y(),c=_("button"),s=P("Clear completed"),this.h()},l(e){t=m(e,"DIV",{class:!0});var o=g(t);for(let f=0;f<n.length;f+=1)n[f].l(o);l=b(o),c=m(o,"BUTTON",{});var r=g(c);s=U(r,"Clear completed"),r.forEach(v),o.forEach(v),this.h()},h(){d(t,"class","content svelte-zmnqnf")},m(e,o){C(e,t,o);for(let r=0;r<n.length;r+=1)n[r].m(t,null);p(t,l),p(t,c),p(c,s),u||(h=k(c,"click",a[1]),u=!0)},p(e,[o]){if(o&1){i=e[0];let r;for(r=0;r<i.length;r+=1){const f=x(e,i,r);n[r]?n[r].p(f,o):(n[r]=z(f),n[r].c(),n[r].m(t,l))}for(;r<n.length;r+=1)n[r].d(1);n.length=i.length}},i:q,o:q,d(e){e&&v(t),F(n,e),u=!1,h()}}}function V(a,t,l){const c=!0;let s=[{done:!1,text:"FCC: Python"},{done:!1,text:"Internet History"},{done:!1,text:"D3 Graph"},{done:!1,text:"FCC: Alert component"}];function u(){l(0,s=s.filter(n=>!n.done))}function h(n,e){n[e].done=this.checked,l(0,s)}function i(n,e){n[e].text=this.value,l(0,s)}return[s,u,c,h,i]}class j extends E{constructor(t){super();T(this,t,V,S,D,{prerender:2})}get prerender(){return this.$$.ctx[2]}}export{j as default};