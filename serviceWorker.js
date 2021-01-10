const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/Arcade.jpg",
  "/images/Bag.jpg",
  "/images/Ben.jpg",
  "/images/Cam.jpg",
  "/images/Dad.jpg",
  "/images/Icecream.jpg",
  "/images/Man.jpg",
  "/images/Skip.jpg",
  "/images/View.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })