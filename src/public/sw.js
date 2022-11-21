importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js')

const {
  cacheableResponse: { CacheableResponsePlugin },
  expiration: { ExpirationPlugin },
  routing: { registerRoute },
  strategies: { CacheFirst, StaleWhileRevalidate },
  precaching: { precacheAndRoute }
} = workbox

registerRoute(
  ({ request }) => request.mode === 'navigate',
  new StaleWhileRevalidate({
    cacheName: 'resto-pages',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
    ],
  }),
)

registerRoute(
  ({ request }) => request.destination === 'font' || request.destination === 'image',
  new CacheFirst({
    cacheName: 'resto-assets',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 2,
      }),
    ],
  }),
)

registerRoute(
  ({ request }) => request.destination === 'stylesheet' || request.destination === 'script',
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