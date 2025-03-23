/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","904a5a9f20ba8c985440d311cc327491"],["/Framework/index.html","d092f28abb644d6051e472b76830b2b7"],["/Java/index.html","81708c9fb709748db6a0ce83c6ef38ac"],["/about/index.html","826a6b85ea9b44a5e372867ca614c5ec"],["/archives/2024/06/index.html","ec35279863665e71a86b9dfd2a3ef0d7"],["/archives/2024/07/index.html","fde8cc687429429419232a8277dfd18d"],["/archives/2024/07/page/2/index.html","9b657cf37a6090a3767f657da4b2a889"],["/archives/2024/index.html","8f09a3949538a9b7d5c7c024cbc5b822"],["/archives/2024/page/2/index.html","3116a4d8758f0cc7f2295873d138f5fc"],["/archives/2025/03/index.html","b93f5400901cb577e68f644281d65f33"],["/archives/2025/index.html","e98f37712c6e4da2d3e61a650b77ba25"],["/archives/index.html","195350cd52ca1c8598ab0b9bd15bc114"],["/archives/page/2/index.html","e2c16028ff5c9ee51d68897e2d767470"],["/archives/page/3/index.html","4c163b35cb2b6a63c86db7cad2dcbf6d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","ed359cd582a0ce42a277ff41eb87de73"],["/categories/Java/index.html","44b7588d855929c19804794a766b5c4d"],["/categories/index.html","ecdd5659fa4899a2d59d9e4fe6c201c5"],["/categories/大纲/index.html","f8aa2fc9358bd7cecdecceab5a0802aa"],["/categories/技巧分享/index.html","2a0bcf39f9ebfb381cb2e5b4908828dc"],["/categories/经验/index.html","a5b5acc12c6642c158832f47e31e8a1c"],["/categories/面试/index.html","52dc9cdfa13d8e9bb56126afa3165e1b"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","82fe3188d06dc416529b79927a76119f"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","29404df412af269aa6faceb00a8e5fb0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","6a65a2acebdeeaa19cc4caade2f14d4f"],["/page/3/index.html","6742f3cb3ee0b7dac23839040dcefb80"],["/post/17c79a2f.html","54c53785f822c96421dce23141dacc5e"],["/post/4a1b603.html","ff335011cc590f06115c8df2dfaeb861"],["/post/4c5eb723.html","b5d0529eb687f77977175dd2bd0ade3a"],["/post/5d715b31.html","9f469f8dbb964d8325fc9a90cfe87a5f"],["/post/5d81f735.html","92ffba78ecedf038c25240ba1e01d1e3"],["/post/752ec13d.html","9e2e7e6e3d39371637d7a6c4119d90df"],["/post/795293fc.html","7269e8c34b0717dfedae1364433fce01"],["/post/79a8e3a5.html","19f22ce5d8bac1e14cc70b8bd0aede28"],["/post/8ab4a728.html","6d28f53a63d6710f659417e91edcb26b"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","b4df4f3d9d41f3a0d9f9a39e7568ff1b"],["/post/9a1684cf.html","6c67becfa62c9b958c023d752e00afc4"],["/post/a2a378f1.html","a49b02e04e4b4e3a1aa91dae665bbcf4"],["/post/a2d9c915.html","d4c93614b72eec55cabf49260b02e7fb"],["/post/a8531bad.html","df4496cba5c75426e0d94bffe65c64e6"],["/post/android-base-guide.html","eab59dd77aa09c273ef962dadc9c7876"],["/post/android-main-point.html","017f289ee5d36e39ecae9dc1ebfd82c7"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","192da377c96119f79b41e574ba72c8a4"],["/post/c36dcexp67b.html","1e683756bece7754e9a0456ef3d6f9ab"],["/post/d0bfb046.html","50139818154a75b9a4cdff49bc5b3967"],["/post/ef2b76b.html","9eab69e61d68bdbf086bb9d80e63ab75"],["/post/exp-hexo-base.html","6730dabb6426fd77fd914b9dfa281d82"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","e308eb556ebc4d2d370b787a9d6a2f0b"],["/post/f887fa47.html","028c8c181631b42e86b90f27ab43486f"],["/post/java-base-guide.html","d0fcb69556dbb68bc646b973a951beea"],["/sw-register.js","68e240de6d6da64a9c7b7c1836b585f4"],["/tags/Java/index.html","4667540792ed597aebfb3af1479bc9d0"],["/tags/android/index.html","d799959f10dfd6ffdaf7b2db39ad260e"],["/tags/index.html","ded1798734d5387660664a7e08be6438"],["/tags/python/index.html","8b8d8ed4112d96046e854dc8d2933962"],["/tags/大纲/index.html","a3ef810f631ad3389776e481744cc0c6"],["/tags/开发/index.html","5044479e1507a346acfce21530774baf"],["/tags/技巧/index.html","a2b7e9b070ade8f781ae7b52799b923e"],["/tags/技能/index.html","a839f6f8cdc69e6360df8a139a5bcedf"],["/tags/故事/index.html","6f187e9a44ddb8fe354c1cedb3ba5292"],["/tags/游戏/index.html","5b12a332a238686df6717164e6499aff"],["/tags/算法/index.html","a6497709959ba3fcb25cf49a287b9899"],["/tags/经验/index.html","2fca2e013d8ffa20bb2415cb73b504f8"],["/tags/面试/index.html","e1a87e81c0de4facf1cd960b6bfc4939"],["/产品/index.html","cb49f7fc7f59cfb41548d77ec8d1f9cd"],["/团队/index.html","47467bc1f3dea352914e7c6615c22965"],["/方法论/index.html","76d3f8aaf5d0cc1cdda546e30f6da95e"],["/设计模式/index.html","143a6fbb41b8307aab605e68c16b2e75"],["/面试/index.html","e7d4362d23d3a9399c602faa9bd507d3"]];
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
