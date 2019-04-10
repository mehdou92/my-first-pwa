module.exports = {
  "globDirectory": "./",
  "importWorkboxFrom": "local",
  "skipWaiting": true,
  "globIgnores": [
      "node_modules/**/*",
      "workbox-4.2.0",
      "package*",
      "workbox-config.js",
      "images/**/*"
  ],
    "runtimeCaching": [
        {
            "urlPattern": /\.(?:png|gif|jpg|jpeg|svg)$/,
            "handler": "CacheFirst",
            "options": {
                "cacheName": "images",
            }
        }
    ],
  "globPatterns": [
    "**/*.{json,jpg,html,js,css}"
  ],
  "swDest": "service-worker.js"
};