if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let t={};const l=e=>i(e,o),f={module:{uri:o},exports:t,require:l};s[o]=Promise.all(n.map((e=>f[e]||l(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-56b66503.css",revision:null},{url:"assets/index-7ec74b0b.js",revision:null},{url:"assets/index-7ec74b0b.js.map",revision:null},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"index.html",revision:"d7d9d23833125b7421aa806341553b19"},{url:"manifest.json",revision:"aaff7e7919bbfb83e1111c6b7090f027"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"manifest.json",revision:"aaff7e7919bbfb83e1111c6b7090f027"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
