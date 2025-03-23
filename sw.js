/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","026e47cd3a567074e41a782b723904a0"],["/archives/2024/06/index.html","5977c44d7cf199a92d09229f88bf550c"],["/archives/2024/07/index.html","285f4817ae750dc58eeb57437434f853"],["/archives/2024/07/page/2/index.html","403e861165c7faa3a01aa18d9e1de731"],["/archives/2024/index.html","afee2cc58e1734fe1a984f14599d5da0"],["/archives/2024/page/2/index.html","4a3d321bc6f6a4e91b1382e591934884"],["/archives/2025/03/index.html","f284f88bce202eb6f3d6bb98b37d951f"],["/archives/2025/index.html","9aa916488f1e2d8f006240ed52850e0d"],["/archives/index.html","52913a02ad46c75f6e4966e84a4d7c83"],["/archives/page/2/index.html","943e0241400481435f935860ac309d34"],["/archives/page/3/index.html","5ee5ef631f8efda9f42fb5e2a027058b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","ff89c25040cc56532ce6e02985a03af6"],["/categories/Java/index.html","28f0bfdea1416bb2042cf63a20e9115f"],["/categories/index.html","b05c4b71c678206632744387728faaf0"],["/categories/大纲/index.html","c21c170ed677205474202ba81935d0a8"],["/categories/技巧分享/index.html","d37f418afd9a7cb9c3ecc7bd5da587a9"],["/categories/经验/index.html","245cc835964ef50d931e2c12687278d3"],["/categories/面试/index.html","6af2196d3c18c95becad5bdf3eb554c3"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","beae8598d57d7399f1256e36f9529a8e"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e8cdcfbf36566613f76489ebf7a3beca"],["/page/3/index.html","e379101c86e0848e300dbd40e77285aa"],["/post/17c79a2f.html","aa32508538986fb37a990ba64b8101ce"],["/post/4a1b603.html","663ad61d1a1f47b14c78f374e0626a02"],["/post/4c5eb723.html","40c020cf2e41f1e5b47ab6af1aa46951"],["/post/5d715b31.html","72a476645fc0cc9384dfcbdb1d8edff8"],["/post/5d81f735.html","930b314fbd364a24175c49301ff3054a"],["/post/752ec13d.html","d91546aa24db6fc9b11a4f597d545711"],["/post/795293fc.html","9cf6f174dda6fa503e898f96291a4dab"],["/post/79a8e3a5.html","153e7cec2c6b0beb201a05bbc06e4349"],["/post/8ab4a728.html","df3a5189145220f83dfcc76310cf0590"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","57f75d5c82d81a76840e02515e9b8d46"],["/post/9a1684cf.html","ea657dbfcbd542fe5e6b983e0e12cdec"],["/post/a2a378f1.html","ee1303a25fb6314764011e3d2a982c6d"],["/post/a2d9c915.html","543fee7b31c665d799553fac1df8277f"],["/post/a8531bad.html","760e54a1e70373fd089896ae9d3c8014"],["/post/android-base-guide.html","ec0eac8ebc031ddc7ea273640c4cd1f2"],["/post/android-main-point.html","cbfa9f24194eb94d9df61c13d1508f5d"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","6bb40e7b2e86faca80eab9537347e26f"],["/post/c36dcexp67b.html","f3f350bcdbc61056f5e2a24548ec8eb1"],["/post/d0bfb046.html","f2f55e9d1cdd547f85917e2d36dd8829"],["/post/ef2b76b.html","49ce9cd93e9103ebbb91a09815bfb726"],["/post/exp-hexo-base.html","e26026bd65e67a67c397227a5f3482e0"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","ff6b4c39a1c4221ffe6434fdb2575eb3"],["/post/f887fa47.html","f235c0367bd1769112303e509a5022c3"],["/post/java-base-guide.html","0814c9dd99db6ec4a3a4eab16a09acbe"],["/sw-register.js","2ea770b58d0401f0f1b8e90a4ecd9230"],["/tags/Java/index.html","415e496fe3ba5b7e46349e1f1c7d0fa8"],["/tags/android/index.html","c45ec94028ff70706f4dcd31a9a80e74"],["/tags/index.html","a8aefb0e228a1b742586c0fc0e54f79c"],["/tags/python/index.html","9cbce828c4422fc1162c41f822a0f7af"],["/tags/大纲/index.html","185ce584a8fbf56cdc0139b14511dd31"],["/tags/开发/index.html","95f8ce93112d6703f3206c42fa8d53c1"],["/tags/技巧/index.html","28f394ac37c7cb1109a051ddfb7109bc"],["/tags/技能/index.html","98d06039379e6874ead69727eadd164b"],["/tags/故事/index.html","cb50801acacdad56f29cd5b720153f0e"],["/tags/游戏/index.html","fd834fbf4deb62b1a26e1a15d03620a0"],["/tags/算法/index.html","d701b75376fef1697a5525601fc9d9e7"],["/tags/经验/index.html","7936e7a4141f4c5acf2136a8b09f811b"],["/tags/面试/index.html","4f99909e429005bd03965c5a840f35f6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
