// ===================================
// SERVICE WORKER - ADVANCED JAVA CODE VAULT
// Version: Dynamic from version.json
// ===================================

let CACHE_NAME = "website-of-codes-v1-0-0";
let CURRENT_VERSION = "1.0.0";

const ASSETS = [
  "index.html",
  "style.css",
  "script.js",
  "manifest.json",
  "version.json",
  "update-logs.json",
  "assets/favicon.png",
  "assets/Caution.png",
  "assets/experiments/Exp1/Exp1.txt",
  "assets/experiments/Exp2/Exp2.txt",
  "assets/experiments/Exp3/Exp3.txt",
  "assets/experiments/Exp4A/Exp4A.txt",
  "assets/experiments/Exp4A/SQL Script4A.txt",
  "assets/experiments/Exp4B/Connection_java_file.txt",
  "assets/experiments/Exp4B/GFG_java_file.txt",
  "assets/experiments/Exp4B/SQL Script4B.txt",
  "assets/experiments/Exp5A/Exp5A.txt",
  "assets/experiments/Exp5B/Exp5B.txt",
  "assets/experiments/Exp6/InetDemo_java.txt",
  "assets/experiments/Exp7/Exp7.txt",
  "assets/experiments/Exp7/SQL Script 7.txt",
  "assets/experiments/Exp8/Steps.txt",
  "assets/experiments/Exp8/1.Defining the Remote Interface/Hello_java.txt",
  "assets/experiments/Exp8/2.Developing the Implementation Class (Remote Object)/ImplExample_java.txt",
  "assets/experiments/Exp8/3.Developing the Server Program/Server_java.txt",
  "assets/experiments/Exp8/4.Developing the Client Program/Client_java.txt"
];

// Fetch version from version.json
async function getVersionInfo() {
  try {
    const response = await fetch(new Request('version.json', { cache: 'no-store' }));
    const versionData = await response.json();
    return versionData;
  } catch (error) {
    console.error('Failed to fetch version info:', error);
    return { current: "1.0.0" };
  }
}

// Generate cache name based on version
function generateCacheName(version) {
  const cleanVersion = version.replace(/\./g, '-');
  return `website-of-codes-v${cleanVersion}`;
}

self.addEventListener("install", (event) => {
  console.log("🔧 Service Worker installing...");
  
  event.waitUntil(
    (async () => {
      try {
        // Create cache and add all assets
        const cache = await caches.open(CACHE_NAME);
        console.log(`📦 Opening cache: ${CACHE_NAME}`);
        
        // Cache all assets
        const assetsToCache = ASSETS.map(asset => {
          // Ensure proper URL format
          return new Request(asset, { cache: 'reload' });
        });
        
        // Add all assets to cache
        const responses = await Promise.allSettled(
          assetsToCache.map(request => 
            fetch(request).then(response => {
              if (response.ok) {
                cache.put(request, response.clone());
                console.log(`✅ Cached: ${request.url}`);
              } else {
                console.warn(`⚠️ Failed to fetch: ${request.url} (${response.status})`);
              }
              return response;
            }).catch(error => {
              console.warn(`❌ Could not cache: ${request.url}`, error.message);
            })
          )
        );
        
        console.log(`✅ Installation complete. ${ASSETS.length} assets queued for caching.`);
      } catch (error) {
        console.error('❌ Installation error:', error);
      }
    })()
  );
  
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    (async () => {
      try {
        // Try network first for dynamic content
        if (request.url.includes('version.json') || request.url.includes('update-logs.json')) {
          try {
            const networkResponse = await fetch(request);
            if (networkResponse.ok) {
              // Cache successful response
              const cache = await caches.open(CACHE_NAME);
              cache.put(request, networkResponse.clone());
              console.log(`🌐 Network (version): ${url.pathname}`);
              return networkResponse;
            }
          } catch (error) {
            console.log(`📦 Cache (version fallback): ${url.pathname}`);
            const cached = await caches.match(request);
            return cached || new Response('Offline - File not cached', { status: 503 });
          }
        }
        
        // For other files: cache first, network fallback
        const cached = await caches.match(request);
        if (cached) {
          console.log(`📦 Cache hit: ${url.pathname}`);
          return cached;
        }
        
        // Not in cache, try network
        const networkResponse = await fetch(request);
        if (networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
          console.log(`🌐 Network + cached: ${url.pathname}`);
          return networkResponse;
        }
        
        return networkResponse;
      } catch (error) {
        console.error(`❌ Fetch error for ${url.pathname}:`, error);
        
        // Try to return cached version as fallback
        const cached = await caches.match(request);
        if (cached) {
          console.log(`📦 Cache fallback: ${url.pathname}`);
          return cached;
        }
        
        // Return offline page
        return new Response('Offline - File not available', { 
          status: 503,
          statusText: 'Service Unavailable'
        });
      }
    })()
  );
});

self.addEventListener("activate", (event) => {
  console.log("🚀 Service Worker activating...");
  
  event.waitUntil(
    (async () => {
      try {
        // Get version info for new cache name
        const versionData = await getVersionInfo().catch(() => ({ current: "1.0.0" }));
        const newCacheName = generateCacheName(versionData.current);
        
        // Get all cache names
        const cacheNames = await caches.keys();
        console.log(`Found caches: ${cacheNames.join(', ')}`);
        
        // Delete old caches
        await Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== newCacheName && cacheName.startsWith('website-of-codes')) {
              console.log(`🗑️ Deleting old cache: ${cacheName}`);
              return caches.delete(cacheName);
            }
          })
        );
        
        console.log(`✅ Activation complete. Using cache: ${newCacheName}`);
      } catch (error) {
        console.error('❌ Activation error:', error);
      }
    })()
  );
  
  self.clients.claim();
});

// Message handler for version checking
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CHECK_VERSION') {
    getVersionInfo().then((versionData) => {
      event.ports[0].postMessage({
        type: 'VERSION_INFO',
        current: versionData.current,
        updates: versionData.updates
      });
    }).catch(error => {
      console.error('Error checking version:', error);
      event.ports[0].postMessage({
        type: 'VERSION_INFO',
        current: "1.0.0",
        error: true
      });
    });
  }
});