/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","75624507c6e7b9e3a3a9dcc93dafc78b"],["/Framework/index.html","3f2c1edd14c9cb2ec3f6780b8f5ad495"],["/Java/index.html","a568de70a2b7321ac661e734102fc9c5"],["/about/index.html","9a0410b858a6e04aef72bffa67a649c2"],["/archives/2024/06/index.html","ca01d81cb6d4cca7e34596b902b7c5d1"],["/archives/2024/07/index.html","4241908f03ef40f4c7a05f7c928864c2"],["/archives/2024/07/page/2/index.html","897ca399b0e6f950a24d08bd004ae2d5"],["/archives/2024/index.html","4ac3ce48a0973ccd16f57f83b6988aa0"],["/archives/2024/page/2/index.html","90a35624378054d139e5419cb2b103d3"],["/archives/2025/03/index.html","67fbc58ba22a35e0016d51fb3930dbb1"],["/archives/2025/index.html","dd40ffbcebc3636b8253042985b5fbcb"],["/archives/index.html","d01d48c2088486b93f68415d4066f132"],["/archives/page/2/index.html","807913d36cb4ab480b726abee556137a"],["/archives/page/3/index.html","40a66b7a566b8a9639bc8f70aa7c9b25"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","40bd18c1f7170701f9c7db09537a5855"],["/categories/Java/index.html","36e1a0578d7778d1929ef260e472b3bb"],["/categories/index.html","999e5e2ff7a81d4a5b922fd1d069439e"],["/categories/大纲/index.html","928d22918fed2adf6da368aeac99d5ae"],["/categories/技巧分享/index.html","36cbc43f3555eadb5a2a908e61ed3b7b"],["/categories/经验/index.html","b69cc45f8e131a7359d2bf417111d120"],["/categories/面试/index.html","7f9fd6ce6ca74f9386a4c8e6758dd2d6"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","a437f56cda31ee5e0e50bec1202ce3e3"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","143692ac2c93dc783920b82ef9818013"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e44ac4d209d56e0eac1f3f1fa5b44f6b"],["/page/3/index.html","1e95dfd63da852972ada631e5f4de5a6"],["/post/17c79a2f.html","277b86f31902609e8f25c06ddb0d9803"],["/post/4a1b603.html","621fd6ae14a3d171ff7485c7e8a1d1a4"],["/post/4c5eb723.html","58f3b0b4febf948a0f14c9ada1a853ec"],["/post/5d715b31.html","2187ff0b25dadb27cab778c5063e13d5"],["/post/5d81f735.html","a9baf6d8891e835cd4b5a96673084f87"],["/post/752ec13d.html","2deee055e6df765f1b3e1c5fa6b2f4dc"],["/post/795293fc.html","06bba88c6dc266f0c132ea49a90344fa"],["/post/79a8e3a5.html","d881475ccbfdd55ff530b2ad7c30f5ab"],["/post/8ab4a728.html","2b643c9ace7315fe2175c8fdbe9c0a65"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","2b26e871f2e787890ae500a52aaf23d8"],["/post/9a1684cf.html","8fd7f470a3829010e568683a29932863"],["/post/a2a378f1.html","908e9ab8bd929c3ac570f15919f01521"],["/post/a2d9c915.html","74859c56cfa35da275cbf2a79c66bf34"],["/post/a8531bad.html","fc272e8a1ed19fca3e6ae6feffa6e5f9"],["/post/android-base-guide.html","653a81b0ece31baed3bf5446dd3ba36f"],["/post/android-main-point.html","5950e3950bcd53fe701c395af9d4a521"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","0b69338bf9972fa8de981f1bb9a71d5e"],["/post/c36dcexp67b.html","40a2e913d8cd718302dfa3b384d2dbc9"],["/post/d0bfb046.html","2d9f9bf5ea86e505f9a8607cecd732c0"],["/post/ef2b76b.html","467e3182eb410655e917fb8748de5de8"],["/post/exp-hexo-base.html","5aecc775d2e83cacbc1e75fb924c38ff"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","a56c6051014263122358d9061a0857b4"],["/post/f887fa47.html","5188efbef1a2873d35ce27c77aa2ea95"],["/post/java-base-guide.html","e0a79e06363d8527fe8abce516102d4f"],["/sw-register.js","dd4bc794ab26a70db872d83f20f12a77"],["/tags/Java/index.html","10691aa09b643714b339b374774dfe05"],["/tags/android/index.html","e33353192c208833fadd53f7b1eada4b"],["/tags/index.html","2ba0919f3f54123f3238cce213f6c1c4"],["/tags/python/index.html","bcfa650e53bc319e3770f930d08fbd39"],["/tags/大纲/index.html","6398917f0342e73f420447fd6a96e11f"],["/tags/开发/index.html","45145148deb3abc716949e87c61fa3fb"],["/tags/技巧/index.html","e98b1ebee36912b122ac651264ac3dd9"],["/tags/技能/index.html","eea47e2c9f6976ac8ff2e638c51a10dd"],["/tags/故事/index.html","64a235e90394a877a133f63b01f5f7b3"],["/tags/游戏/index.html","e76e56314d0fcd2bc32d16af1706d8aa"],["/tags/算法/index.html","6c56cd72710ff39b701769be3ebad258"],["/tags/经验/index.html","d7cccd5dce0c5bbfe374a28addce3eaa"],["/tags/面试/index.html","935ed6c29009e71b76db9e2f40ac381e"],["/产品/index.html","e6de2fd164d584b4ae2da10b1d5d6767"],["/团队/index.html","b06ace3829935b7a5bac744470fb4577"],["/方法论/index.html","58121e05fdf667e542b89a4eb3abc9b6"],["/设计模式/index.html","e515aa1a816c677ba59b8590302d6b0d"],["/面试/index.html","43bc6bff912af90c628397e147e26046"]];
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
