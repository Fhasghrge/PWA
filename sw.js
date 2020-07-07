self.addEventListener('install', event => {
  console.log('intall')
  // 跳过等待，直接激活
  // 异步操作、防止过快 
  event.waitUntil(self.skipWaiting())
  
})

self.addEventListener('activate', event => {
  console.log('activate')
  // 表示激活后立即获取控制权
  event.waitUntil(self.clients.claim())
})

self.addEventListener('fetch', event => {
  console.log('fetch')

  
})