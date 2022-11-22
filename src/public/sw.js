importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')

const MAX_AGE = 60 * 60 * 24 * 2

const {
  cacheableResponse: { CacheableResponsePlugin },
  expiration: { ExpirationPlugin },
  routing: { registerRoute },
  strategies: { CacheFirst, StaleWhileRevalidate, NetworkFirst },
  precaching: { precacheAndRoute }
} = workbox

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new NetworkFirst({
    cacheName: 'resto-pages',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
)

registerRoute(
  ({ request }) => ['image', 'font'].includes(request.destination),
  new CacheFirst({
    cacheName: 'resto-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: MAX_AGE,
      }),
    ],
  }),
)

registerRoute(
  ({ request }) => ['script', 'style'].includes(request.destination),
  new StaleWhileRevalidate({
    cacheName: 'resto-stylescript',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
)

precacheAndRoute([{"revision":"06c7ba04c2d049d88940db83cd211cc4","url":"/css/style.css"}])