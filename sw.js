/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","9e1895db8f2d55de3705ed6bbda2fa90"],["/Framework/index.html","15905f2ae0b0e817179dd754f25c13a5"],["/Java/index.html","da9ba172b3cdea1be8d16554d269e08f"],["/about/index.html","251b1592c2699e01c15765881ce37eba"],["/archives/2024/06/index.html","34f92013a8a21c42649f2f41af97aea2"],["/archives/2024/07/index.html","953b3a3d9ef763adc72eed27e1981604"],["/archives/2024/07/page/2/index.html","8bf9ce379145248c6c550d58f12d22c9"],["/archives/2024/index.html","b5a97eb1a67697248f7322528498ea6e"],["/archives/2024/page/2/index.html","00471c516dc3b2b08fde2f5533b70e3d"],["/archives/2025/03/index.html","125cc8a842261882da0b95f1282b2e90"],["/archives/2025/index.html","49d54abcb7806d16cddb831611cb74a0"],["/archives/index.html","281eccd552403f488b623ceffdee4165"],["/archives/page/2/index.html","00cbbd0366635310429c4db70b625a33"],["/archives/page/3/index.html","b64d01d70bb4d573293ffc880ac28635"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","b4cd19818743d8d1181a7d2488c62dc4"],["/categories/Java/index.html","1af6a464c6dbe7d231b09315305f6242"],["/categories/index.html","0a92e7096ea27a8cc5828eb3fa4e09b7"],["/categories/大纲/index.html","b441cc9972a972e6a7d504f21aa5ce83"],["/categories/技巧分享/index.html","0becedbdbc8ce2e21aee5a9a8cfad395"],["/categories/经验/index.html","f377d4645bca7b1f396ca8f12c3a25f9"],["/categories/面试/index.html","5616ea3fc2e52b8a96f66ebadf9f1245"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","0c06aef84d81dc041e3cd48c351c442c"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","85a0e6ca1cf9ad4846fa7b1e630e1fa6"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4c10c22827cfb1cd9a4c20cc8ab4431d"],["/page/3/index.html","73b0e68218a6998fb827611656cb4947"],["/post/17c79a2f.html","515c3fa131a12511c3009fdc5b794d84"],["/post/4a1b603.html","e59b52fda14781b22e6dcf554eb0119e"],["/post/4c5eb723.html","4fe442829d36046d16f2f5cac1711fae"],["/post/5d715b31.html","cdb7d09ded4626ae9a5272304fc9ba1f"],["/post/5d81f735.html","234685e5e07fbc2bfa54ca45b267c29a"],["/post/752ec13d.html","b77f3550cf895499b2c13eb5177f0db0"],["/post/795293fc.html","6e5ade9df9e8b9e799c8c232083a48dd"],["/post/79a8e3a5.html","71c8aea12c5b1458ca70198ebbc774ac"],["/post/8ab4a728.html","6f8aff5c669a05c650fa3ca51c8f80c9"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","7901c6e094d23ed57498a01906730dd9"],["/post/9a1684cf.html","95fc282d7010a179e50bc2ad38d8304f"],["/post/a2a378f1.html","90fa5b526c6aaf46bb17b1641564d277"],["/post/a2d9c915.html","7c19e047129ea3270882abef539b8b96"],["/post/a8531bad.html","41399831fdfaac09be69d6774491f3a3"],["/post/android-base-guide.html","37be71a95ab822920f662dbd22dd7e7c"],["/post/android-main-point.html","818f8c3c715accae296d6f552c3e8efd"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","bb8a493fa8e5fc33d41254dab79391e2"],["/post/c36dcexp67b.html","d0794966d10c11f5a804d7bd02b6e88e"],["/post/d0bfb046.html","2716cf235761800ef0aa23b93899ccfa"],["/post/ef2b76b.html","f6ff4680cedea4c01d902051c90a5fac"],["/post/exp-hexo-base.html","a07f2cf47f1e153eb27027efb2fb9c45"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","f3e8c5d57df0d65c6a88ee1d7200fe95"],["/post/f887fa47.html","ead92c908cf3bf602dfc03384ec06a80"],["/post/java-base-guide.html","8b4f5e9d035ac63b42095dcacf61147f"],["/sw-register.js","187b3e876f15aa7d7bb2fcd4fcfe52df"],["/tags/Java/index.html","c64d604e4fb9daadb98665388082a01d"],["/tags/android/index.html","4a08e8806a82cb313f3dcc7aa376f3c0"],["/tags/index.html","d49e77e6a7ee18c31131e513689fec0b"],["/tags/python/index.html","9707e924212cc5d91070fa8bcfedbcc9"],["/tags/大纲/index.html","ad68002a24dd9808dff960ed39779ed2"],["/tags/开发/index.html","ed92205e2fff0db6a1853f6b06fa3a2f"],["/tags/技巧/index.html","ffe7e506c728aaa473d0c14ffd52ba88"],["/tags/技能/index.html","bf8be78a62af9e27457a4ca2a27a55b1"],["/tags/故事/index.html","2e665cae5e7189b43a4859d1c3c69926"],["/tags/游戏/index.html","39bd5c686bfec67e50893b5989a174b5"],["/tags/算法/index.html","df0e5151d86811b30bed9939fc8f5cb4"],["/tags/经验/index.html","97d1bb4e1a6614fcc2f7dd55146542d0"],["/tags/面试/index.html","983dbbedfdef26b6860eaf2bc6a4ddb7"],["/产品/index.html","06a9cd3f3c22985128e29df5fdad8828"],["/团队/index.html","d756ab2e472d65497967de890a8507ac"],["/方法论/index.html","935ac80e50a5ddb0cf8c171050b1a5d4"],["/设计模式/index.html","2c2f6307d978df602dc468e683268a50"],["/面试/index.html","bc3dfe01144c86d0b0f25077af1d8e9f"]];
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
