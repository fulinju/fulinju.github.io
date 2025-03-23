/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","f45ea582c91a92284b10b013adb75dd7"],["/archives/2024/06/index.html","8df1444e88c7d8b70aa48e72dc3519aa"],["/archives/2024/07/index.html","274f600b5382462b1fb2d43775b86f92"],["/archives/2024/07/page/2/index.html","539ff6513351377e91ec5d1e8c7e367a"],["/archives/2024/index.html","c3eb5470d5b55190bcf48324835562b5"],["/archives/2024/page/2/index.html","1cc86b57795e7d1938368100acd4bfbe"],["/archives/2025/03/index.html","2cb31d3ec26f50fa9d6cf8c7cddb6657"],["/archives/2025/index.html","d43b9813d77951ef034d0b128f6399c3"],["/archives/index.html","243900da4e4f97cca40b181f2c22cf82"],["/archives/page/2/index.html","89c6a3e677da5d773d88beb2cefb71b6"],["/archives/page/3/index.html","fecf4df5328830e7c2f13f9e5f14fa32"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","e68f31c555932a58e6200b95e287c03a"],["/categories/Java/index.html","059c6577ad87317d97a1a3ce0f02cabc"],["/categories/index.html","6ddf21e87c6f631f0c8b1dfa5bb56758"],["/categories/大纲/index.html","09879b302f7d671c47edc94534f9cb35"],["/categories/技巧分享/index.html","a7f911376000338677510073f0c684d1"],["/categories/经验/index.html","b450340f6d465b4e47e3630afad68cf6"],["/categories/面试/index.html","017d85a5cbde0349e724ffa44a278fa6"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","05ada58dda6b7211cb82b2ab31966e10"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","841a65a476b0e8d8bc4b9b25b83bf913"],["/page/3/index.html","c11e267a182526eb203a09a2ffc11ca4"],["/post/17c79a2f.html","1c3b46d9f1e52597dc5358a93d4d92ec"],["/post/4a1b603.html","b37182ff881de405a64b94c7b72e47f8"],["/post/4c5eb723.html","e6801c18c6230e91fc6a92208ae6d851"],["/post/5d715b31.html","6c7aa4347b2ae64cfd700ba074845355"],["/post/5d81f735.html","687a60f71477dacf4baef84a40fe22f0"],["/post/752ec13d.html","8108e6555c0d837b26c9e272b322830a"],["/post/795293fc.html","7ea1eb9866e0ad747027e45d2f8d55ce"],["/post/79a8e3a5.html","1fba808d230e12c97adaf79836b6420c"],["/post/8ab4a728.html","1d7706600efe996a0e5e6ee77d875383"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","f45282962377bef2eb6715ef5ea6d115"],["/post/9a1684cf.html","4f70850d86c62da58f9f82859af73530"],["/post/a2a378f1.html","11f2be4bba33f8da3cbfea381b375910"],["/post/a2d9c915.html","1a1963c9c3e9d6a881e359fdd8b5d6b4"],["/post/a8531bad.html","875386ca855e13e5fce892fec2aa3473"],["/post/android-base-guide.html","cb12546fa3791a06ea7e50385da38bbe"],["/post/android-main-point.html","f97ba5244d67097a34e4a87343c52cfe"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","8e2031aca54c3cd33cfee6f19a75f660"],["/post/c36dcexp67b.html","9743946a3c8c1ffe3b219c8dccb28e72"],["/post/d0bfb046.html","7452d4f0b62da4f4bde9f77f3814d80f"],["/post/ef2b76b.html","66cd0550e187f67ef2a52cbba4fe5fcb"],["/post/exp-hexo-base.html","52ea6c1b13f95d6e1e26dcf203ce9e30"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","713f3061f0cb9b35cb01db286d1c9e76"],["/post/f887fa47.html","8b6755265119592414d0e10e66c5297e"],["/post/java-base-guide.html","80b9c4352dc5947a2e6845910ad87292"],["/sw-register.js","61b45ea035b1a77be4ef10407cf52adf"],["/tags/Java/index.html","94291bf4626397c5ab8d0a3eef1809e0"],["/tags/android/index.html","3e6c9e851a6e9f3de87d137abb8efa60"],["/tags/index.html","15261c4242118f07b3936fbc9ace77e3"],["/tags/python/index.html","530e11e3fc97e3d47af7564aab15b18e"],["/tags/大纲/index.html","8fd4725a01e1cae019dd087806e3c699"],["/tags/开发/index.html","4d642a9109921f258b0586e790397d6e"],["/tags/技巧/index.html","fb3257ca8f98090346a8c294215db1cc"],["/tags/技能/index.html","a72c8856d615fefeace0109023d5f593"],["/tags/故事/index.html","5119180ebbe685491f65d93fc449c7ce"],["/tags/游戏/index.html","361db9c638d63ce3f0f1c1f322daca72"],["/tags/算法/index.html","ed985860baf474b343e1c4ce50a56187"],["/tags/经验/index.html","779ba0967506636ec7e1e1bb7fafe2a4"],["/tags/面试/index.html","7c6f14b83265b322e538c5f55c2b6e1d"]];
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
