/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","675f0fe3dcd5e23af706f46e6d639c91"],["/archives/2024/06/index.html","962550379f3d865439c8edc5e2c89ef7"],["/archives/2024/07/index.html","f2c2c4ddbef8ebb0ec673f462f11c475"],["/archives/2024/07/page/2/index.html","b71b145f7de9c9bc448f56b9dde9cce3"],["/archives/2024/index.html","158b49a68340fc8ffff2969ddecdf005"],["/archives/2024/page/2/index.html","1cb4a23fc9a5da43170db693ed16753e"],["/archives/2025/03/index.html","19583eda96b5e140d8d70dfc200e7bed"],["/archives/2025/index.html","6d23d4f701ca631e5c8eea269c2c238e"],["/archives/index.html","a27329b03649b072b78a94ab51c96906"],["/archives/page/2/index.html","e10d9f573e240e226c6863b372a4cfd8"],["/archives/page/3/index.html","2f368dfbe28db5e0185674f69a3d6a27"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","bafe5136661b3b33abf0e29a679d0662"],["/categories/Java/index.html","c44649f9ae2e6d264175aff1b0be6442"],["/categories/index.html","ec8c25dd7318526ab6cd1b2842554f3f"],["/categories/大纲/index.html","5a98119c8e8a880988ce08cdd4abe7ad"],["/categories/技巧分享/index.html","2c9e8260a6be09b46ae97782f82ac636"],["/categories/经验/index.html","6cf412869a322f3cf06057fe00ec7df4"],["/categories/面试/index.html","c52e14a83b55b5a2e8d8537551dd427b"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","acd453858f5e7a25f1b5f40a5f572f0b"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7a461ad3c2197f31cfe522376f08af52"],["/page/3/index.html","c57ccb63c2e69db63c1b6ee6a8e259d7"],["/post/17c79a2f.html","950bf932e5e1692366b5119952c3f790"],["/post/4a1b603.html","8173c52fb4296bff77af9e668fe42f34"],["/post/4c5eb723.html","ce1ac03e15d16048000bdb647fe8e141"],["/post/5d715b31.html","606fbd396ea853780afd9eadcf8cee0e"],["/post/5d81f735.html","c4108ddb788fa8f3a2ed7a6a5a212f7a"],["/post/752ec13d.html","7ffc2c0315dde09398a374fa50ff13d5"],["/post/795293fc.html","355a13ae9c28d576d491635ab3426230"],["/post/79a8e3a5.html","2e5dc801d1237813ad0440d92bf75e17"],["/post/8ab4a728.html","39f3a97ed72e34c8456cebaa5db720e2"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","85d6088559d5dca8980e7974c9037422"],["/post/9a1684cf.html","b8a80f2f1f496f1078bf2ac38a0a468e"],["/post/a2a378f1.html","28ee29d9e956af157cb25cbd591d83b9"],["/post/a2d9c915.html","a61960581e6457fd579fc4cfb4133bfb"],["/post/a8531bad.html","fef3a4f7a8e5ea8f55af7afb83066e39"],["/post/android-base-guide.html","231c8bc0b5a7233f4ea1a66ad52a8db3"],["/post/android-main-point.html","1056177622f6dd5cd0bbc82c933ee066"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","0e5b009e95f1438eb69da8e3e5a7a738"],["/post/c36dcexp67b.html","ab42dbec24b54369bb8f8a6ff7a871eb"],["/post/d0bfb046.html","a0b3ab50125b2e0c5d55a43c99f2fe40"],["/post/ef2b76b.html","f0f09b1c7e1fc92e771f6d61c48891c6"],["/post/exp-hexo-base.html","ad1b0a2b9e19336da95c16a7a00eca75"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","463093d4ad73c9b4cd28971b907da142"],["/post/f887fa47.html","96f7238cc4ddaa7776af97a9acfdb0fc"],["/post/java-base-guide.html","01a280bb34e916627757a2c37be078b6"],["/sw-register.js","b1f2103dcb1587e567d885760d8b0b87"],["/tags/Java/index.html","9d036eafa023cd3237c1ec84fe387761"],["/tags/android/index.html","75c9eccbd473991e97123ab5d3c4dd43"],["/tags/index.html","0b235d65ebbf19c77eec8592fa9cb10d"],["/tags/python/index.html","e3a2fcead5c148228f6b7548c7d45a54"],["/tags/大纲/index.html","f4df1c169ea41234ac1621f1341415f8"],["/tags/开发/index.html","fc32fb4c98ea8b9b2bf70f8e81401569"],["/tags/技巧/index.html","928be0fe5a79f167ab24878bd08e5e9f"],["/tags/技能/index.html","8d2e692630501a6264264b7d33781e8d"],["/tags/故事/index.html","2893652c3d7b0e51fcbc97cf07ed02a7"],["/tags/游戏/index.html","fbe230effd02b4464ab77ed487a65e1c"],["/tags/算法/index.html","95495f570ede42e126233e2006331a52"],["/tags/经验/index.html","c79b1fe8ecd50fc64575a9cab3b60820"],["/tags/面试/index.html","41e3c1cef3d56f04ae8c18f090379f82"]];
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
