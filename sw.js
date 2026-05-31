const CACHE_NAME = 'rhn-capital-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './RHN LOGO.jpg',
  './manifest.json'
];

// Install Service Worker dan Cache File
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Ambil File dari Cache Kalau Offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Balikin cache kalau ada, kalau gak ada ambil dari internet
        return response || fetch(event.request);
      })
  );
});
