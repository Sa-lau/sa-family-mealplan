/* Elsapciz - offline cache
   data/ 內嘅食譜庫同身體紀錄用 network-first：WorkBuddy 一更新，用戶 refresh 就見到。
   其餘靜態檔 cache-first；改 CACHE 版本號會令舊快取自動清走。 */
const CACHE = 'elsapciz-v3';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon.svg', './data/recipes.js', './data/body.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).catch(() => {}));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== self.location.origin) return;
  const isData = url.pathname.indexOf('/data/') >= 0;
  if (isData) {
    e.respondWith(
      fetch(e.request).then(r => {
        const copy = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return r;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
        const copy = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return resp;
      }))
    );
  }
});
