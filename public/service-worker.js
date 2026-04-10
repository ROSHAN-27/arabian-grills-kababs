const CACHE_NAME = "arabian-grills-pos-v1";
const STATIC_CACHE = "arabian-grills-static-v1";
const DYNAMIC_CACHE = "arabian-grills-dynamic-v1";

// Files to cache immediately
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/service-worker.js",
  "/icons/icon-192.png",
  "/icons/icon-512.png"
];

// Install event - cache static assets
self.addEventListener("install", event => {
  console.log("Service Worker installing");
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log("Caching static assets");
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", event => {
  console.log("Service Worker activating");
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log("Deleting old cache:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener("fetch", event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version if found
        if (response) {
          return response;
        }

        // Otherwise fetch from network and cache
        return fetch(event.request)
          .then(networkResponse => {
            // Don't cache non-successful responses
            if (!networkResponse.ok) {
              return networkResponse;
            }

            // Clone the response for caching
            const responseClone = networkResponse.clone();

            // Cache the response
            caches.open(DYNAMIC_CACHE)
              .then(cache => {
                cache.put(event.request, responseClone);
              });

            return networkResponse;
          })
          .catch(() => {
            // Return offline fallback if available
            if (event.request.destination === "document") {
              return caches.match("/index.html");
            }
          });
      })
  );
});