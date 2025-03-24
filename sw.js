/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","ccf1de2a237927b0622f0a526539baf1"],["/Framework/index.html","b01c21f3dff2e24c274e1257a04f13f3"],["/Java/index.html","3c35d00c34c02402f0d05980350d4cf3"],["/about/index.html","d9d05ff1c7960a6b5a14b5f927674ed8"],["/archives/2024/06/index.html","383f7787ff43d13309df8e7d20c91db9"],["/archives/2024/07/index.html","f8822b18a1e7a972459b2bbe49475309"],["/archives/2024/07/page/2/index.html","159ce1332101e2e07f976ede8ec925f8"],["/archives/2024/index.html","6324fbdf0b617177f06d50f9dd10ed12"],["/archives/2024/page/2/index.html","6b8a60d8a2a4945d11f05dc49851fa1f"],["/archives/2025/03/index.html","5701bc0b02e8e8445eaa8c6cf985c356"],["/archives/2025/index.html","909b0be7311ef7ce3797c70da952f87a"],["/archives/index.html","21b5bdd1c280c12717c0590cde8a3169"],["/archives/page/2/index.html","104bc9c7a4b57d916f2a9f859e133394"],["/archives/page/3/index.html","977676f5f27f1d2b9a1a6bd8c7537c26"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","5e348232e5e37f83990d43263abc7d63"],["/categories/Java/index.html","f2030433d6abd2624fa13546ed59103e"],["/categories/index.html","d76a8617c1f95f6032b5346b741ec324"],["/categories/大纲/index.html","cf811fbbbb9a9577c6125e47fb27f7f7"],["/categories/技巧分享/index.html","6be1894ab9051b83b71b481a800411ea"],["/categories/经验/index.html","1f31b756e01c039d66b3da7452cc3c55"],["/categories/面试/index.html","e0bce6ed95094c4313f6d56787845b5b"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","ee1ef5c4f81a13e8346a627fcfe34fc8"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","d231f594e2fde1bd996e0d4c3b373fb6"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1213792d3e3b57cceb7008429225d603"],["/page/3/index.html","dd81efc59dc3e0a934ebfef3afba9654"],["/post/17c79a2f.html","1f30a4a302ded2a0b3b87662093256ff"],["/post/4a1b603.html","d35188d8485543aa03f15848d880fe45"],["/post/4c5eb723.html","055b8f23661a642f6580a822efa951d8"],["/post/5d715b31.html","99ea81b9f68c9c75cc86ca0210c67297"],["/post/5d81f735.html","624eb6a391a10f9d033d8b837ce3d478"],["/post/752ec13d.html","77efbe699bd480ff5f5035f2bc1d6421"],["/post/795293fc.html","394c3bc2bf5d7138a50a1bb8da7405ec"],["/post/79a8e3a5.html","d8941850561425c4150e79b1910559e4"],["/post/8ab4a728.html","b86d8bd0f2f4a5b79d30519367b274df"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","b9e604526a137fc41ead14a4cac480a5"],["/post/9a1684cf.html","ce87169c8f79d08cbffe963cf95ab5c0"],["/post/a2a378f1.html","1cd1b9edf08a87ef64cf29fbb20c319f"],["/post/a2d9c915.html","62f389831b94bcc1188f42a1238fcae3"],["/post/a8531bad.html","712cda425f96ff5d92472f67d906059a"],["/post/android-base-guide.html","b05d3ed7d8cf72a0615edcf346c33dac"],["/post/android-main-point.html","144bf90751a06e8a92fc753ab7e41b76"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","97aec6671d7860998f07839f6853a88a"],["/post/c36dcexp67b.html","f4a49f6b72ad6683c6edec500a2d6dd0"],["/post/d0bfb046.html","c08fcaac3ce68a474d01dbe6e2fb9c76"],["/post/dc3e26d8.html","75d3e03ffaab9da560ddfd652234a805"],["/post/dc3e26d8/The-GitLab-Flow-2023-mr-pushing-code-portion.png","8b1d66d6e539f1fe8fbe3145b0f11c36"],["/post/dc3e26d8/git-feature-branch.png","da62ac4baa44ce986ec8a8e89d487317"],["/post/dc3e26d8/git-model.png","f3ecc3cf5b3902dbb1ff2356fe65e67e"],["/post/ef2b76b.html","27f0d6e190ffe51acbcbca97d703f4aa"],["/post/exp-hexo-base.html","f174bbb2d02a51b05c3b497e73f5ee47"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","d5b39ec0fcb0ab28abbdb2af4deef0e9"],["/post/f887fa47.html","020607e624d06a04eeaf9b4d931b66d6"],["/post/java-base-guide.html","be177a866da44b5edaa8aeb4724f1753"],["/sw-register.js","3934f8ab1fa7aa992655c55aa34366d1"],["/tags/Java/index.html","a316ef712e437d242b660a28c038cbc5"],["/tags/android/index.html","7898cd81d24d8f980493a3befe95d036"],["/tags/index.html","7f867e1cd4e8a34ed087be75af973ee3"],["/tags/python/index.html","1c614cb5fbcb10726aedef6c8ccbbfe8"],["/tags/大纲/index.html","3b9fcef9c9f3cb05ce420a5fc33ec2bd"],["/tags/开发/index.html","5288d2165d1070cb4af3111a68ac470d"],["/tags/技巧/index.html","472ba20f0f00b439dfdc61202f9537ed"],["/tags/技能/index.html","096dde894a0fb1354095e2928b58c90c"],["/tags/故事/index.html","c0b2a8ea94a0b1e515fd82f4fc9a0235"],["/tags/游戏/index.html","94369f21a1bd9d146525d6999dd5b6ac"],["/tags/算法/index.html","7705d71f5db307eee98f20b26d60da6d"],["/tags/经验/index.html","287ce035364fcd73030b9c7de8fe446d"],["/tags/面试/index.html","4b04fd4d0dacf9b41b80f920eeac1b01"],["/产品/index.html","46bbef14490c6f93d0ce333f6b0a6b05"],["/团队/index.html","b5ce2b9e20c8fda19b8ac7ddeb0fcc8e"],["/方法论/index.html","0b80c07aee76f30279ab93091ea50331"],["/设计模式/index.html","7fbf519312bbccc19d4f207827d9358b"],["/面试/index.html","75d18a40c910b550142ba9a8154ec7c0"]];
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
