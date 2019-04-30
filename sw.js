
self.addEventListener("install", function (event) {
    console.warn("service instaled");
    event.waitUntil(
        caches.open("static").then(function (cache) {
            cache.addAll([
                "/",
                "/index.html",
                "/main.css",
                "/manifest.json",
                "/index.js",
                "/team.png"
            ])
        })
    )

})


self.addEventListener("activate", function () {
    console.warn("SW Activated");
})

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (res) {
            if (res) {
                return res;
            } else {
                return fetch(event.request);
            }
        })
    )
})
