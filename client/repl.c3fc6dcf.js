import{S as a,i as t,s as n,e,f as s,g as o,d as l,k as r,l as c,A as i,a as m,t as u,c as d,q as f,b as p,h,j as v,z as g,m as w,n as x,C as k,p as b,r as E,u as $,D as y,K as S,L as I,w as D,x as V,M,y as T,E as J,F as Z}from"./client.40385187.js";import{c as j,u as A,M as R,t as C,a as O}from"./markmap.b2f8f696.js";import{T as P,s as G}from"./gist.99534ee4.js";var q=j((function(a,t){t.__esModule=!0,t.fillTemplate=function(a,t){const e=[...(0,A.persistJS)(n),...(0,A.persistJS)([{type:"iife",data:{fn:(a,t,n,e)=>{const{Markmap:s,loadPlugins:o}=window.markmap;(t?t(o,n,e):Promise.resolve()).then(()=>{window.mm=s.create("svg#mindmap",null,a)})},getParams:({data:a,opts:t})=>{const n=[(null==t?void 0:t.mathJax)&&"mathJax",(null==t?void 0:t.prism)&&"prism"].filter(Boolean),e=[a];return n.length&&e.push((a,t,n)=>a(t,n),n,t),e}}}],{data:a,opts:t})];return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n\x3c!--CSS--\x3e\n</head>\n<body>\n<svg id="mindmap"></svg>\n\x3c!--JS--\x3e\n</body>\n</html>\n'.replace("\x3c!--CSS--\x3e","").replace("\x3c!--JS--\x3e",()=>e.join(""))};const n=["https://cdn.jsdelivr.net/npm/d3@5","https://cdn.jsdelivr.net/npm/markmap-lib@0.8.0/dist/browser/view.min.js"].map(a=>({type:"script",data:{src:a}}))}));const{document:L}=M;function N(a){let t,n,m;return{c(){t=e("textarea"),this.h()},l(a){t=s(a,"TEXTAREA",{class:!0,value:!0}),o(t).forEach(l),this.h()},h(){r(t,"class","w-full h-full p-1"),t.value=a[3]},m(e,s){c(e,t,s),n||(m=i(t,"input",a[11]),n=!0)},p(a,n){8&n&&(t.value=a[3])},d(a){a&&l(t),n=!1,m()}}}function U(a){let t,n,S,I,D,V,M,j,A,C,O,G,q,U,F,z,X,_,B,K,Y,Q,W,aa,ta,na,ea,sa,oa,la,ra,ca,ia,ma=!a[2]&&N(a);function ua(t){a[13].call(null,t)}function da(t){a[14].call(null,t)}function fa(t){a[15].call(null,t)}function pa(t){a[16].call(null,t)}let ha={content:a[3]};return void 0!==a[1]&&(ha.el=a[1]),void 0!==a[4]&&(ha.onReset=a[4]),void 0!==a[5]&&(ha.onZoomIn=a[5]),void 0!==a[6]&&(ha.onZoomOut=a[6]),G=new R({props:ha}),T.push(()=>J(G,"el",ua)),T.push(()=>J(G,"onReset",da)),T.push(()=>J(G,"onZoomIn",fa)),T.push(()=>J(G,"onZoomOut",pa)),_=new P({props:{class:"absolute right-0 bottom-0 mr-2 mb-2",onReset:a[4],onZoomIn:a[5],onZoomOut:a[6]}}),{c(){t=m(),n=e("div"),S=e("a"),I=u("New feature: load markmap from Gist!"),V=m(),M=e("div"),j=e("div"),ma&&ma.c(),A=m(),C=e("div"),O=e("div"),d(G.$$.fragment),X=m(),d(_.$$.fragment),B=m(),K=e("div"),Y=e("div"),Q=e("a"),W=u("Download as interactive HTML"),aa=m(),ta=e("div"),na=e("a"),ea=u("Download as SVG"),sa=m(),oa=e("span"),la=u("⚠️"),this.h()},l(a){f('[data-svelte="svelte-r18bnt"]',L.head).forEach(l),t=p(a),n=s(a,"DIV",{class:!0,style:!0});var e=o(n);S=s(e,"A",{class:!0,href:!0});var r=o(S);I=h(r,"New feature: load markmap from Gist!"),r.forEach(l),e.forEach(l),V=p(a),M=s(a,"DIV",{class:!0});var c=o(M);j=s(c,"DIV",{class:!0});var i=o(j);ma&&ma.l(i),i.forEach(l),A=p(c),C=s(c,"DIV",{class:!0});var m=o(C);O=s(m,"DIV",{class:!0});var u=o(O);v(G.$$.fragment,u),X=p(u),v(_.$$.fragment,u),u.forEach(l),B=p(m),K=s(m,"DIV",{});var d=o(K);Y=s(d,"DIV",{class:!0});var g=o(Y);Q=s(g,"A",{});var w=o(Q);W=h(w,"Download as interactive HTML"),w.forEach(l),g.forEach(l),aa=p(d),ta=s(d,"DIV",{class:!0,title:!0});var x=o(ta);na=s(x,"A",{});var k=o(na);ea=h(k,"Download as SVG"),k.forEach(l),sa=p(x),oa=s(x,"SPAN",{class:!0});var b=o(oa);la=h(b,"⚠️"),b.forEach(l),x.forEach(l),d.forEach(l),m.forEach(l),c.forEach(l),this.h()},h(){L.title="Try Markmap",r(S,"class","inline-block text-sm text-orange-600 underline"),r(S,"href",D=a[7].path+"#?file=gist.md"),r(n,"class","fixed z-10 hidden md:block"),g(n,"top","15px"),g(n,"left","50%"),r(j,"class","flex-1 min-w-0 border border-gray-300"),r(O,"class","markmap-wrapper flex-1"),r(Y,"class","inline-block px-4 py-2"),r(oa,"class","text-red-500"),r(ta,"class","inline-block px-4 py-2"),r(ta,"title","SVG does not work well with PrismJS and MathJax"),r(C,"class","flex-1 min-w-0 flex flex-col"),r(M,"class","repl")},m(e,s){c(e,t,s),c(e,n,s),w(n,S),w(S,I),c(e,V,s),c(e,M,s),w(M,j),ma&&ma.m(j,null),a[12](j),w(M,A),w(M,C),w(C,O),x(G,O,null),w(O,X),x(_,O,null),w(C,B),w(C,K),w(K,Y),w(Y,Q),w(Q,W),w(K,aa),w(K,ta),w(ta,na),w(na,ea),w(ta,sa),w(ta,oa),w(oa,la),ra=!0,ca||(ia=[i(S,"click",H),i(Q,"click",k(a[10])),i(na,"click",k(a[9]))],ca=!0)},p(a,[t]){(!ra||128&t&&D!==(D=a[7].path+"#?file=gist.md"))&&r(S,"href",D),a[2]?ma&&(ma.d(1),ma=null):ma?ma.p(a,t):(ma=N(a),ma.c(),ma.m(j,null));const n={};8&t&&(n.content=a[3]),!q&&2&t&&(q=!0,n.el=a[1],Z(()=>q=!1)),!U&&16&t&&(U=!0,n.onReset=a[4],Z(()=>U=!1)),!F&&32&t&&(F=!0,n.onZoomIn=a[5],Z(()=>F=!1)),!z&&64&t&&(z=!0,n.onZoomOut=a[6],Z(()=>z=!1)),G.$set(n);const e={};16&t&&(e.onReset=a[4]),32&t&&(e.onZoomIn=a[5]),64&t&&(e.onZoomOut=a[6]),_.$set(e)},i(a){ra||(b(G.$$.fragment,a),b(_.$$.fragment,a),ra=!0)},o(a){E(G.$$.fragment,a),E(_.$$.fragment,a),ra=!1},d(e){e&&l(t),e&&l(n),e&&l(V),e&&l(M),ma&&ma.d(),a[12](null),$(G),$(_),ca=!1,y(ia)}}}function F(a,t){const n=document.createElement("a");n.download=a,n.href=t,n.click()}function H(){"function"==typeof gtag&&gtag("event","click",{button:"newFeature"})}function z(a,t,n){let e,s,o,l,r,c,i,m="";const{page:u}=S();function d(){l&&n(3,m=l.getValue())}let f;return I(a,u,a=>n(7,e=a)),D(async()=>{f=G(a=>{l&&l.setValue(a),n(3,m=a)});const{default:a}=await import("./codemirror.4bd78a6d.js");n(2,l=a(s,{lineNumbers:!0,mode:"markdown",value:m})),l.on("change",O(d,500))}),V(()=>{n(2,l=null),f&&(f(),f=null)}),[s,o,l,m,r,c,i,e,u,function(){const a=o.outerHTML.replace(/<br>/g,"<br/>");F("markmap.svg","data:image/svg;utf8,"+encodeURIComponent(a))},function(){const a=C.transform(m),t=q.fillTemplate(a,{mathJax:!!o.querySelector(".MathJax"),prism:!!o.querySelector("pre[class*=language-]")});F("markmap.html","data:text/html;utf8,"+encodeURIComponent(t))},function(a){n(3,m=a.target.value)},function(a){T[a?"unshift":"push"](()=>{s=a,n(0,s)})},function(a){o=a,n(1,o)},function(a){r=a,n(4,r)},function(a){c=a,n(5,c)},function(a){i=a,n(6,i)}]}export default class extends a{constructor(a){super(),t(this,a,z,U,n,{})}}