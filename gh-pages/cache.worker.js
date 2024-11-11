const CACHE_NAME = "calendar-cache-v3.1";
var urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/manifest.json",
  "/images/desk-opaque.png",
  // Add other assets you want to cache
];

caches.keys().then((cacheNames) => {
  return Promise.all(
    cacheNames.map((cacheName) => {
      return caches.delete(cacheName);
    }),
  );
});

if (self.location.hostname !== "localhost") {
  console.log("Running on localhost, disabling caches");
  // Add any localhost-specific logic here

  // Install the service worker and cache all necessary assets
  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
      }),
    );
  });

  // Activate the service worker and remove old caches
  self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          }),
        );
      }),
    );
  });

  // Fetch assets from the cache or network
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          if (
            !response ||
            response.status !== 200 ||
            response.type !== "basic"
          ) {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return response;
        });
      }),
    );
  });
}
