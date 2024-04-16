// service-worker.js

self.addEventListener('install', event => {
    // Логика установки сервисного работника
    event.waitUntil(
      caches.open('my-cache').then(cache => {
        return cache.addAll([
          '/',
          '/clubs',
          '/contact',
        ]);
      })
    );
  });
  
  self.addEventListener('activate', event => {
    // Логика активации сервисного работника
  });
  
  self.addEventListener('fetch', event => {
    // Логика перехвата и обработки сетевых запросов
  });
  