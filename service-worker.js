// ===================================
// SERVICE WORKER - ADVANCED JAVA CODE VAULT
// Version: 1.0.6
// ===================================

const CACHE_VERSION = 'java-vault-v1.0.6';
const RUNTIME_CACHE = 'java-vault-runtime';

// Assets to cache immediately on install
const PRECACHE_ASSETS = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    // Prism.js CDN files (cached for offline use)
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-java.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/toolbar/prism-toolbar.min.js',
    // Mammoth.js for DOCX Preview
    'https://cdn.jsdelivr.net/npm/mammoth@1.6.0/mammoth.browser.min.js',
    // Experiment files
    '/assets/experiments/Exp1/Exp1.txt',
    '/assets/experiments/Exp2/Exp2.txt',
    '/assets/experiments/Exp3/Exp3.txt',
    '/assets/experiments/Exp4A/Exp4A.txt',
    '/assets/experiments/Exp4B/Connection_java_file.txt',
    '/assets/experiments/Exp4B/GFG_java_file.txt',
    '/assets/experiments/Exp5A/Exp5A.txt',
    '/assets/experiments/Exp5B/Exp5B.txt',
    '/assets/experiments/Exp6/InetDemo_java.txt',
    '/assets/experiments/Exp7/Exp7.txt',
    '/assets/experiments/Exp8/1.Defining the Remote Interface/Hello_java.txt',
    '/assets/experiments/Exp8/2.Developing the Implementation Class (Remote Object)/ImplExample_java.txt',
    '/assets/experiments/Exp8/3.Developing the Server Program/Server_java.txt',
    '/assets/experiments/Exp8/4.Developing the Client Program/Client_java.txt',
    // PDF Manuals (lazy cached on first access)
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 1.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 2.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 3.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 4.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 5.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment no 6.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 7.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 8.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 9.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/Experiment No 10.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/title pages_adv java.pdf',
    '/assets/PR_MANUAL/PR_MANUAL/ALL practicals for exam.pdf',
    // Output files
    '/assets/PR_MANUAL/Output/Java_1.pdf',
    '/assets/PR_MANUAL/Output/Java_2.pdf',
    '/assets/PR_MANUAL/Output/Java_3.pdf',
    '/assets/PR_MANUAL/Output/Java_4.pdf',
    '/assets/PR_MANUAL/Output/Java_5.pdf',
    '/assets/PR_MANUAL/Output/Java_6.pdf',
    '/assets/PR_MANUAL/Output/Java_7.pdf',
    '/assets/PR_MANUAL/Output/Java_8.pdf',
    '/assets/PR_MANUAL/Output/JAVA_9_CODE.docx'
];

// ===================================
// INSTALL EVENT - Precache assets
// ===================================
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing...', CACHE_VERSION);
    
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then((cache) => {
                console.log('[Service Worker] Precaching app shell and content');
                return cache.addAll(PRECACHE_ASSETS);
            })
            .then(() => {
                console.log('[Service Worker] Skip waiting');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[Service Worker] Precaching failed:', error);
            })
    );
});

// ===================================
// ACTIVATE EVENT - Clean old caches
// ===================================
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating...', CACHE_VERSION);
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== CACHE_VERSION && cacheName !== RUNTIME_CACHE) {
                            console.log('[Service Worker] Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('[Service Worker] Claiming clients');
                return self.clients.claim();
            })
    );
});

// ===================================
// FETCH EVENT - Serve from cache with network fallback
// ===================================
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip Chrome extensions and dev server
    if (url.protocol === 'chrome-extension:' || url.hostname === 'localhost') {
        return;
    }
    
    // Strategy 1: Cache First (for static assets)
    if (isCacheableAsset(url)) {
        event.respondWith(cacheFirst(request));
        return;
    }
    
    // Strategy 2: Network First (for HTML and dynamic content)
    if (isHTMLRequest(request)) {
        event.respondWith(networkFirst(request));
        return;
    }
    
    // Strategy 3: Stale While Revalidate (for CDN resources)
    if (isCDNResource(url)) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }
    
    // Default: Network with cache fallback
    event.respondWith(networkWithCacheFallback(request));
});

// ===================================
// CACHING STRATEGIES
// ===================================

// Cache First Strategy - Best for static assets
async function cacheFirst(request) {
    const cache = await caches.open(CACHE_VERSION);
    const cached = await cache.match(request);
    
    if (cached) {
        console.log('[Service Worker] Serving from cache:', request.url);
        return cached;
    }
    
    try {
        const response = await fetch(request);
        
        if (response && response.status === 200) {
            cache.put(request, response.clone());
        }
        
        return response;
    } catch (error) {
        console.error('[Service Worker] Fetch failed:', error);
        return new Response('Offline - Content not available', {
            status: 503,
            statusText: 'Service Unavailable'
        });
    }
}

// Network First Strategy - Best for HTML
async function networkFirst(request) {
    const cache = await caches.open(RUNTIME_CACHE);
    
    try {
        const response = await fetch(request);
        
        if (response && response.status === 200) {
            cache.put(request, response.clone());
        }
        
        return response;
    } catch (error) {
        console.log('[Service Worker] Network failed, serving from cache:', request.url);
        const cached = await cache.match(request);
        
        if (cached) {
            return cached;
        }
        
        // Return offline page
        return new Response('<!DOCTYPE html><html><head><title>Offline</title></head><body><h1>You are offline</h1><p>Please check your internet connection.</p></body></html>', {
            headers: { 'Content-Type': 'text/html' }
        });
    }
}

// Stale While Revalidate - Best for CDN resources
async function staleWhileRevalidate(request) {
    const cache = await caches.open(CACHE_VERSION);
    const cached = await cache.match(request);
    
    const fetchPromise = fetch(request).then((response) => {
        if (response && response.status === 200) {
            cache.put(request, response.clone());
        }
        return response;
    }).catch(() => cached);
    
    return cached || fetchPromise;
}

// Network with Cache Fallback
async function networkWithCacheFallback(request) {
    try {
        const response = await fetch(request);
        
        if (response && response.status === 200) {
            const cache = await caches.open(RUNTIME_CACHE);
            cache.put(request, response.clone());
        }
        
        return response;
    } catch (error) {
        const cache = await caches.open(CACHE_VERSION);
        const cached = await cache.match(request);
        
        if (cached) {
            return cached;
        }
        
        throw error;
    }
}

// ===================================
// HELPER FUNCTIONS
// ===================================

function isCacheableAsset(url) {
    const extensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.woff', '.woff2', '.ttf', '.txt'];
    return extensions.some(ext => url.pathname.endsWith(ext));
}

function isHTMLRequest(request) {
    return request.headers.get('Accept')?.includes('text/html');
}

function isCDNResource(url) {
    return url.hostname.includes('cdnjs.cloudflare.com') || 
           url.hostname.includes('cdn.jsdelivr.net') ||
           url.hostname.includes('unpkg.com');
}

// ===================================
// MESSAGE HANDLER - For manual cache updates
// ===================================
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('[Service Worker] Received SKIP_WAITING message');
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        console.log('[Service Worker] Clearing all caches');
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
            })
        );
    }
});

// ===================================
// BACKGROUND SYNC (Optional Enhancement)
// ===================================
self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-experiments') {
        console.log('[Service Worker] Background sync triggered');
        event.waitUntil(syncExperiments());
    }
});

async function syncExperiments() {
    // Placeholder for background sync logic
    console.log('[Service Worker] Syncing experiments...');
}

// ===================================
// PUSH NOTIFICATIONS (Optional Enhancement)
// ===================================
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Advanced Java Code Vault';
    const options = {
        body: data.body || 'New Java experiments available!',
        icon: 'https://img.icons8.com/color/192/java-coffee-cup-logo--v1.png',
        badge: 'https://img.icons8.com/color/96/java-coffee-cup-logo--v1.png',
        vibrate: [200, 100, 200],
        data: {
            url: data.url || '/'
        }
    };
    
    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(event.notification.data.url || '/')
    );
});

// ===================================
// CACHE SIZE MANAGEMENT
// ===================================
async function trimCache(cacheName, maxItems) {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    
    if (keys.length > maxItems) {
        await cache.delete(keys[0]);
        trimCache(cacheName, maxItems);
    }
}

// Limit runtime cache size to 50 items
self.addEventListener('activate', (event) => {
    event.waitUntil(trimCache(RUNTIME_CACHE, 50));
});

console.log('[Service Worker] Loaded successfully -', CACHE_VERSION);