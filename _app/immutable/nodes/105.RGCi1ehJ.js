import{s as R,a as y,e as p,t as k,d as A,c,b as m,h as a,f as H,i as d,w as M,j as r,k as T,l as O}from"../chunks/scheduler.z1v5p5l_.js";import{S as B,i as G,c as J,b as K,m as L,t as N,a as Q,d as U}from"../chunks/index.wUxZk5jp.js";import{S as W}from"../chunks/SEO.6ZEN78nZ.js";function X(l){let o,_,s,n,b,h,$,w,i,C,u,I=l[0].videos.find(l[4]).snippet.title+"",q,z,E,F,v,S,D=l[0].videos.find(l[5]).snippet.description+"",P,f;return o=new W({props:{title:l[0].videos.find(l[1]).snippet.title,desc:`Tailwind CSS video tutorial: ${l[0].videos.find(l[2]).snippet.title}`}}),{c(){J(o.$$.fragment),_=y(),s=p("div"),n=p("iframe"),w=y(),i=p("div"),C=y(),u=p("h1"),q=k(I),z=y(),E=p("div"),F=y(),v=p("div"),S=p("p"),P=k(D),this.h()},l(e){K(o.$$.fragment,e),_=A(e),s=c(e,"DIV",{class:!0,style:!0});var t=m(s);n=c(t,"IFRAME",{title:!0,src:!0,frameborder:!0,class:!0});var V=m(n);V.forEach(a),t.forEach(a),w=A(e),i=c(e,"DIV",{class:!0}),m(i).forEach(a),C=A(e),u=c(e,"H1",{class:!0});var Z=m(u);q=H(Z,I),Z.forEach(a),z=A(e),E=c(e,"DIV",{class:!0}),m(E).forEach(a),F=A(e),v=c(e,"DIV",{class:!0});var g=m(v);S=c(g,"P",{class:!0});var j=m(S);P=H(j,D),j.forEach(a),g.forEach(a),this.h()},h(){d(n,"title",b=l[0].videos.find(l[3]).snippet.title),M(n.src,h=`https://www.youtube.com/embed/${l[0].video.id}`)||d(n,"src",h),d(n,"frameborder","0"),n.allowFullscreen=!0,d(n,"class","svelte-19d3ctr"),d(s,"class","embed-container rounded-box svelte-19d3ctr"),d(s,"style",$=`view-transition-name: ${l[0].video.id.replace(/[^a-zA-Z]/g,"")}-img`),d(i,"class","h-10"),d(u,"class","text-3xl font-bold"),d(E,"class","h-10"),d(S,"class","mx-auto max-w-2xl text-sm"),d(v,"class","text-base-content/60 bg-base-200 rounded-box p-6")},m(e,t){L(o,e,t),r(e,_,t),r(e,s,t),T(s,n),r(e,w,t),r(e,i,t),r(e,C,t),r(e,u,t),T(u,q),r(e,z,t),r(e,E,t),r(e,F,t),r(e,v,t),T(v,S),T(S,P),f=!0},p(e,[t]){const V={};t&1&&(V.title=e[0].videos.find(e[1]).snippet.title),t&1&&(V.desc=`Tailwind CSS video tutorial: ${e[0].videos.find(e[2]).snippet.title}`),o.$set(V),(!f||t&1&&b!==(b=e[0].videos.find(e[3]).snippet.title))&&d(n,"title",b),(!f||t&1&&!M(n.src,h=`https://www.youtube.com/embed/${e[0].video.id}`))&&d(n,"src",h),(!f||t&1&&$!==($=`view-transition-name: ${e[0].video.id.replace(/[^a-zA-Z]/g,"")}-img`))&&d(s,"style",$),(!f||t&1)&&I!==(I=e[0].videos.find(e[4]).snippet.title+"")&&O(q,I),(!f||t&1)&&D!==(D=e[0].videos.find(e[5]).snippet.description+"")&&O(P,D)},i(e){f||(N(o.$$.fragment,e),f=!0)},o(e){Q(o.$$.fragment,e),f=!1},d(e){e&&(a(_),a(s),a(w),a(i),a(C),a(u),a(z),a(E),a(F),a(v)),U(o,e)}}}function Y(l,o,_){let{data:s}=o;const n=i=>i.id==s.video.id,b=i=>i.id==s.video.id,h=i=>i.id==s.video.id,$=i=>i.id==s.video.id,w=i=>i.id==s.video.id;return l.$$set=i=>{"data"in i&&_(0,s=i.data)},[s,n,b,h,$,w]}class ie extends B{constructor(o){super(),G(this,o,Y,X,R,{data:0})}}export{ie as component};
