"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/reactme/index.html","80b5af7f1b9c5761487e2ddbf325840a"],["/reactme/static/css/main.9a0fe4f1.css","3473922d6aed4c20bb69846d6027cacf"],["/reactme/static/js/main.c7b2d804.js","3c3689ec72b5e25c6c3538be9e6f94c1"],["/reactme/static/media/Resume.44f1cd3d.pdf","44f1cd3daf578b9340b27dbafdecf3ce"],["/reactme/static/media/blue_balcony_by_kirokaze-d9h03vb.5fee8e4a.gif","5fee8e4a9fea271529cfd8828dd990d5"],["/reactme/static/media/coffee_in_rain_by_kirokaze-d98qb8z.8db746ea.gif","8db746ea0f28bdd22eae8b3ee10ac16a"],["/reactme/static/media/factory_5_by_kirokaze-d9dnodi.16f08611.gif","16f08611c410775d241b260b63f3f994"],["/reactme/static/media/kk.8128e41d.gif","8128e41d28e1b2604246bf78d5792ae9"],["/reactme/static/media/logo.9caa7a4f.svg","9caa7a4f060745e5444e4f4db1b36b0b"],["/reactme/static/media/shooting_stars2_by_kirokaze-d9ikcm1.2ab7ce8b.gif","2ab7ce8bbbe0fb90f3fa11a27caf329c"],["/reactme/static/media/video.d476c350.mp4","d476c35017af51253226512b7e0af0a2"],["/reactme/static/media/waiting_the_snow_by_kirokaze-datjp1z.6d78711d.gif","6d78711d7c8438405ee8a5a50114f9ac"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/reactme/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});