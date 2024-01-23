import{s as Ss,z as Yt,A as hs,e as n,a as p,H,c as l,g as i,d as o,b as C,x as T,h as s,i as r,j as e,n as Ps}from"../chunks/scheduler.z1v5p5l_.js";import{S as js,i as qs,c as Es,b as Is,m as Rs,t as $s,a as zs,d as As}from"../chunks/index.wUxZk5jp.js";import{g as Ys,a as bs}from"../chunks/spread.rEx3vLA9.js";import{M as Bs}from"../chunks/mdsvex-blog.fgHfCx6j.js";function Us(X){let c,v="As a maintainer of daisyUI, I help people on GitHub issues and GitHub discussions every day. I see a lot of people making this mistake when using Tailwind CSS. It’s so simple to avoid but I find it so common among developers.",m,d,u='<a aria-hidden="true" tabindex="-1" href="#the-mistake"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The mistake',k,f,Bt="Here’s how we simply use Tailwind CSS class names in HTML:",Z,M,tt,xs=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-red-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-green-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-blue-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,st,L,Ut="However it would be cool if we do some totally necessary engineering and make it more dynamic. So we do something like this:",at,S,et,ws='<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-&#123;&#123; color &#125;&#125;-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>',nt,P,Gt="You might even want to do the same thing with daisyUI class names:",lt,j,pt,ys=`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-&#123;&#123; type &#125;&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
instead of
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,ot,q,Wt=`It’s cool, right?<br/>
It even works in dev environment.`,it,E,Dt=`Everything is fine…<br/>
😠 until we build our app for production and you realize the color is not working anymore`,ct,g,Ft='<a aria-hidden="true" tabindex="-1" href="#why-it-doesnt-work"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Why it doesn’t work?',ut,I,Jt="Tailwind CSS scans your HTML files and looks for class names. Then it generates a CSS file based on the class names it finds. It’s that simple. Because the string <code>bg-red-500</code> does not exist in <code>bg-{{ color }}-500</code>, it simply won’t generate the CSS for it.",rt,R,Kt='Read more about <a href="https://tailwindcss.com/docs/content-configuration#dynamic-class-names" rel="nofollow" target="_blank">using dynamic class names with Tailwind CSS</a>.',dt,h,Nt='<a aria-hidden="true" tabindex="-1" href="#but-it-was-working-in-dev-environment"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>But it was working in dev environment!',kt,$,Ot="Yes, it was working because you probably first had <code>bg-red-500</code> in your file, you saved the file and <code>.bg-red-500</code> class name got added to your CSS. Then you changed it to <code>bg-{{ color }}-500</code> and saved the file again. <code>bg-red-500</code> is not in your HTML anymore, but it’s still in your CSS file. So it works in dev environment, but not in production.",mt,b,Qt='<a aria-hidden="true" tabindex="-1" href="#but-some-class-names-work-and-some-dont"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>But some class names work and some don’t!',ft,z,Vt="Probably because you used those class names the correct way (as a string like <code>bg-red-500</code>) in another file.",vt,_,Xt='<a aria-hidden="true" tabindex="-1" href="#solutions"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Solutions',gt,A,Zt="How to fix it?",ht,Y,ts="Simply <strong>do not</strong> use dynamic class names like <code>bg-{{ color }}-500</code>. Make sure the whole class name as a string exists in your file.",bt,B,_t,Hs=`<code class="language-jsx"><span class="token keyword">let</span> color <span class="token operator">=</span> <span class="token string">'bg-red-500'</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&#123;&#123; color &#125;&#125;<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></code>`,xt,U,ss="If you really have to do that, You have 3 ways:",wt,x,as='<a aria-hidden="true" tabindex="-1" href="#solution-1-add-the-class-names-somewhere-in-the-file"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Solution 1: Add the class names somewhere in the file',yt,G,es="Map the required class names somewhere in your file. It can be an object, a comment or anything.",Ht,w,ns='<a aria-hidden="true" tabindex="-1" href="#solution-2-a-safelist-file"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Solution 2: A safelist file',Ct,W,ls="List all the required class names in a safelist file and add it to your <code>tailwind.config.js</code> file as <code>content</code>",Tt,D,Mt,Cs=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./path/safelist.txt"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">&#125;</span></code>`,Lt,F,ps="<code>./path/safelist.txt</code> file can be simply like this:",St,J,Pt,Ts=`<code class="language-txt">bg-red-500
bg-green-500
bg-blue-500</code>`,jt,y,os='<a aria-hidden="true" tabindex="-1" href="#solution-3-safelist-config"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Solution 3: Safelist config',qt,K,is="Safelist all the required class names in your <code>tailwind.config.js</code> file.",Et,N,It,Ms=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./pages/**/*.&#123;html,js&#125;"</span><span class="token punctuation">,</span> <span class="token string">"./components/**/*.&#123;html,js&#125;"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">safelist</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"bg-red-500"</span><span class="token punctuation">,</span> <span class="token string">"bg-green-500"</span><span class="token punctuation">,</span> <span class="token string">"bg-blue-500"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">&#125;</span></code>`,Rt,O,cs="You can also use regex patterns in safelist:",$t,Q,zt,Ls=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"./pages/**/*.&#123;html,js&#125;"</span><span class="token punctuation">,</span> <span class="token string">"./components/**/*.&#123;html,js&#125;"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">safelist</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"bg-teal-700"</span><span class="token punctuation">,</span>
    <span class="token punctuation">&#123;</span>
      <span class="token literal-property property">pattern</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">bg-(red|green|blue)-(400|500|600)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">&#125;</span></code>`,At,V,us='Read more about <a href="https://tailwindcss.com/docs/content-configuration#safelisting-classes" rel="nofollow" target="_blank">Tailwind CSS safelist</a>.';return{c(){c=n("p"),c.textContent=v,m=p(),d=n("h2"),d.innerHTML=u,k=p(),f=n("p"),f.textContent=Bt,Z=p(),M=n("pre"),tt=new H(!1),st=p(),L=n("p"),L.textContent=Ut,at=p(),S=n("pre"),et=new H(!1),nt=p(),P=n("p"),P.textContent=Gt,lt=p(),j=n("pre"),pt=new H(!1),ot=p(),q=n("p"),q.innerHTML=Wt,it=p(),E=n("p"),E.innerHTML=Dt,ct=p(),g=n("h2"),g.innerHTML=Ft,ut=p(),I=n("p"),I.innerHTML=Jt,rt=p(),R=n("p"),R.innerHTML=Kt,dt=p(),h=n("h2"),h.innerHTML=Nt,kt=p(),$=n("p"),$.innerHTML=Ot,mt=p(),b=n("h2"),b.innerHTML=Qt,ft=p(),z=n("p"),z.innerHTML=Vt,vt=p(),_=n("h2"),_.innerHTML=Xt,gt=p(),A=n("p"),A.textContent=Zt,ht=p(),Y=n("p"),Y.innerHTML=ts,bt=p(),B=n("pre"),_t=new H(!1),xt=p(),U=n("p"),U.textContent=ss,wt=p(),x=n("h3"),x.innerHTML=as,yt=p(),G=n("p"),G.textContent=es,Ht=p(),w=n("h3"),w.innerHTML=ns,Ct=p(),W=n("p"),W.innerHTML=ls,Tt=p(),D=n("pre"),Mt=new H(!1),Lt=p(),F=n("p"),F.innerHTML=ps,St=p(),J=n("pre"),Pt=new H(!1),jt=p(),y=n("h3"),y.innerHTML=os,qt=p(),K=n("p"),K.innerHTML=is,Et=p(),N=n("pre"),It=new H(!1),Rt=p(),O=n("p"),O.textContent=cs,$t=p(),Q=n("pre"),zt=new H(!1),At=p(),V=n("p"),V.innerHTML=us,this.h()},l(t){c=l(t,"P",{"data-svelte-h":!0}),i(c)!=="svelte-yzmz4q"&&(c.textContent=v),m=o(t),d=l(t,"H2",{id:!0,"data-svelte-h":!0}),i(d)!=="svelte-rj83vs"&&(d.innerHTML=u),k=o(t),f=l(t,"P",{"data-svelte-h":!0}),i(f)!=="svelte-4rrmzq"&&(f.textContent=Bt),Z=o(t),M=l(t,"PRE",{class:!0});var a=C(M);tt=T(a,!1),a.forEach(s),st=o(t),L=l(t,"P",{"data-svelte-h":!0}),i(L)!=="svelte-17p33r5"&&(L.textContent=Ut),at=o(t),S=l(t,"PRE",{class:!0});var rs=C(S);et=T(rs,!1),rs.forEach(s),nt=o(t),P=l(t,"P",{"data-svelte-h":!0}),i(P)!=="svelte-bgu96b"&&(P.textContent=Gt),lt=o(t),j=l(t,"PRE",{class:!0});var ds=C(j);pt=T(ds,!1),ds.forEach(s),ot=o(t),q=l(t,"P",{"data-svelte-h":!0}),i(q)!=="svelte-xhe7w5"&&(q.innerHTML=Wt),it=o(t),E=l(t,"P",{"data-svelte-h":!0}),i(E)!=="svelte-1s61m74"&&(E.innerHTML=Dt),ct=o(t),g=l(t,"H2",{id:!0,"data-svelte-h":!0}),i(g)!=="svelte-1wdb9ue"&&(g.innerHTML=Ft),ut=o(t),I=l(t,"P",{"data-svelte-h":!0}),i(I)!=="svelte-jhm2t7"&&(I.innerHTML=Jt),rt=o(t),R=l(t,"P",{"data-svelte-h":!0}),i(R)!=="svelte-cfyj8w"&&(R.innerHTML=Kt),dt=o(t),h=l(t,"H2",{id:!0,"data-svelte-h":!0}),i(h)!=="svelte-6itatr"&&(h.innerHTML=Nt),kt=o(t),$=l(t,"P",{"data-svelte-h":!0}),i($)!=="svelte-j8rp8m"&&($.innerHTML=Ot),mt=o(t),b=l(t,"H2",{id:!0,"data-svelte-h":!0}),i(b)!=="svelte-iqtj8t"&&(b.innerHTML=Qt),ft=o(t),z=l(t,"P",{"data-svelte-h":!0}),i(z)!=="svelte-1s3cqs0"&&(z.innerHTML=Vt),vt=o(t),_=l(t,"H2",{id:!0,"data-svelte-h":!0}),i(_)!=="svelte-h4gcd9"&&(_.innerHTML=Xt),gt=o(t),A=l(t,"P",{"data-svelte-h":!0}),i(A)!=="svelte-15d1eoe"&&(A.textContent=Zt),ht=o(t),Y=l(t,"P",{"data-svelte-h":!0}),i(Y)!=="svelte-1e8dqsk"&&(Y.innerHTML=ts),bt=o(t),B=l(t,"PRE",{class:!0});var ks=C(B);_t=T(ks,!1),ks.forEach(s),xt=o(t),U=l(t,"P",{"data-svelte-h":!0}),i(U)!=="svelte-1swgvyi"&&(U.textContent=ss),wt=o(t),x=l(t,"H3",{id:!0,"data-svelte-h":!0}),i(x)!=="svelte-wahsyq"&&(x.innerHTML=as),yt=o(t),G=l(t,"P",{"data-svelte-h":!0}),i(G)!=="svelte-1541mpe"&&(G.textContent=es),Ht=o(t),w=l(t,"H3",{id:!0,"data-svelte-h":!0}),i(w)!=="svelte-wppag8"&&(w.innerHTML=ns),Ct=o(t),W=l(t,"P",{"data-svelte-h":!0}),i(W)!=="svelte-1foywbp"&&(W.innerHTML=ls),Tt=o(t),D=l(t,"PRE",{class:!0});var ms=C(D);Mt=T(ms,!1),ms.forEach(s),Lt=o(t),F=l(t,"P",{"data-svelte-h":!0}),i(F)!=="svelte-2n6eu1"&&(F.innerHTML=ps),St=o(t),J=l(t,"PRE",{class:!0});var fs=C(J);Pt=T(fs,!1),fs.forEach(s),jt=o(t),y=l(t,"H3",{id:!0,"data-svelte-h":!0}),i(y)!=="svelte-xv5fk4"&&(y.innerHTML=os),qt=o(t),K=l(t,"P",{"data-svelte-h":!0}),i(K)!=="svelte-1db0yfa"&&(K.innerHTML=is),Et=o(t),N=l(t,"PRE",{class:!0});var vs=C(N);It=T(vs,!1),vs.forEach(s),Rt=o(t),O=l(t,"P",{"data-svelte-h":!0}),i(O)!=="svelte-3gcz5l"&&(O.textContent=cs),$t=o(t),Q=l(t,"PRE",{class:!0});var gs=C(Q);zt=T(gs,!1),gs.forEach(s),At=o(t),V=l(t,"P",{"data-svelte-h":!0}),i(V)!=="svelte-1c67h3d"&&(V.innerHTML=us),this.h()},h(){r(d,"id","the-mistake"),tt.a=null,r(M,"class","language-html"),et.a=null,r(S,"class","language-html"),pt.a=null,r(j,"class","language-html"),r(g,"id","why-it-doesnt-work"),r(h,"id","but-it-was-working-in-dev-environment"),r(b,"id","but-some-class-names-work-and-some-dont"),r(_,"id","solutions"),_t.a=null,r(B,"class","language-jsx"),r(x,"id","solution-1-add-the-class-names-somewhere-in-the-file"),r(w,"id","solution-2-a-safelist-file"),Mt.a=null,r(D,"class","language-js"),Pt.a=null,r(J,"class","language-txt"),r(y,"id","solution-3-safelist-config"),It.a=null,r(N,"class","language-js"),zt.a=null,r(Q,"class","language-js")},m(t,a){e(t,c,a),e(t,m,a),e(t,d,a),e(t,k,a),e(t,f,a),e(t,Z,a),e(t,M,a),tt.m(xs,M),e(t,st,a),e(t,L,a),e(t,at,a),e(t,S,a),et.m(ws,S),e(t,nt,a),e(t,P,a),e(t,lt,a),e(t,j,a),pt.m(ys,j),e(t,ot,a),e(t,q,a),e(t,it,a),e(t,E,a),e(t,ct,a),e(t,g,a),e(t,ut,a),e(t,I,a),e(t,rt,a),e(t,R,a),e(t,dt,a),e(t,h,a),e(t,kt,a),e(t,$,a),e(t,mt,a),e(t,b,a),e(t,ft,a),e(t,z,a),e(t,vt,a),e(t,_,a),e(t,gt,a),e(t,A,a),e(t,ht,a),e(t,Y,a),e(t,bt,a),e(t,B,a),_t.m(Hs,B),e(t,xt,a),e(t,U,a),e(t,wt,a),e(t,x,a),e(t,yt,a),e(t,G,a),e(t,Ht,a),e(t,w,a),e(t,Ct,a),e(t,W,a),e(t,Tt,a),e(t,D,a),Mt.m(Cs,D),e(t,Lt,a),e(t,F,a),e(t,St,a),e(t,J,a),Pt.m(Ts,J),e(t,jt,a),e(t,y,a),e(t,qt,a),e(t,K,a),e(t,Et,a),e(t,N,a),It.m(Ms,N),e(t,Rt,a),e(t,O,a),e(t,$t,a),e(t,Q,a),zt.m(Ls,Q),e(t,At,a),e(t,V,a)},p:Ps,d(t){t&&(s(c),s(m),s(d),s(k),s(f),s(Z),s(M),s(st),s(L),s(at),s(S),s(nt),s(P),s(lt),s(j),s(ot),s(q),s(it),s(E),s(ct),s(g),s(ut),s(I),s(rt),s(R),s(dt),s(h),s(kt),s($),s(mt),s(b),s(ft),s(z),s(vt),s(_),s(gt),s(A),s(ht),s(Y),s(bt),s(B),s(xt),s(U),s(wt),s(x),s(yt),s(G),s(Ht),s(w),s(Ct),s(W),s(Tt),s(D),s(Lt),s(F),s(St),s(J),s(jt),s(y),s(qt),s(K),s(Et),s(N),s(Rt),s(O),s($t),s(Q),s(At),s(V))}}}function Gs(X){let c,v;const m=[X[0],_s];let d={$$slots:{default:[Us]},$$scope:{ctx:X}};for(let u=0;u<m.length;u+=1)d=Yt(d,m[u]);return c=new Bs({props:d}),{c(){Es(c.$$.fragment)},l(u){Is(c.$$.fragment,u)},m(u,k){Rs(c,u,k),v=!0},p(u,[k]){const f=k&1?Ys(m,[k&1&&bs(u[0]),k&0&&bs(_s)]):{};k&2&&(f.$$scope={dirty:k,ctx:u}),c.$set(f)},i(u){v||($s(c.$$.fragment,u),v=!0)},o(u){zs(c.$$.fragment,u),v=!1},d(u){As(c,u)}}}const _s={title:"The most common mistake when using Tailwind CSS (and how to fix it)",desc:"While working on daisyUI, I see a lot of people making this mistake when using Tailwind CSS.",published:!0,date:"2023-9-14",author:"Pouya Saadeghi",thumbnail:"/images/blog/tailwind-mistake.jpg",tags:["Tailwind CSS"]};function Ws(X,c,v){return X.$$set=m=>{v(0,c=Yt(Yt({},c),hs(m)))},c=hs(c),[c]}class Ns extends js{constructor(c){super(),qs(this,c,Ws,Gs,Ss,{})}}export{Ns as component};
