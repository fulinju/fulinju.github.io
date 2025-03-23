/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","5f2cef0e83c0961107008dfa3d2d9c01"],["/Framework/index.html","d1c21ad69dcc3145939c11d620496b73"],["/Java/index.html","587da646b917896ac2f69e1c3968ed81"],["/about/index.html","28563ae1a974a8deba841e1ef61a1a40"],["/archives/2024/06/index.html","720fe9be2ca2137b40162f434e02f855"],["/archives/2024/07/index.html","f665e486ae4ce4116bf7b84aa427bf5f"],["/archives/2024/07/page/2/index.html","75c9f143f7314ab00c0e71472cf16cbd"],["/archives/2024/index.html","ca14a572d8ee5a3aa755bca98067c3ed"],["/archives/2024/page/2/index.html","709b36236b95b7bfef73dd5b1182b680"],["/archives/2025/03/index.html","455f1fa233933067f88fbadf667d86c5"],["/archives/2025/index.html","a49e0fa0b6b98b8c4e98bde0957683d1"],["/archives/index.html","91854b3bf201052f4baee0d0da1f1a30"],["/archives/page/2/index.html","00657ae245d718184e6a6bd5688d7bc2"],["/archives/page/3/index.html","27060297a3b14997b1f063fad12834be"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","cdf2db3ed1e1502b7cf1fc3a107fed5a"],["/categories/Java/index.html","9f7bcf6953fc23ecebe6a02c1c8d358e"],["/categories/index.html","f10ca7c9a0513e983a011c4022ce127c"],["/categories/大纲/index.html","c0968b5037d8a46688a0f08edd422c66"],["/categories/技巧分享/index.html","30c84d95bcb5ed5f0dce02fdc10b4c23"],["/categories/经验/index.html","c9541c0031f6c7424fed0b4f0f0f583e"],["/categories/面试/index.html","82be83fb5de4d5c14147d4c2bde040fa"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","5a18d6e488c7411575e58598ffa68e16"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","53669095e50d524ec021309f2ba531af"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","37c575d0f8c51986b2ae76427ec51063"],["/page/3/index.html","168738b657e9b47b36cbf17b27370319"],["/post/17c79a2f.html","0e9ff7db3d1020ba61a5da2bb7bd40e8"],["/post/4a1b603.html","18ff68d9e86bed05bfd69e16c397c674"],["/post/4c5eb723.html","9095b1605aa5d0bd96fab8283f05cd60"],["/post/5d715b31.html","6aefbccecf0b6dcaea040ebb1d333ec8"],["/post/5d81f735.html","0cae95187202ee825e575fc6f24e6de2"],["/post/752ec13d.html","d667b31fb799b25abf54ab3c87484b9f"],["/post/795293fc.html","6565694297489d289a2ad1d1b3eb5021"],["/post/79a8e3a5.html","0141788d588b44f011dffe47d58d4ffa"],["/post/8ab4a728.html","cbce07eedaa2179e6506a3686dcd6537"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","8db868e265abb1cd080e822067ad10cf"],["/post/9a1684cf.html","1d4afd0fb9d84eea315651b7981d77ea"],["/post/a2a378f1.html","57c125bd50372727648acd51ecf1c164"],["/post/a2d9c915.html","6a9d04b800417daa496a8037fc4f2758"],["/post/a8531bad.html","1111e73dfc28fefc1789802f1767cfb6"],["/post/android-base-guide.html","d84810b5df999355c96891283b2deb7b"],["/post/android-main-point.html","ffcd5d1ac453ab5ecc7821b8f27cca19"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","6e70dc1cfa918e265884dce8f0515716"],["/post/c36dcexp67b.html","c5952ccbc1e566d364c5bab59d11ed66"],["/post/d0bfb046.html","9eb095e4460e2d2b3f8dd48caa72e178"],["/post/ef2b76b.html","cca86bbfc3ad7a780e003eaa58328cff"],["/post/exp-hexo-base.html","51338aa862ca24efcf8557f7939e99fc"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","5277dff2908a5a4791183c4017d08c4c"],["/post/f887fa47.html","f43104507e0541fef2aa5fc66004d690"],["/post/java-base-guide.html","2034aa4e0549d249791f806e17a1b4e3"],["/sw-register.js","348ce2d02d9bade02eaa1b106e4085ad"],["/tags/Java/index.html","4a32507f8fc700e13c91413c5068efdf"],["/tags/android/index.html","6421ef69f36ba45856fb5b4646c7c066"],["/tags/index.html","fc52624f154ec4799571d99dd2f14d44"],["/tags/python/index.html","c6773b02d0732bb8369ea72046496332"],["/tags/大纲/index.html","60d5e79cfaa3837e88d05fed21142be4"],["/tags/开发/index.html","0662704b616f167f47c2749897069855"],["/tags/技巧/index.html","543a90f4fbc421318aef2f3a800a4657"],["/tags/技能/index.html","3a9daf9b992ecb447f688904b692f8ba"],["/tags/故事/index.html","eab96b4128c71932f7821fa1337ba440"],["/tags/游戏/index.html","e18d3a1d7eaddfd9ab1faf2ca5f90fc7"],["/tags/算法/index.html","b4bc31fa3b59c5786a5fce629f4eaa42"],["/tags/经验/index.html","636384ef702a74b1f17b3f9facfbae31"],["/tags/面试/index.html","70acb381a70b44b26827347b8021bb08"],["/产品/index.html","c2363a73c7c294583eb6a959a2ccdbd8"],["/团队/index.html","306dac4cdf11135086bbde887058565e"],["/方法论/index.html","1ba37969875a8d0e74ba88ea9d206286"],["/设计模式/index.html","7abfbc035ad9c7923db12a8bdbdbbd6a"],["/面试/index.html","db4b0d7d41673fb59cff8442bc127cf9"]];
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
