/// <reference lib="webworker" />

import { createHandlerBoundToURL, precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { ExpirationPlugin } from 'workbox-expiration';
import * as core from 'workbox-core';
import * as strategies from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { StaleWhileRevalidate } from 'workbox-strategies';

declare let self: ServiceWorkerGlobalScope;

//Todo fix precache name doesn't seem to take in consideration for precaching manifest
core.setCacheNameDetails({
    prefix: 'movie-mania',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time',
});

//skip waiting to update instantly, can create some issues if ressources are uniquely versioned
core.skipWaiting();
core.clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

// Set up App Shell-style routing, so that all navigation requests
// are fulfilled with your index.html shell. Learn more at
// https://developers.google.com/web/fundamentals/architecture/app-shell
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
    // Return false to exempt requests from being fulfilled by index.html.
    ({ request, url }: { request: Request; url: URL }) => {
        // If this isn't a navigation, skip.
        if (request.mode !== 'navigate') {
            return false;
        }

        // If this is a URL that starts with /_, skip.
        if (url.pathname.startsWith('/_')) {
            return false;
        }

        // If this looks like a URL for a resource, because it contains
        // a file extension, skip.
        if (url.pathname.match(fileExtensionRegexp)) {
            return false;
        }

        // Return true to signal that we want to use the handler.
        return true;
    },
    createHandlerBoundToURL('/index.html'),
);

// An example runtime caching route for requests that aren't handled by the
// precache, in this case same-origin .png requests like those from in public/
registerRoute(
    // Add in any other file extensions or routing criteria as needed.
    ({ url }) => url.origin === self.location.origin && url.pathname.endsWith('.png'),
    // Customize this strategy as needed, e.g., by changing to CacheFirst.
    new StaleWhileRevalidate({
        cacheName: 'images',
        plugins: [
            // Ensure that once this runtime cache reaches a maximum size the
            // least-recently used images are removed.
            new ExpirationPlugin({
                maxEntries: 50,
            }),
        ],
    }),
);

//Can use cache for images
registerRoute(
    /https:\/\/r.r10s.jp\/.*.gif/,
    new strategies.CacheFirst({
        cacheName: `${core.cacheNames.prefix}-image-cache-promotion-${core.cacheNames.suffix}`,
        plugins: [
            new CacheableResponsePlugin({ statuses: [0, 200] }), //for opaque response
            new ExpirationPlugin({
                // cache a week
                maxAgeSeconds: 7 * 24 * 60 * 60,
                maxEntries: 6,
            }),
        ],
    }),
);

// This allows the web app to trigger skipWaiting via
// registration.waiting.postMessage({type: 'SKIP_WAITING'})
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Push
self.addEventListener('push', event => {
    if (event.data) {
        const title = 'Get Started With Workbox';
        const options = {
            body: event.data.text(),
        };
        event.waitUntil(self.registration.showNotification(title, options));
    }
});

self.addEventListener('push', function (event) {
    let data = { title: 'Title!', content: 'Notification content!' };

    if (event.data) {
        data = JSON.parse(event.data.text());
    }

    const options = {
        body: data.content,
    };

    event.waitUntil(self.registration.showNotification(data.title, options));
});
