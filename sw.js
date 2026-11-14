// Cache statico per usare Restart Casa anche senza rete dopo la prima apertura.
const SCOPE = self.registration.scope;
const CACHE_PREFIX = 'restart-casa:' + SCOPE + ':';
const CACHE = CACHE_PREFIX + 'v8';
const FILES = [
  new URL('./', SCOPE).href,
  new URL('./index.html', SCOPE).href,
  new URL('./manifest.webmanifest', SCOPE).href,
  new URL('./icons/icon-192.png', SCOPE).href,
  new URL('./icons/icon-512.png', SCOPE).href,
  ...[
    'squat-1', 'squat-2', 'ponte-glutei-1', 'ponte-glutei-2', 'dead-bug-1', 'dead-bug-2',
    'mini-squat-1', 'polpacci-1', 'polpacci-2', 'bird-dog-1', 'pugni-avanti-1', 'camminata-1',
    'marcia-1', 'passo-indietro-1', 'passi-laterali-1', 'push-up-muro-1', 'push-up-muro-2',
    'scapole-1', 'hip-hinge-1', 'affondo-corto-1', 'affondo-corto-2',
    'reverse-snow-angel-1', 'reverse-snow-angel-2'
  ].map(name => new URL(`./images/${name}.webp`, SCOPE).href)
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const u = new URL(event.request.url);
  if (u.origin !== self.location.origin || !u.href.startsWith(SCOPE)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match(new URL('./index.html', SCOPE).href)));
  } else {
    event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
  }
});
