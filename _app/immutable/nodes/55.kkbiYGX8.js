import{s as B,z as C,m as F,A as q,a as b,d as E,j as u,h as d,e as p,c as m,b as x,i as $,n as M,t as T,f as D,k as H,D as L,E as P,g as A}from"../chunks/scheduler.z1v5p5l_.js";import{S as G,i as J,c as h,b as v,m as _,t as g,a as w,d as k}from"../chunks/index.wUxZk5jp.js";import{g as K,a as z}from"../chunks/spread.rEx3vLA9.js";import{M as N}from"../chunks/mdsvex-components.S7svUQSH.js";import{p as O,C as Q,a as S,r as I}from"../chunks/ClassTable.zW_ZYmqo.js";import"../chunks/singletons.wcF5xFsF.js";function U(r){let e;return{c(){e=p("div"),this.h()},l(n){e=m(n,"DIV",{class:!0}),x(e).forEach(d),this.h()},h(){$(e,"class","skeleton w-32 h-32")},m(n,t){u(n,e,t)},p:M,d(n){n&&d(e)}}}function W(r){let e,n='<div class="skeleton w-32 h-32"></div>',t,o,l,c;return{c(){e=p("pre"),t=T(n),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=x(e);t=D(i,n),i.forEach(d),this.h()},h(){$(e,"slot","html")},m(s,i){u(s,e,i),H(e,t),l||(c=L(o=I.call(null,e,{to:r[0]})),l=!0)},p(s,i){o&&P(o.update)&&i&1&&o.update.call(null,{to:s[0]})},d(s){s&&d(e),l=!1,c()}}}function X(r){let e,n='<div class="flex gap-4 items-center"><div class="skeleton w-16 h-16 rounded-full shrink-0"></div> <div class="flex flex-col gap-4"><div class="skeleton h-4 w-20"></div> <div class="skeleton h-4 w-28"></div></div></div> <div class="skeleton h-32 w-full"></div>';return{c(){e=p("div"),e.innerHTML=n,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-1enh6z7"&&(e.innerHTML=n),this.h()},h(){$(e,"class","flex flex-col gap-4 w-52")},m(t,o){u(t,e,o)},p:M,d(t){t&&d(e)}}}function Y(r){let e,n=`<div class="flex flex-col gap-4 w-52">
  <div class="flex gap-4 items-center">
    <div class="$$skeleton w-16 h-16 rounded-full shrink-0"></div>
    <div class="flex flex-col gap-4">
      <div class="$$skeleton h-4 w-20"></div>
      <div class="$$skeleton h-4 w-28"></div>
    </div>
  </div>
  <div class="$$skeleton h-32 w-full"></div>
</div>`,t,o,l,c;return{c(){e=p("pre"),t=T(n),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=x(e);t=D(i,n),i.forEach(d),this.h()},h(){$(e,"slot","html")},m(s,i){u(s,e,i),H(e,t),l||(c=L(o=I.call(null,e,{to:r[0]})),l=!0)},p(s,i){o&&P(o.update)&&i&1&&o.update.call(null,{to:s[0]})},d(s){s&&d(e),l=!1,c()}}}function Z(r){let e,n='<div class="skeleton h-32 w-full"></div> <div class="skeleton h-4 w-28"></div> <div class="skeleton h-4 w-full"></div> <div class="skeleton h-4 w-full"></div>';return{c(){e=p("div"),e.innerHTML=n,this.h()},l(t){e=m(t,"DIV",{class:!0,"data-svelte-h":!0}),A(e)!=="svelte-fbotqe"&&(e.innerHTML=n),this.h()},h(){$(e,"class","flex flex-col gap-4 w-52")},m(t,o){u(t,e,o)},p:M,d(t){t&&d(e)}}}function ee(r){let e,n=`<div class="flex flex-col gap-4 w-52">
  <div class="$$skeleton h-32 w-full"></div>
  <div class="$$skeleton h-4 w-28"></div>
  <div class="$$skeleton h-4 w-full"></div>
  <div class="$$skeleton h-4 w-full"></div>
</div>`,t,o,l,c;return{c(){e=p("pre"),t=T(n),this.h()},l(s){e=m(s,"PRE",{slot:!0});var i=x(e);t=D(i,n),i.forEach(d),this.h()},h(){$(e,"slot","html")},m(s,i){u(s,e,i),H(e,t),l||(c=L(o=I.call(null,e,{to:r[0]})),l=!0)},p(s,i){o&&P(o.update)&&i&1&&o.update.call(null,{to:s[0]})},d(s){s&&d(e),l=!1,c()}}}function te(r){let e,n,t,o,l,c,s,i;return e=new Q({props:{data:[{type:"component",class:"skeleton",desc:"Shows a div with loading animation"}]}}),t=new S({props:{title:"Skeleton",$$slots:{html:[W],default:[U]},$$scope:{ctx:r}}}),l=new S({props:{title:"Skeleton - circle with content",$$slots:{html:[Y],default:[X]},$$scope:{ctx:r}}}),s=new S({props:{title:"Skeleton - rectangle with content",$$slots:{html:[ee],default:[Z]},$$scope:{ctx:r}}}),{c(){h(e.$$.fragment),n=b(),h(t.$$.fragment),o=b(),h(l.$$.fragment),c=b(),h(s.$$.fragment)},l(a){v(e.$$.fragment,a),n=E(a),v(t.$$.fragment,a),o=E(a),v(l.$$.fragment,a),c=E(a),v(s.$$.fragment,a)},m(a,f){_(e,a,f),u(a,n,f),_(t,a,f),u(a,o,f),_(l,a,f),u(a,c,f),_(s,a,f),i=!0},p(a,f){const R={};f&5&&(R.$$scope={dirty:f,ctx:a}),t.$set(R);const V={};f&5&&(V.$$scope={dirty:f,ctx:a}),l.$set(V);const j={};f&5&&(j.$$scope={dirty:f,ctx:a}),s.$set(j)},i(a){i||(g(e.$$.fragment,a),g(t.$$.fragment,a),g(l.$$.fragment,a),g(s.$$.fragment,a),i=!0)},o(a){w(e.$$.fragment,a),w(t.$$.fragment,a),w(l.$$.fragment,a),w(s.$$.fragment,a),i=!1},d(a){a&&(d(n),d(o),d(c)),k(e,a),k(t,a),k(l,a),k(s,a)}}}function le(r){let e,n;const t=[r[1],y];let o={$$slots:{default:[te]},$$scope:{ctx:r}};for(let l=0;l<t.length;l+=1)o=C(o,t[l]);return e=new N({props:o}),{c(){h(e.$$.fragment)},l(l){v(e.$$.fragment,l)},m(l,c){_(e,l,c),n=!0},p(l,[c]){const s=c&2?K(t,[c&2&&z(l[1]),c&0&&z(y)]):{};c&5&&(s.$$scope={dirty:c,ctx:l}),e.$set(s)},i(l){n||(g(e.$$.fragment,l),n=!0)},o(l){w(e.$$.fragment,l),n=!1},d(l){k(e,l)}}}const y={title:"Skeleton",desc:"Skeleton is a component that can be used to show a loading state of a component.",published:!0,layout:"components"};function se(r,e,n){let t;return F(r,O,o=>n(0,t=o)),r.$$set=o=>{n(1,e=C(C({},e),q(o)))},e=q(e),[t,e]}class fe extends G{constructor(e){super(),J(this,e,se,le,B,{})}}export{fe as component};
