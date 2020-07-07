// 主要就是缓存内容
const CACHE_NAME = 'cache_v1'
self.addEventListener('install', async event => {
  console.log('intall')
  // 开启一个cache，得到一个cache对象
  const cache = await caches.open(CACHE_NAME)
  // cache对象就可以存储资源
  await cache.addAll([
    '/',
    '/icons/icon.png',
    '/manifest.json',
    '/index.css',
    '/worker.js',
    '/data.json'
  ])
  await self.skipWaiting()
})

// 主要清除旧的缓存
self.addEventListener('activate', async event => {
  console.log('activate')

  const keys = await caches.keys()
  keys.forEach(key => {
    if (key !== CACHE_NAME) {
      caches.delete(key)
    }
  })

  await self.clients.claim()
})

// activated when request
self.addEventListener('fetch', event => {
  console.log('fetch')
  const req = event.request
  // back response to brower
  event.respondWith(networkFirst(req))
})

async function networkFirst(req) {
  try {
    // get from network
    let fresh = await fetch(req)
    return fresh
  } catch (e) {
    // get from cache 
    const cache = await caches.open(CACHE_NAME)
    const cached = await cache.match(req)
    return cached
  }
}
function cacheFirst() {

}