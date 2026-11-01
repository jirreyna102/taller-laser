// Taller Láser · service worker (funciona sin conexión)
const CACHE='taller-laser-v9.1.0';
const FILES=["./", "index.html", "manifest.webmanifest", "fonts/archivo.css", "fonts/archivo-latin-800-normal.woff2", "fonts/archivo-latin-ext-800-normal.woff2", "fonts/archivo-latin-ext-400-normal.woff2", "fonts/archivo-latin-600-normal.woff2", "fonts/archivo-latin-ext-600-normal.woff2", "fonts/archivo-latin-400-normal.woff2", "vendor/imagetracer_v1.2.6.js", "vendor/xlsx.full.min.js", "vendor/opentype.min.js", "icons/icon-maskable-512.png", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>{if(hit)return hit;return fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(r,cp))}return res}).catch(()=>r.mode==='navigate'?caches.match('index.html'):Response.error())}))});
