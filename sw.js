const ALICE_RUNTIME_CACHE = 'alice-runtime-20260919-mobile-v2';

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== ALICE_RUNTIME_CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.clients.matchAll({ includeUncontrolled: true }))
      .then(clients => clients.forEach(client => client.postMessage('sw.update')))
  );
});

function injectAliceMobile(response) {
  return response.text().then(html => {
    if (!html.includes('</body>') || html.includes('/alice-mobile.js')) return response;
    const patched = html.replace('</body>', '<script src="/alice-mobile.js"></script></body>');
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.set('content-type', 'text/html; charset=utf-8');
    return new Response(patched, { status: response.status, statusText: response.statusText, headers });
  });
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== location.origin) return;

  const isAlicePage = url.pathname === '/alice/' || url.pathname === '/alice/index.html';
  const networkRequest = url.pathname === '/sw-register.js' || url.pathname === '/alice-mobile.js'
    ? new Request(request, { cache: 'no-store' })
    : request;

  event.respondWith(
    fetch(networkRequest)
      .then(response => {
        if (!response || !response.ok) return response;
        if (isAlicePage) {
          return injectAliceMobile(response).then(patched => {
            const copy = patched.clone();
            caches.open(ALICE_RUNTIME_CACHE).then(cache => cache.put(request, copy));
            return patched;
          });
        }
        const copy = response.clone();
        caches.open(ALICE_RUNTIME_CACHE).then(cache => cache.put(request, copy));
        return response;
      })
      .catch(() => caches.match(request, { ignoreSearch: true })
        .then(cached => cached || caches.match(url.pathname, { ignoreSearch: true })))
  );
});
