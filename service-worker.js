self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('neresia-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './logo-192.png',
        './logo-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
