let staticCacheName = 'sw-v1:'; // The cache's version.

if (navigator.serviceWorker) { // Use service worker in a safe progressive enhancing way.
    // When you register for a service worker, it returns a promise.
    navigator.serviceWorker.register('sw.js')
        // This promise fulfills with a service worker registration object.
        .then(function (reg) {
            //console.log("Service worker has been registered!!");
        })
        .catch(function (error) {
            //console.log("Couldn't register the service worker, here's the error: "+error);
        });
}

// Triggered when the user navigates to a page within our service worker scope.
// I also get a fetch event for every request triggered by the page.
self.addEventListener("fetch", function (event) {

    // .respondWith() takes a **response object** or a **promise that resolves with a response**.
    event.respondWith(
        // Try to find a request match in cache.
        caches.match(event.request) //This will return a promise for a matching response if one is found, or null otherwise.
        .then(function (cached) {
            // Fetch returns a promise that resolves to a response which we'll return to respondWith().
            let networked = fetch(event.request)
                .then(networkRequest)
                .catch(couldNotResolve);

            // Check whether the request was networked or cached.
            if (cached) { // This will be null if the request was not found in cache.
                // The request was cached.
                //console.log(staticCacheName+ "Fetch event has cached resource "+event.request.url);
                return cached;
            }
            if (networked) {
                // The request was networked.
                //console.log(staticCacheName+" Fetch event has networked resource "+event.request.url);
                return networked;
            }


            function networkRequest(response) {
                let networkResponse = response.clone(); // Save the response from the network.

                // Create or open a cache.
                caches.open(staticCacheName + ' resources')
                    .then(function (cache) {
                        // Add items to the cache using cache.put() by passing in the request and the response.
                        cache.put(event.request, networkResponse);
                    })
                    .then(function () {
                        //console.log(staticCacheName+" Resource is now stored in cache "+event.request.url);
                    });

                return response; // Return the networked response.
            }

            function couldNotResolve(error) {
                const body = "<h1>Oups!</h1><p>"+staticCacheName+" The fetch request has failed loading the resource "+event.request.url+" from both cache and network. Here's your error: "+error+"</p>";

                //We handle the request ourselves since we can't go to the network.
                return new Response(body, {
                    status: 503,
                    statusText: 'It appears you are not connected to the network... The service is unavailable.',
                    headers: new Headers({
                        'Content-Type': 'text/html'
                    })
                });
            }
        })
        // The request tottaly failed.
        .catch(function (error) {
            const body = "<h1>Oups!</h1><p>That tottaly failed! Here's your error: "+error+"</p>" ;
            return new Response(body, {
                status: 500,
                statusText: 'The request tottaly failed.',
                headers: new Headers({
                    'Content-Type': 'text/html'
                })
            });
        })
    );
});

// The browser won't let this new service worker take control of pages until its install phase is completed.
// I use it as an opportunity to get everything I need from the network and create a cache for them.
self.addEventListener("install", function (event) {
    const urlsToCache = [
        'index.html',
        'sureal.mp4',
        'favicon.ico',
        'The-Coreys-Logo.png',
        'html/Biography.html',
        'html/Discography.html',
        'html/Merch.html',
        'html/News.html',
        'html/Quiz.html',
        'data/liveNews.json',
        'data/quizQuestions.json',
        'Multimedia/social/bc.svg',
        'Multimedia/social/fb.svg',
        'Multimedia/social/sc.svg',
        'Multimedia/social/yt.svg',
        'Multimedia/sound/10th_Anniversary.mp3',
        'Multimedia/sound/off.svg',
        'Multimedia/sound/on.svg',
    ];

    // Signal the progress of the install
    event.waitUntil(
        /* We pass a promise to waitUntill(). If and when the promise resolves, the browser knows the install 
        is complete. If the promise rejects, it knows the install failed, and this service worker should be discarded. */
        caches.open(staticCacheName + ' resources')
        .then(function (cache) {
            return cache.addAll(urlsToCache);
        })
        .then(function () {
            //console.log(staticCacheName+" Service worker has been installed successfully.");
            //console.log(staticCacheName+" Resources have been cached successfully.");
        })
        .catch(function(error){
            //console.log(staticCacheName+" Service worker installation failed. Here's your error: "+error);
        })
    );
});


self.addEventListener("activate", function (event) {
    //console.log(staticCacheName+" Activating service worker...");

    event.waitUntil(
        // We're going to get all of the cache names that exist,
        caches.keys()
        .then(function (cacheNames) {
            // we're going to wrap all of that in promise.all()
            // so we wait on the completion of all those promises,
            return Promise.all(
                cacheNames
                // we're going to filter that list of cache names,
                .filter(function (cacheName) {
                    // (We're only interested in the cache names that DON'T begin with the static cache name.
                    // In this case we don't delete any caches, since we only have one cache version with the 
                    // static cache name.)
                    return !cacheName.startsWith(staticCacheName); 
                })
                // and we're going to map those names of caches that
                // we don't need anymore to promises returned by caches.delete() .
                .map(function (cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
        .then(function () {
            //console.log(staticCacheName+" Service worker has been activated.");
        })
    );
});