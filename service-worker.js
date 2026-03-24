<<<<<<< HEAD
const CACHE_NAME = "aditzak-pwa-v1";

const archivosAguardar = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(archivosAguardar);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      return respuesta || fetch(event.request);
    })
  );
=======
const CACHE_NAME = "aditzak-pwa-v1";

const archivosAguardar = [
  "./",
  "./index.html",
  "./manifest.json",
  "./service-worker.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(archivosAguardar);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((respuesta) => {
      return respuesta || fetch(event.request);
    })
  );
>>>>>>> fe251ee045c6b736e0661e0dd8b50b214c6f956d
});