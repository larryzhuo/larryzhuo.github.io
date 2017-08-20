self.addEventListener('install', function(e){
    e.waitUntil(
        caches.open('the-magic-cache').then(function(cache){
            return cache.addAll([
                '/',
                '/css/style.css',
                '/lib/jquery/jquery-3.1.1.min.js',
                '/js/src/theme.js',
                '/js/src/bootstrap.js'
            ])
        })
    )
})

self.addEventListener('fetch', function(e){
    e.respondWith(
        caches.match(e.request).then(function(response){
            return response || fetch(e.request);
        })
    );
})