/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","7e0d429b2031be89586fe856eff68e22"],["/Framework/index.html","a54425c615432262390c76e35dd2e349"],["/Java/index.html","e705aab5370246e467ff8e706cb15548"],["/about/index.html","8c59e0f50d504959bef836ef725172c1"],["/archives/2024/06/index.html","ea35aec75af450fae5a64050ee5b1ebd"],["/archives/2024/07/index.html","642af561f32ab25b870c7a929f830c9a"],["/archives/2024/07/page/2/index.html","2daffbb0d17b818246c3103069064a3b"],["/archives/2024/index.html","9ddd73754ffb04a9290981ab395a4022"],["/archives/2024/page/2/index.html","12c3bdc4006110e1433f02c15acd3fc2"],["/archives/2025/03/index.html","7cd32c2ddb4242862eaf213fb8bfdda5"],["/archives/2025/index.html","578344bf209ef3b55606210d856d1af6"],["/archives/index.html","383c24f07b6a1a375626843e5e7c9ae4"],["/archives/page/2/index.html","703e5ffa74cd9e8bf250537335b8e0ba"],["/archives/page/3/index.html","c9215862e946f191dee91f1a559f3dd9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","43d5f97c4bea8fe716b2bd6c75790811"],["/categories/Java/index.html","0dda8605a8edc4079f0d4a327f11a8fa"],["/categories/index.html","02eca002f6c98d6c8d329afee1563c3d"],["/categories/大纲/index.html","8962c009eb655656c853040b58df5a39"],["/categories/技巧分享/index.html","1c8ae965bb753bee3682fb36bd346b90"],["/categories/经验/index.html","b0e6a251e6dbc25870d610974efbeb6e"],["/categories/面试/index.html","a7f922ec6e505b2457e89860279a2066"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","224cd60ccbf40b1f4004d2f6df2a35af"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","b47ccb78787fb5222a9c00582e17c5d0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","20509cc8f2552f02cb4d2bf17fee0e70"],["/page/3/index.html","50ad8bd7e5da241621ef8e4f5892b4e4"],["/post/17c79a2f.html","515c3fa131a12511c3009fdc5b794d84"],["/post/4a1b603.html","e59b52fda14781b22e6dcf554eb0119e"],["/post/4c5eb723.html","4fe442829d36046d16f2f5cac1711fae"],["/post/5d715b31.html","cdb7d09ded4626ae9a5272304fc9ba1f"],["/post/5d81f735.html","e7bac5b1e37b2db28e9b8aa361e443f0"],["/post/752ec13d.html","b77f3550cf895499b2c13eb5177f0db0"],["/post/795293fc.html","6e5ade9df9e8b9e799c8c232083a48dd"],["/post/79a8e3a5.html","71c8aea12c5b1458ca70198ebbc774ac"],["/post/8ab4a728.html","6f8aff5c669a05c650fa3ca51c8f80c9"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","7901c6e094d23ed57498a01906730dd9"],["/post/9a1684cf.html","95fc282d7010a179e50bc2ad38d8304f"],["/post/a2a378f1.html","90fa5b526c6aaf46bb17b1641564d277"],["/post/a2d9c915.html","7c19e047129ea3270882abef539b8b96"],["/post/a8531bad.html","41399831fdfaac09be69d6774491f3a3"],["/post/android-base-guide.html","37be71a95ab822920f662dbd22dd7e7c"],["/post/android-main-point.html","4d868071fd3aea7b1da5b51f39968434"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","bb8a493fa8e5fc33d41254dab79391e2"],["/post/c36dcexp67b.html","d0794966d10c11f5a804d7bd02b6e88e"],["/post/d0bfb046.html","2716cf235761800ef0aa23b93899ccfa"],["/post/ef2b76b.html","f6ff4680cedea4c01d902051c90a5fac"],["/post/exp-hexo-base.html","a07f2cf47f1e153eb27027efb2fb9c45"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","f3e8c5d57df0d65c6a88ee1d7200fe95"],["/post/f887fa47.html","ead92c908cf3bf602dfc03384ec06a80"],["/post/java-base-guide.html","4a531aff61da130fca0fb300c0369e20"],["/sw-register.js","a31b7f04257e6e6af569d8d3a2cb15f4"],["/tags/Java/index.html","fd7ddadd5f6eaaa4ac6bd7da657d4d41"],["/tags/android/index.html","d95d9075fc3367d4d2d93aff8af00970"],["/tags/index.html","4f7b7dc114c844c97e74688f41f7eaf6"],["/tags/python/index.html","bbaba60f557ec7415e6f07c98eb67acf"],["/tags/大纲/index.html","d160ed6e596fbf00caf1289e5a20633c"],["/tags/开发/index.html","51c70a90c3152312cb9a3e834715ab8e"],["/tags/技巧/index.html","be33047d34b08ccff07c7a9163139a96"],["/tags/技能/index.html","db16f43a225e2dcaace014a5a3ad4393"],["/tags/故事/index.html","47be0b42938bfdcb02ab803bbf1f0ef2"],["/tags/游戏/index.html","3ecb3599dc5213bbb9ffb224af181e2b"],["/tags/算法/index.html","6e7bf4ac55bfb62bce5ba6a0aeab91b5"],["/tags/经验/index.html","3ced5877ae74e964da2844fc247e166f"],["/tags/面试/index.html","057b9ed5101b6edff854f74e933a3600"],["/产品/index.html","7120357250aaf094709b61b1ef34e5e5"],["/团队/index.html","81ba469943b7c485b7591e2fd5a947be"],["/方法论/index.html","cd9db07d9ca702fa62c7b4d634e7a1f7"],["/设计模式/index.html","a6dbc7d2a11721c3fc3a4b8867b0148e"],["/面试/index.html","0762fd0457bec965d5c6638834fd483a"]];
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
