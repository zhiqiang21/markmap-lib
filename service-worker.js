!function(){"use strict";const e=["client/client.13556206.js","client/markmap.8c1f6b61.js","client/index.f2048b27.js","client/about.2d498525.js","client/usage.253770c1.js","client/repl.e7eed291.js","client/codemirror.aea1b3f6.js","client/markdown.75cc4350.js","client/client.ee735975.js"].concat(["service-worker-index.html","donate/alipay.svg","donate/paypal.svg","donate/qr_alipay.png","donate/qr_wechat.png","donate/wechat.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1587488829702").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1587488829702"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587488829702").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const a=await t.match(e.request);if(a)return a;throw n}}))))})}();
