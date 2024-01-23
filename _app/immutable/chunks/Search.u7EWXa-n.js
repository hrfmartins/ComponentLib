import{s as se,o as ne,z as H,e as z,a as q,c as P,b as T,h as w,d as M,i as d,P as B,a7 as he,j as C,k as O,F as be,I as K,J as sl,u as re,q as ie,r as oe,K as Ie,a8 as Q,a9 as ue,L as Le,V as ze,A as Pe,aa as N,X as W,t as Ne,f as Oe,l as Be,ab as me,a6 as nl,p as Y,y as rl,W as il,H as ol,x as ul,E as _e,B as ge,C as ve,m as ke,g as Z}from"./scheduler.z1v5p5l_.js";import{S as fe,i as ce,t as L,a as R,f as pe,c as Ke,b as Re,m as Te,g as te,e as ae,d as Ve}from"./index.wUxZk5jp.js";import{p as fl}from"./stores.5FeOg8Dc.js";import{g as cl}from"./0.ADTwr_qG.js";import{e as Se}from"./each.-oqiv04n.js";import{g as qe,a as dl}from"./spread.rEx3vLA9.js";import{g as hl}from"./_commonjsHelpers.5-cIlDoe.js";import{t as bl,g as ml}from"./i18n.T5yPWB9q.js";var Me={exports:{}};(function(e,l){(function(){var t={};e.exports=t,t.simpleFilter=function(i,a){return a.filter(function(n){return t.test(i,n)})},t.test=function(i,a){return t.match(i,a)!==null},t.match=function(i,a,n){n=n||{};var s=0,o=[],u=a.length,S=0,k=0,E=n.pre||"",g=n.post||"",h=n.caseSensitive&&a||a.toLowerCase(),p;i=n.caseSensitive&&i||i.toLowerCase();for(var b=0;b<u;b++)p=a[b],h[b]===i[s]?(p=E+p+g,s+=1,k+=1+k):k=0,S+=k,o[o.length]=p;return s===i.length?(S=h===i?1/0:S,{rendered:o.join(""),score:S}):null},t.filter=function(i,a,n){return!a||a.length===0?[]:typeof i!="string"?a:(n=n||{},a.reduce(function(s,o,u,S){var k=o;n.extract&&(k=n.extract(o));var E=t.match(i,k,n);return E!=null&&(s[s.length]={string:E.rendered,score:E.score,index:u,original:o}),s},[]).sort(function(s,o){var u=o.score-s.score;return u||s.index-o.index}))}})()})(Me);var _l=Me.exports;const gl=hl(_l),vl=e=>({}),ye=e=>({});function kl(e){let l;return{c(){l=Ne(e[2])},l(t){l=Oe(t,e[2])},m(t,i){C(t,l,i)},p(t,i){i&4&&Be(l,t[2])},d(t){t&&w(l)}}}function pl(e){let l,t,i,a,n,s,o,u,S,k;const E=e[10].label,g=ne(E,e,e[9],ye),h=g||kl(e);let p=[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},e[6],{id:e[4]}],b={};for(let m=0;m<p.length;m+=1)b=H(b,p[m]);return{c(){l=z("form"),t=z("label"),h&&h.c(),a=q(),n=z("input"),this.h()},l(m){l=P(m,"FORM",{"data-svelte-search":!0,role:!0,"aria-labelledby":!0});var v=T(l);t=P(v,"LABEL",{id:!0,for:!0,class:!0});var y=T(t);h&&h.l(y),y.forEach(w),a=M(v),n=P(v,"INPUT",{name:!0,type:!0,placeholder:!0,autocomplete:!0,spellcheck:!0,id:!0}),v.forEach(w),this.h()},h(){d(t,"id",i=e[4]+"-label"),d(t,"for",e[4]),d(t,"class","svelte-wqugyy"),B(t,"hide-label",e[3]),he(n,b),B(n,"svelte-wqugyy",!0),d(l,"data-svelte-search",""),d(l,"role",s=e[5]?null:"search"),d(l,"aria-labelledby",o=e[5]?null:e[4])},m(m,v){C(m,l,v),O(l,t),h&&h.m(t,null),O(l,a),O(l,n),n.autofocus&&n.focus(),e[17](n),be(n,e[0]),u=!0,S||(k=[K(n,"input",e[18]),K(n,"input",e[12]),K(n,"change",e[13]),K(n,"focus",e[14]),K(n,"blur",e[15]),K(n,"keydown",e[16]),K(l,"submit",sl(e[11]))],S=!0)},p(m,[v]){g?g.p&&(!u||v&512)&&re(g,E,m,m[9],u?oe(E,m[9],v,vl):ie(m[9]),ye):h&&h.p&&(!u||v&4)&&h.p(m,u?v:-1),(!u||v&16&&i!==(i=m[4]+"-label"))&&d(t,"id",i),(!u||v&16)&&d(t,"for",m[4]),(!u||v&8)&&B(t,"hide-label",m[3]),he(n,b=qe(p,[{name:"search"},{type:"search"},{placeholder:"Search..."},{autocomplete:"off"},{spellcheck:"false"},v&64&&m[6],(!u||v&16)&&{id:m[4]}])),v&1&&n.value!==m[0]&&be(n,m[0]),B(n,"svelte-wqugyy",!0),(!u||v&32&&s!==(s=m[5]?null:"search"))&&d(l,"role",s),(!u||v&48&&o!==(o=m[5]?null:m[4]))&&d(l,"aria-labelledby",o)},i(m){u||(L(h,m),u=!0)},o(m){R(h,m),u=!1},d(m){m&&w(l),h&&h.d(m),e[17](null),S=!1,Ie(k)}}}function Sl(e,l,t){const i=["value","autofocus","debounce","label","hideLabel","id","ref","removeFormAriaAttributes"];let a=Q(l,i),{$$slots:n={},$$scope:s}=l,{value:o=""}=l,{autofocus:u=!1}=l,{debounce:S=0}=l,{label:k="Label"}=l,{hideLabel:E=!1}=l,{id:g="search"+Math.random().toString(36)}=l,{ref:h=null}=l,{removeFormAriaAttributes:p=!1}=l;const b=ue();let m=o,v,y=!1;function f(_){y||(y=!0,v=setTimeout(()=>{_(),y=!1},S))}Le(()=>(u&&window.requestAnimationFrame(()=>h.focus()),()=>clearTimeout(v))),ze(()=>{o.length>0&&o!==m&&(S>0?f(()=>b("type",o)):b("type",o)),o.length===0&&m.length>0&&b("clear"),m=o});function A(_){N.call(this,e,_)}function c(_){N.call(this,e,_)}function F(_){N.call(this,e,_)}function I(_){N.call(this,e,_)}function x(_){N.call(this,e,_)}function U(_){N.call(this,e,_)}function j(_){W[_?"unshift":"push"](()=>{h=_,t(1,h)})}function V(){o=this.value,t(0,o)}return e.$$set=_=>{l=H(H({},l),Pe(_)),t(6,a=Q(l,i)),"value"in _&&t(0,o=_.value),"autofocus"in _&&t(7,u=_.autofocus),"debounce"in _&&t(8,S=_.debounce),"label"in _&&t(2,k=_.label),"hideLabel"in _&&t(3,E=_.hideLabel),"id"in _&&t(4,g=_.id),"ref"in _&&t(1,h=_.ref),"removeFormAriaAttributes"in _&&t(5,p=_.removeFormAriaAttributes),"$$scope"in _&&t(9,s=_.$$scope)},[o,h,k,E,g,p,a,u,S,s,n,A,c,F,I,x,U,j,V]}let yl=class extends fe{constructor(l){super(),ce(this,l,Sl,pl,se,{value:0,autofocus:7,debounce:8,label:2,hideLabel:3,id:4,ref:1,removeFormAriaAttributes:5})}};const Al=yl,Fl=e=>({value:e[0]&1}),Ae=e=>({value:e[0]});function Fe(e,l,t){const i=e.slice();return i[47]=l[t],i[49]=t,i}const El=e=>({result:e[0]&2,value:e[0]&1}),Ee=e=>({result:e[47],index:e[49],value:e[0]});function we(e){let l,t,i=Se(e[1]),a=[];for(let s=0;s<i.length;s+=1)a[s]=De(Fe(e,i,s));const n=s=>R(a[s],1,1,()=>{a[s]=null});return{c(){for(let s=0;s<a.length;s+=1)a[s].c();l=Y()},l(s){for(let o=0;o<a.length;o+=1)a[o].l(s);l=Y()},m(s,o){for(let u=0;u<a.length;u+=1)a[u]&&a[u].m(s,o);C(s,l,o),t=!0},p(s,o){if(o[0]&67111943){i=Se(s[1]);let u;for(u=0;u<i.length;u+=1){const S=Fe(s,i,u);a[u]?(a[u].p(S,o),L(a[u],1)):(a[u]=De(S),a[u].c(),L(a[u],1),a[u].m(l.parentNode,l))}for(te(),u=i.length;u<a.length;u+=1)n(u);ae()}},i(s){if(!t){for(let o=0;o<i.length;o+=1)L(a[o]);t=!0}},o(s){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)R(a[o]);t=!1},d(s){s&&w(l),rl(a,s)}}}function wl(e){let l,t=e[47].string+"",i;return{c(){l=new ol(!1),i=Y(),this.h()},l(a){l=ul(a,!1),i=Y(),this.h()},h(){l.a=i},m(a,n){l.m(t,a,n),C(a,i,n)},p(a,n){n[0]&2&&t!==(t=a[47].string+"")&&l.p(t)},d(a){a&&(w(i),l.d())}}}function De(e){let l,t,i,a,n,s,o;const u=e[27].default,S=ne(u,e,e[26],Ee),k=S||wl(e);function E(){return e[40](e[47],e[49])}function g(){return e[41](e[47],e[49])}return{c(){l=z("li"),k&&k.c(),t=q(),this.h()},l(h){l=P(h,"LI",{role:!0,id:!0,"aria-selected":!0,class:!0});var p=T(l);k&&k.l(p),t=M(p),p.forEach(w),this.h()},h(){d(l,"role","option"),d(l,"id",i=e[2]+"-result-"+e[49]),d(l,"aria-selected",a=e[10]===e[49]),d(l,"class","svelte-4tg1b1"),B(l,"selected",e[10]===e[49]),B(l,"disabled",e[47].disabled)},m(h,p){C(h,l,p),k&&k.m(l,null),O(l,t),n=!0,s||(o=[K(l,"click",E),K(l,"mouseenter",g)],s=!0)},p(h,p){e=h,S?S.p&&(!n||p[0]&67108867)&&re(S,u,e,e[26],n?oe(u,e[26],p,El):ie(e[26]),Ee):k&&k.p&&(!n||p[0]&2)&&k.p(e,n?p:[-1,-1]),(!n||p[0]&4&&i!==(i=e[2]+"-result-"+e[49]))&&d(l,"id",i),(!n||p[0]&1024&&a!==(a=e[10]===e[49]))&&d(l,"aria-selected",a),(!n||p[0]&1024)&&B(l,"selected",e[10]===e[49]),(!n||p[0]&2)&&B(l,"disabled",e[47].disabled)},i(h){n||(L(k,h),n=!0)},o(h){R(k,h),n=!1},d(h){h&&w(l),k&&k.d(h),s=!1,Ie(o)}}}function Ce(e){let l,t;const i=e[27]["no-results"],a=ne(i,e,e[26],Ae);return{c(){l=z("div"),a&&a.c(),this.h()},l(n){l=P(n,"DIV",{class:!0});var s=T(l);a&&a.l(s),s.forEach(w),this.h()},h(){d(l,"class","svelte-4tg1b1"),B(l,"no-results",!0)},m(n,s){C(n,l,s),a&&a.m(l,null),t=!0},p(n,s){a&&a.p&&(!t||s[0]&67108865)&&re(a,i,n,n[26],t?oe(i,n[26],s,Fl):ie(n[26]),Ae)},i(n){t||(L(a,n),t=!0)},o(n){R(a,n),t=!1},d(n){n&&w(l),a&&a.d(n)}}}function Dl(e){let l,t,i,a,n,s,o,u,S,k,E,g,h,p;const b=[{id:e[2]},{removeFormAriaAttributes:!0},e[16],{"aria-autocomplete":"list"},{"aria-controls":e[2]+"-listbox"},{"aria-labelledby":e[2]+"-label"},{"aria-activedescendant":e[10]>=0&&!e[5]&&e[1].length>0?`${e[2]}-result-${e[10]}`:null}];function m(c){e[29](c)}function v(c){e[30](c)}let y={};for(let c=0;c<b.length;c+=1)y=H(y,b[c]);e[9]!==void 0&&(y.ref=e[9]),e[0]!==void 0&&(y.value=e[0]),t=new Al({props:y}),W.push(()=>pe(t,"ref",m)),W.push(()=>pe(t,"value",v)),t.$on("type",e[31]),t.$on("input",e[32]),t.$on("change",e[33]),t.$on("focus",e[34]),t.$on("focus",e[35]),t.$on("clear",e[36]),t.$on("clear",e[13]),t.$on("blur",e[37]),t.$on("keydown",e[38]),t.$on("keydown",e[39]);let f=e[7]&&we(e),A=e[15]["no-results"]&&!e[5]&&e[0].length>0&&e[1].length===0&&Ce(e);return{c(){l=z("div"),Ke(t.$$.fragment),n=q(),s=z("ul"),f&&f.c(),o=q(),A&&A.c(),this.h()},l(c){l=P(c,"DIV",{"data-svelte-typeahead":!0,role:!0,"aria-haspopup":!0,"aria-controls":!0,"aria-expanded":!0,id:!0,class:!0});var F=T(l);Re(t.$$.fragment,F),n=M(F),s=P(F,"UL",{role:!0,"aria-labelledby":!0,id:!0,class:!0});var I=T(s);f&&f.l(I),o=M(I),A&&A.l(I),I.forEach(w),F.forEach(w),this.h()},h(){d(s,"role","listbox"),d(s,"aria-labelledby",u=e[2]+"-label"),d(s,"id",S=e[2]+"-listbox"),d(s,"class","svelte-4tg1b1"),B(s,"svelte-typeahead-list",!0),d(l,"data-svelte-typeahead",""),d(l,"role","combobox"),d(l,"aria-haspopup","listbox"),d(l,"aria-controls",k=e[2]+"-listbox"),d(l,"aria-expanded",e[7]),d(l,"id",E=e[2]+"-typeahead"),d(l,"class","svelte-4tg1b1"),B(l,"dropdown",e[1].length>0)},m(c,F){C(c,l,F),Te(t,l,null),O(l,n),O(l,s),f&&f.m(s,null),O(s,o),A&&A.m(s,null),e[42](l),g=!0,h||(p=K(window,"click",e[28]),h=!0)},p(c,F){const I=F[0]&66598?qe(b,[F[0]&4&&{id:c[2]},b[1],F[0]&65536&&dl(c[16]),b[3],F[0]&4&&{"aria-controls":c[2]+"-listbox"},F[0]&4&&{"aria-labelledby":c[2]+"-label"},F[0]&1062&&{"aria-activedescendant":c[10]>=0&&!c[5]&&c[1].length>0?`${c[2]}-result-${c[10]}`:null}]):{};!i&&F[0]&512&&(i=!0,I.ref=c[9],me(()=>i=!1)),!a&&F[0]&1&&(a=!0,I.value=c[0],me(()=>a=!1)),t.$set(I),c[7]?f?(f.p(c,F),F[0]&128&&L(f,1)):(f=we(c),f.c(),L(f,1),f.m(s,o)):f&&(te(),R(f,1,1,()=>{f=null}),ae()),c[15]["no-results"]&&!c[5]&&c[0].length>0&&c[1].length===0?A?(A.p(c,F),F[0]&32803&&L(A,1)):(A=Ce(c),A.c(),L(A,1),A.m(s,null)):A&&(te(),R(A,1,1,()=>{A=null}),ae()),(!g||F[0]&4&&u!==(u=c[2]+"-label"))&&d(s,"aria-labelledby",u),(!g||F[0]&4&&S!==(S=c[2]+"-listbox"))&&d(s,"id",S),(!g||F[0]&4&&k!==(k=c[2]+"-listbox"))&&d(l,"aria-controls",k),(!g||F[0]&128)&&d(l,"aria-expanded",c[7]),(!g||F[0]&4&&E!==(E=c[2]+"-typeahead"))&&d(l,"id",E),(!g||F[0]&2)&&B(l,"dropdown",c[1].length>0)},i(c){g||(L(t.$$.fragment,c),L(f),L(A),g=!0)},o(c){R(t.$$.fragment,c),R(f),R(A),g=!1},d(c){c&&w(l),Ve(t),f&&f.d(),A&&A.d(),e[42](null),h=!1,p()}}}function Cl(e,l,t){let i,a,n;const s=["id","value","data","extract","disable","filter","autoselect","inputAfterSelect","results","focusAfterSelect","showDropdownOnFocus","showAllResultsOnFocus","limit"];let o=Q(l,s),{$$slots:u={},$$scope:S}=l;const k=nl(u);let{id:E="typeahead-"+Math.random().toString(36)}=l,{value:g=""}=l,{data:h=[]}=l,{extract:p=r=>r}=l,{disable:b=r=>!1}=l,{filter:m=r=>!1}=l,{autoselect:v=!0}=l,{inputAfterSelect:y="update"}=l,{results:f=[]}=l,{focusAfterSelect:A=!1}=l,{showDropdownOnFocus:c=!1}=l,{showAllResultsOnFocus:F=!1}=l,{limit:I=1/0}=l;const x=ue();let U=null,j=null,V=!1,_=-1,$="",J=!1;ze(()=>{$!==a&&v&&t(10,_=je()),$!==a&&!k["no-results"]&&t(5,V=f.length===0),$=a});async function ee(){const r=f[_];if(r.disabled)return;const D=p(r.original),G=g;y=="clear"&&t(0,g=""),y=="update"&&t(0,g=D),x("select",{selectedIndex:_,searched:G,selected:D,original:r.original,originalIndex:r.index}),await il(),A&&j.focus(),X()}function je(){let r=0,D=f[r]?.disabled??!1;for(;D;)r===f.length?r=0:r+=1,D=f[r]?.disabled??!1;return r}function le(r){let D=r===1&&_===f.length-1?0:_+r;D<0&&(D=f.length-1);let G=f[D].disabled;for(;G;)D===f.length?D=0:D+=r,G=f[D].disabled;t(10,_=D)}const de=()=>t(5,V=!1),X=()=>{t(5,V=!0),t(6,J=!1)},Ue=({target:r})=>{!V&&!U?.contains(r)&&X()};function He(r){j=r,t(9,j)}function Je(r){g=r,t(0,g)}function We(r){N.call(this,e,r)}function Xe(r){N.call(this,e,r)}function Ge(r){N.call(this,e,r)}function Qe(r){N.call(this,e,r)}const Ye=()=>{de(),(c||F)&&(t(7,n=!0),t(6,J=!0))};function Ze(r){N.call(this,e,r)}function xe(r){N.call(this,e,r)}function $e(r){N.call(this,e,r)}const el=r=>{if(f.length!==0)switch(r.key){case"Enter":ee();break;case"ArrowDown":r.preventDefault(),le(1);break;case"ArrowUp":r.preventDefault(),le(-1);break;case"Escape":r.preventDefault(),t(0,g=""),j?.focus(),X();break}},ll=(r,D)=>{r.disabled||(t(10,_=D),ee())},tl=(r,D)=>{r.disabled||t(10,_=D)};function al(r){W[r?"unshift":"push"](()=>{U=r,t(8,U)})}return e.$$set=r=>{l=H(H({},l),Pe(r)),t(16,o=Q(l,s)),"id"in r&&t(2,E=r.id),"value"in r&&t(0,g=r.value),"data"in r&&t(17,h=r.data),"extract"in r&&t(18,p=r.extract),"disable"in r&&t(19,b=r.disable),"filter"in r&&t(20,m=r.filter),"autoselect"in r&&t(21,v=r.autoselect),"inputAfterSelect"in r&&t(22,y=r.inputAfterSelect),"results"in r&&t(1,f=r.results),"focusAfterSelect"in r&&t(23,A=r.focusAfterSelect),"showDropdownOnFocus"in r&&t(3,c=r.showDropdownOnFocus),"showAllResultsOnFocus"in r&&t(4,F=r.showAllResultsOnFocus),"limit"in r&&t(24,I=r.limit),"$$scope"in r&&t(26,S=r.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&262144&&t(25,i={pre:"<mark>",post:"</mark>",extract:p}),e.$$.dirty[0]&52035585&&t(1,f=gl.filter(g,h,i).filter(({score:r})=>r>0).slice(0,I).filter(r=>!m(r.original)).map(r=>({...r,disabled:b(r.original)}))),e.$$.dirty[0]&1966161&&J&&F&&g.length===0&&t(1,f=h.filter(r=>!m(r)).map((r,D)=>({disabled:b(r),index:D,original:r,score:0,string:p(r)}))),e.$$.dirty[0]&262146&&(a=f.map(r=>p(r.original)).join("")),e.$$.dirty[0]&34&&t(7,n=!V&&f.length>0),e.$$.dirty[0]&200&&c&&t(7,n=n&&J)},[g,f,E,c,F,V,J,n,U,j,_,ee,le,de,X,k,o,h,p,b,m,v,y,A,I,i,S,u,Ue,He,Je,We,Xe,Ge,Qe,Ye,Ze,xe,$e,el,ll,tl,al]}class Il extends fe{constructor(l){super(),ce(this,l,Cl,Dl,se,{id:2,value:0,data:17,extract:18,disable:19,filter:20,autoselect:21,inputAfterSelect:22,results:1,focusAfterSelect:23,showDropdownOnFocus:3,showAllResultsOnFocus:4,limit:24},null,[-1,-1])}}function Ll(e){let l,t=e[6][e[12].index].name+"",i;return{c(){l=z("div"),i=Ne(t),this.h()},l(a){l=P(a,"DIV",{class:!0});var n=T(l);i=Oe(n,t),n.forEach(w),this.h()},h(){d(l,"class","py-1 text-sm font-normal")},m(a,n){C(a,l,n),O(l,i)},p(a,n){n&4096&&t!==(t=a[6][a[12].index].name+"")&&Be(i,t)},d(a){a&&w(l)}}}function zl(e){let l,t="ctrl",i,a,n="K";return{c(){l=z("kbd"),l.textContent=t,i=q(),a=z("kbd"),a.textContent=n,this.h()},l(s){l=P(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-mabxvd"&&(l.textContent=t),i=M(s),a=P(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-8gtzw5"&&(a.textContent=n),this.h()},h(){d(l,"class","kbd kbd-sm"),d(a,"class","kbd kbd-sm")},m(s,o){C(s,l,o),C(s,i,o),C(s,a,o)},d(s){s&&(w(l),w(i),w(a))}}}function Pl(e){let l,t="⌘",i,a,n="K";return{c(){l=z("kbd"),l.textContent=t,i=q(),a=z("kbd"),a.textContent=n,this.h()},l(s){l=P(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(l)!=="svelte-1pv9l7m"&&(l.textContent=t),i=M(s),a=P(s,"KBD",{class:!0,"data-svelte-h":!0}),Z(a)!=="svelte-8gtzw5"&&(a.textContent=n),this.h()},h(){d(l,"class","kbd kbd-sm"),d(a,"class","kbd kbd-sm")},m(s,o){C(s,l,o),C(s,i,o),C(s,a,o)},d(s){s&&(w(l),w(i),w(a))}}}function Nl(e){let l,t,i,a,n,s,o,u,S,k,E,g,h,p;s=new Il({props:{placeholder:e[5]("Search")+"…",limit:8,label:"Search",data:e[6],extract:Bl,inputAfterSelect:"clear",$$slots:{default:[Ll,({result:y})=>({12:y}),({result:y})=>y?4096:0]},$$scope:{ctx:e}}}),s.$on("select",e[8]),s.$on("focus",function(){_e(e[1])&&e[1].apply(this,arguments)}),s.$on("blur",function(){_e(e[0])&&e[0].apply(this,arguments)});function b(y,f){if(f&4&&(S=null),f&4&&(k=null),S==null&&(S=!!["macos"].includes(y[2])),S)return Pl;if(k==null&&(k=!!["windows","linux"].includes(y[2])),k)return zl}let m=b(e,-1),v=m&&m(e);return{c(){l=z("label"),t=ge("svg"),i=ge("path"),n=q(),Ke(s.$$.fragment),o=q(),u=z("div"),v&&v.c(),this.h()},l(y){l=P(y,"LABEL",{class:!0});var f=T(l);t=ve(f,"svg",{class:!0,width:!0,height:!0,xmlns:!0,fill:!0,viewBox:!0});var A=T(t);i=ve(A,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),T(i).forEach(w),A.forEach(w),n=M(f),Re(s.$$.fragment,f),o=M(f),u=P(f,"DIV",{class:!0});var c=T(u);v&&v.l(c),c.forEach(w),f.forEach(w),this.h()},h(){d(i,"stroke-linecap","round"),d(i,"stroke-linejoin","round"),d(i,"stroke-width","2"),d(i,"d","M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"),d(t,"class",a=`pointer-events-none absolute z-10 my-3.5 ms-4 stroke-current opacity-60 ${e[4].url.pathname=="/"?"text-current":"text-base-content"}`),d(t,"width","16"),d(t,"height","16"),d(t,"xmlns","http://www.w3.org/2000/svg"),d(t,"fill","none"),d(t,"viewBox","0 0 24 24"),d(u,"class",E=`pointer-events-none absolute end-10 top-2.5 gap-1 opacity-50 rtl:flex-row-reverse ${e[4].url.pathname=="/"?"hidden":"hidden lg:flex"}`),d(l,"class","searchbox relative mx-3 w-full")},m(y,f){C(y,l,f),O(l,t),O(t,i),O(l,n),Te(s,l,null),O(l,o),O(l,u),v&&v.m(u,null),e[10](l),g=!0,h||(p=K(window,"keydown",e[7]),h=!0)},p(y,[f]){e=y,(!g||f&16&&a!==(a=`pointer-events-none absolute z-10 my-3.5 ms-4 stroke-current opacity-60 ${e[4].url.pathname=="/"?"text-current":"text-base-content"}`))&&d(t,"class",a);const A={};f&32&&(A.placeholder=e[5]("Search")+"…"),f&12288&&(A.$$scope={dirty:f,ctx:e}),s.$set(A),m!==(m=b(e,f))&&(v&&v.d(1),v=m&&m(e),v&&(v.c(),v.m(u,null))),(!g||f&16&&E!==(E=`pointer-events-none absolute end-10 top-2.5 gap-1 opacity-50 rtl:flex-row-reverse ${e[4].url.pathname=="/"?"hidden":"hidden lg:flex"}`))&&d(u,"class",E)},i(y){g||(L(s.$$.fragment,y),g=!0)},o(y){R(s.$$.fragment,y),g=!1},d(y){y&&w(l),Ve(s),v&&v.d(),e[10](null),h=!1,p()}}}function Ol(e){const l=[];function t(i){i.href&&l.push(i),i.items&&i.items.forEach(a=>{t(a)})}return e.forEach(i=>{t(i)}),l}const Bl=e=>e.tags?e.tags:e.name;function Kl(e,l,t){let i,a;ke(e,fl,b=>t(4,i=b)),ke(e,bl,b=>t(5,a=b));let{pages:n=[]}=l;const s=ue();let o=Ol(n),u;Le(()=>{t(2,u=ml())});let S;function k(b){(b.keyCode===75&&b.metaKey||b.keyCode===75&&b.ctrlKey)&&(b.preventDefault(),S.querySelector("input[type=search]").focus(),s("focus"))}function E({detail:b}){cl(o[b.originalIndex].href),s("search",b)}let{addScrollPaddingToNavbar:g=void 0}=l,{removeScrollPaddingFromNavbar:h=void 0}=l;function p(b){W[b?"unshift":"push"](()=>{S=b,t(3,S)})}return e.$$set=b=>{"pages"in b&&t(9,n=b.pages),"addScrollPaddingToNavbar"in b&&t(0,g=b.addScrollPaddingToNavbar),"removeScrollPaddingFromNavbar"in b&&t(1,h=b.removeScrollPaddingFromNavbar)},[g,h,u,S,i,a,o,k,E,n,p]}class Wl extends fe{constructor(l){super(),ce(this,l,Kl,Nl,se,{pages:9,addScrollPaddingToNavbar:0,removeScrollPaddingFromNavbar:1})}}export{Wl as default};
