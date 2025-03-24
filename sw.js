/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","30ef156106cdcdc3bb9fa8b46c708a8e"],["/Framework/index.html","0ac4205c4a10b15be107c45751f855cc"],["/Java/index.html","746ac9f51abf7a8ce806e82880833546"],["/about/index.html","1d178cabea28426b57736d96019a1969"],["/archives/2024/06/index.html","613218e2ee075887a7dc8042c166104b"],["/archives/2024/07/index.html","8a71383cea3c98c34812e526962001ef"],["/archives/2024/07/page/2/index.html","11ab9b41f366ccbde89f57f59066cf63"],["/archives/2024/index.html","a7cb1e0a11b2d948c0067cf11b647ebd"],["/archives/2024/page/2/index.html","3c9bcb0d373d39374998bcbb2e98c46b"],["/archives/2025/03/index.html","1b4ce985046c7e3eb134247396280580"],["/archives/2025/index.html","084b1c73b342346a9353152964d75fde"],["/archives/index.html","ea77ed8c78b318753c4beb4e0bd5f288"],["/archives/page/2/index.html","2a6ca75a238a8b132ea85e566dc09f53"],["/archives/page/3/index.html","b103d4374e2d0004194380d76fb7105b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","30e2320bb3eb9acd7c358bfcd72df6aa"],["/categories/Java/index.html","e609edc521dd6a92d4d9a23c6e6532d7"],["/categories/index.html","88efa70d4dc6e22cf29f365cc5880607"],["/categories/大纲/index.html","ad991497e44ef6a1f36ee61b70be0a29"],["/categories/技巧分享/index.html","4f7b0d08230b64864f708c717c4b5f35"],["/categories/经验/index.html","e9a5e8fb1ec9668f1f53cdb93e9dfda4"],["/categories/面试/index.html","16ea4829f98abf43afac16705e1aebe1"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","8ad268d87a2e21ebe446667995144f18"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","f1bf69b47556c99df2de95638b4fc6d8"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","972c0dfa3d23ece108051c7153896f99"],["/page/3/index.html","c67a2f5b667aaa5a4eb49241a6ec75ca"],["/post/17c79a2f.html","1f30a4a302ded2a0b3b87662093256ff"],["/post/4a1b603.html","d35188d8485543aa03f15848d880fe45"],["/post/4c5eb723.html","055b8f23661a642f6580a822efa951d8"],["/post/5d715b31.html","99ea81b9f68c9c75cc86ca0210c67297"],["/post/5d81f735.html","624eb6a391a10f9d033d8b837ce3d478"],["/post/752ec13d.html","77efbe699bd480ff5f5035f2bc1d6421"],["/post/795293fc.html","394c3bc2bf5d7138a50a1bb8da7405ec"],["/post/79a8e3a5.html","d8941850561425c4150e79b1910559e4"],["/post/8ab4a728.html","b86d8bd0f2f4a5b79d30519367b274df"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","b9e604526a137fc41ead14a4cac480a5"],["/post/9a1684cf.html","ce87169c8f79d08cbffe963cf95ab5c0"],["/post/a2a378f1.html","1cd1b9edf08a87ef64cf29fbb20c319f"],["/post/a2d9c915.html","62f389831b94bcc1188f42a1238fcae3"],["/post/a8531bad.html","712cda425f96ff5d92472f67d906059a"],["/post/android-base-guide.html","b05d3ed7d8cf72a0615edcf346c33dac"],["/post/android-main-point.html","c4aa25e9bec098dfaf8242c314773878"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","97aec6671d7860998f07839f6853a88a"],["/post/c36dcexp67b.html","f4a49f6b72ad6683c6edec500a2d6dd0"],["/post/d0bfb046.html","c08fcaac3ce68a474d01dbe6e2fb9c76"],["/post/dc3e26d8.html","87c1ff1ee3a39b7cef22c46ac24f661b"],["/post/dc3e26d8/The-GitLab-Flow-2023-mr-pushing-code-portion.png","8b1d66d6e539f1fe8fbe3145b0f11c36"],["/post/dc3e26d8/ado-pipeline.png","362ee4f6c8fcbe3043a7dca072e1c388"],["/post/dc3e26d8/git-feature-branch.png","da62ac4baa44ce986ec8a8e89d487317"],["/post/dc3e26d8/git-model.png","f3ecc3cf5b3902dbb1ff2356fe65e67e"],["/post/ef2b76b.html","27f0d6e190ffe51acbcbca97d703f4aa"],["/post/exp-hexo-base.html","f174bbb2d02a51b05c3b497e73f5ee47"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","d5b39ec0fcb0ab28abbdb2af4deef0e9"],["/post/f887fa47.html","020607e624d06a04eeaf9b4d931b66d6"],["/post/java-base-guide.html","be177a866da44b5edaa8aeb4724f1753"],["/sw-register.js","8d1f2dc6825a8b8e89218a422c320fa9"],["/tags/Java/index.html","24c96fbdcaf0c45d23878ad19c91df86"],["/tags/android/index.html","6b28a71c3a5ea6cfaa1e97acfc2ac724"],["/tags/index.html","fdf489c269900dd52532ede0a1ed87a2"],["/tags/python/index.html","9e0114096c24f33e52bc88711cfcf634"],["/tags/大纲/index.html","c10ee15e5945894631dd3e52dfef8ff5"],["/tags/开发/index.html","6caf993f9876da6e54ced3fc15d7e60f"],["/tags/技巧/index.html","7b2670970ec8fe7b7940c43aeff1ceac"],["/tags/技能/index.html","f24b0078712fd358445e7cfc24d1821d"],["/tags/故事/index.html","8c3c59216315faf3adb70126b75a37b0"],["/tags/游戏/index.html","5a6ed42d8df550902f3c5b692ba142e8"],["/tags/算法/index.html","df53ee21bcf5942ef58b63f02ba3d3f5"],["/tags/经验/index.html","a4b6d115f00d02cd809387101ba6b0e3"],["/tags/面试/index.html","42d5d53b036586f0f350ea21caa56fba"],["/产品/index.html","74c2bfd54592ab98d7586b5f953e637e"],["/团队/index.html","1429b7c1797855eb65e444cca1eeb011"],["/方法论/index.html","fdebec2bfca7aa2ccd9a912d68e2b7b9"],["/设计模式/index.html","61f4a9f0c277dd18b41d6e6110e89f90"],["/面试/index.html","8965734e5b377331758fa94f731d7d6f"]];
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
