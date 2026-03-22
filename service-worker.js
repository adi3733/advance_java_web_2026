// ===================================
// SERVICE WORKER - ADVANCED JAVA CODE VAULT
// Version: Dynamic from version.json
// ===================================

let CACHE_NAME = "website-of-codes-v1";
let CURRENT_VERSION = "1.0.0";

const ASSETS = [
  "/index.html",
  "/style.css",
  "/script.js",
  "/manifest.json",
  "/version.json",
  "/update-logs.json",
  "/assets/favicon.png",
  "/assets/Caution.png",
  "/assets/experiments/Exp1/Exp1.txt",
  "/assets/experiments/Exp2/Exp2.txt",
  "/assets/experiments/Exp3/Exp3.txt",
  "/assets/experiments/Exp4A/Exp4A.txt",
  "/assets/experiments/Exp4A/SQL Script4A.txt",
  "/assets/experiments/Exp4B/Connection_java_file.txt",
  "/assets/experiments/Exp4B/GFG_java_file.txt",
  "/assets/experiments/Exp4B/SQL Script4B.txt",
  "/assets/experiments/Exp5A/Exp5A.txt",
  "/assets/experiments/Exp5B/Exp5B.txt",
  "/assets/experiments/Exp6/InetDemo_java.txt",
  "/assets/experiments/Exp7/Exp7.txt",
  "/assets/experiments/Exp7/SQL Script 7.txt",
  "/assets/experiments/Exp8/Steps.txt",
  "/assets/experiments/Exp8/1.Defining the Remote Interface/Hello_java.txt",
  "/assets/experiments/Exp8/2.Developing the Implementation Class (Remote Object)/ImplExample_java.txt",
  "/assets/experiments/Exp8/3.Developing the Server Program/Server_java.txt",
  "/assets/experiments/Exp8/4.Developing the Client Program/Client_java.txt"
];

// Fetch version from version.json
async function getVersionInfo() {
  try {
    const response = await fetch('/version.json');
    const versionData = await response.json();
    return versionData;
  } catch (error) {
    console.error('Failed to fetch version info:', error);
    return { current: "1.0.0" };
  }
}

// Generate cache name based on version
function generateCacheName(version) {
  return `website-of-codes-v${version.replace(/\./g, '-')}`;
}

self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    getVersionInfo().then((versionData) => {
      CURRENT_VERSION = versionData.current;
      CACHE_NAME = generateCacheName(CURRENT_VERSION);
      console.log(`Using cache: ${CACHE_NAME}`);
      
      return caches.open(CACHE_NAME).then((cache) => {
        console.log(`✅ Caching all assets for version ${CURRENT_VERSION}`);
        return cache.addAll(ASSETS);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  // Cache first, fallback to network
  event.respondWith(
    caches.match(event.request).then((response) => {
      // If cached, return it
      if (response) {
        return response;
      }
      
      // Otherwise fetch from network and cache it
      return fetch(event.request).then((response) => {
        // Only cache successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }
        
        // Clone the response
        const responseToCache = response.clone();
        
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        
        return response;
      }).catch(() => {
        // Return cached version if network fails
        return caches.match(event.request);
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating...");
  event.waitUntil(
    getVersionInfo().then((versionData) => {
      const newCacheName = generateCacheName(versionData.current);
      
      return caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cache) => {
            // Delete all caches except the current version
            if (cache !== newCacheName && cache.startsWith('website-of-codes')) {
              console.log(`🗑️ Deleting old cache: ${cache}`);
              return caches.delete(cache);
            }
          })
        );
      });
    })
  );
  self.clients.claim();
});

// Message handler for version checking
self.addEventListener('message', (event) => {
  if (event.data.type === 'CHECK_VERSION') {
    getVersionInfo().then((versionData) => {
      event.ports[0].postMessage({
        type: 'VERSION_INFO',
        current: versionData.current,
        updates: versionData.updates
      });
    });
  }
});