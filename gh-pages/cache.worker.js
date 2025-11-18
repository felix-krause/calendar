const CACHE_NAME = "calendar-cache-v3.6";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/manifest.json",
  "/images/desk-opaque.png",
];

// Fix the hostname condition
if (self.location.hostname === "localhost") {
  console.log("Running on localhost, disabling caches");
} else {
  // Install handler
  self.addEventListener("install", (event) => {
    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then((cache) => {
          console.log("Caching assets...");
          return cache.addAll(urlsToCache);
        })
        .catch((error) => console.error("Cache installation failed:", error)),
    );
  });

  // Activate handler
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

  // Add fetch handler
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        }
        console.log("Fetching:", event.request.url);
        return fetch(event.request)
          .then((response) => {
            // Cache successful responses
            if (response && response.status === 200) {
              const responseToCache = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, responseToCache);
              });
            }
            return response;
          })
          .catch((error) => console.error("Fetch failed:", error));
      }),
    );
  });
}
