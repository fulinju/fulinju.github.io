/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","75ff4d5aa861ecaa6509f74151fd596f"],["/Framework/index.html","c53106d4cb674bdb876f775c30f5b10d"],["/Java/index.html","f73717957081a86b349b65be2b4c7888"],["/about/index.html","a6f9b052c75d52369492454a052752d2"],["/archives/2024/06/index.html","630421f64f514be50c63e8675e912405"],["/archives/2024/07/index.html","b2fcc81e67a343711d3ab26ceeda34d4"],["/archives/2024/07/page/2/index.html","318f88a37eeae4c9cbe4530696dc6118"],["/archives/2024/index.html","45741b4eb2480099cf484b0995b7ee88"],["/archives/2024/page/2/index.html","a5db30d2949d143778c928c1b4713d2d"],["/archives/2025/03/index.html","af618fed86d3911adce27a26f517f42b"],["/archives/2025/index.html","0a4d9ac3fe127f7f1d588738bca3f9ea"],["/archives/index.html","d07f08d4e99b8e372541a4b2aeec2cdf"],["/archives/page/2/index.html","d2b0f4ea7967020212682c5b55ac3dd5"],["/archives/page/3/index.html","6778a1330240e5c48e74127b2e7d7404"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","060d3aa4ad1a6348bbdf552fd0b27dcc"],["/categories/Java/index.html","bd7ff759b1256315fa08517cb4d531fa"],["/categories/index.html","88254479a846f0c242da15caf0a88c84"],["/categories/大纲/index.html","6ba7ee5b6f60e07f42f10fd85d94d3cc"],["/categories/技巧分享/index.html","7db0eb0a239ddd748f7cf3c44704a0b6"],["/categories/经验/index.html","cce376b6d3c66018e25ee437ecf1870e"],["/categories/面试/index.html","6c2412b0832b49719cde51d6d8245190"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/java.png","f2c453701ded1ea20252af6081ab502c"],["/img/java.svg","f95033b23a8195a796d292e38f314e2d"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","02d61f8f991ad9e61c2823ae420f0214"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","44431cb92be244616f319677a5b2eec0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","46520dce0694e219f4ccba4b3d52a453"],["/page/3/index.html","59ee1ba35e7ce436d962d710bcd0b472"],["/post/17c79a2f.html","277b86f31902609e8f25c06ddb0d9803"],["/post/4a1b603.html","621fd6ae14a3d171ff7485c7e8a1d1a4"],["/post/4c5eb723.html","58f3b0b4febf948a0f14c9ada1a853ec"],["/post/5d715b31.html","2187ff0b25dadb27cab778c5063e13d5"],["/post/5d81f735.html","011c4ee0ec021695f96c6776123315e3"],["/post/752ec13d.html","2deee055e6df765f1b3e1c5fa6b2f4dc"],["/post/795293fc.html","06bba88c6dc266f0c132ea49a90344fa"],["/post/79a8e3a5.html","d881475ccbfdd55ff530b2ad7c30f5ab"],["/post/8ab4a728.html","2b643c9ace7315fe2175c8fdbe9c0a65"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","2b26e871f2e787890ae500a52aaf23d8"],["/post/9a1684cf.html","8fd7f470a3829010e568683a29932863"],["/post/a2a378f1.html","908e9ab8bd929c3ac570f15919f01521"],["/post/a2d9c915.html","74859c56cfa35da275cbf2a79c66bf34"],["/post/a8531bad.html","fc272e8a1ed19fca3e6ae6feffa6e5f9"],["/post/android-base-guide.html","653a81b0ece31baed3bf5446dd3ba36f"],["/post/android-main-point.html","f526e59f18a83f92c9708f317e1b7ab5"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","0b69338bf9972fa8de981f1bb9a71d5e"],["/post/c36dcexp67b.html","40a2e913d8cd718302dfa3b384d2dbc9"],["/post/d0bfb046.html","2d9f9bf5ea86e505f9a8607cecd732c0"],["/post/ef2b76b.html","467e3182eb410655e917fb8748de5de8"],["/post/exp-hexo-base.html","5aecc775d2e83cacbc1e75fb924c38ff"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","a56c6051014263122358d9061a0857b4"],["/post/f887fa47.html","9c85c68fc5d5ee09206080d25d39dd1e"],["/post/java-base-guide.html","0bdcf708dda87d9172acbc7ef4fba282"],["/sw-register.js","4270056d86939aea00151dff93d8460b"],["/tags/Java/index.html","32e69cb8d80a8b9d0a0251c42b7f8e1c"],["/tags/android/index.html","d48e1f0f0a563ba7c459c8dd99fe406c"],["/tags/index.html","69f098cd70f6c35e426fe5c750600f77"],["/tags/python/index.html","9386abcea3572cd13bcdb9df876db8cb"],["/tags/大纲/index.html","03ea2a94e0645cce0c93d828da476130"],["/tags/开发/index.html","179cf918fd92756d6678f2a3b75966b3"],["/tags/技巧/index.html","04b6e2801dccc56dbe4d00a06e256faa"],["/tags/技能/index.html","b7d1e60b2945cf7b984d392a67b11732"],["/tags/故事/index.html","fead0bfc80f501930175c04fad773dd9"],["/tags/游戏/index.html","3cf85426e3f6871db40cb183a3133568"],["/tags/算法/index.html","e98c635c91d3aade2f6cb24ecf9aa658"],["/tags/经验/index.html","57d5789a943c9b0736cd1e283e14624f"],["/tags/面试/index.html","0c146c3b3e10dbb409a93e92f977263c"],["/产品/index.html","5d948e1cb88467228f042ae11893d6ab"],["/团队/index.html","ef78199b04761abce905e8c93e214f5e"],["/方法论/index.html","3a31a9d7a70a559e9b37d9179c77fef3"],["/设计模式/index.html","6941f66f9f6d3a7ab7d55d604b269a89"],["/面试/index.html","6d235ff278a0920d5a31e0b43733c3a7"]];
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
