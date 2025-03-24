/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","6197b2d7fab833ec955414db77bb8471"],["/Framework/index.html","1a329ce390492a9e2094f5f784ed03cb"],["/Java/index.html","a7063d8b1d5b1fcf926aaa08010aceae"],["/about/index.html","918ef476d7d81cb1105d7c19ec658404"],["/archives/2024/06/index.html","ff8b0078bfaab08bdee291a8cefe99c2"],["/archives/2024/07/index.html","7a57488f04b60b2a98e7a40927ae0f54"],["/archives/2024/07/page/2/index.html","9e7a6a8a1dde3b122fde0c965d897ffe"],["/archives/2024/index.html","cc3bf20b6354162fef0d52afac4fc44a"],["/archives/2024/page/2/index.html","8fe0d20d6732d3f5abfc60f9322669c3"],["/archives/2025/03/index.html","5a55a7efbba81cde0c456148b30d89b1"],["/archives/2025/index.html","aeeefc38f7cc43d7f5b59b178768cbd8"],["/archives/index.html","b0fdce583c7ec644f987bbddf738b8fd"],["/archives/page/2/index.html","e19ebe3497b4543781d3a380c567cf4f"],["/archives/page/3/index.html","1c57623e2155687bac55cdb085a03738"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","358e2673b023616b49aaab0c24a18d7d"],["/categories/Java/index.html","0144dfa81b992297fd4d3ebdc3a9b917"],["/categories/index.html","5fcc47572554d0a3f70b7968bec5bebd"],["/categories/大纲/index.html","a4fff50755b2c0dc28d7871eba832db1"],["/categories/技巧分享/index.html","02ac51ec5b4415b647befa4edfe9f90d"],["/categories/经验/index.html","2e76dd254b81df862268eb938ac45563"],["/categories/面试/index.html","7acddbe7ca8d704e0bb374c77d7997db"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","f78548ff52d43dabb3fd219c707dbf52"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","3f549494111511c9a6751b22c894d008"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7628f33936a6000c7ab27b69f9947f30"],["/page/3/index.html","5bf53fbeed0a2396ad72cf184a519974"],["/post/17c79a2f.html","1f30a4a302ded2a0b3b87662093256ff"],["/post/4a1b603.html","d35188d8485543aa03f15848d880fe45"],["/post/4c5eb723.html","055b8f23661a642f6580a822efa951d8"],["/post/5d715b31.html","99ea81b9f68c9c75cc86ca0210c67297"],["/post/5d81f735.html","624eb6a391a10f9d033d8b837ce3d478"],["/post/752ec13d.html","77efbe699bd480ff5f5035f2bc1d6421"],["/post/795293fc.html","4de9935f41ba7131e63ed26998de2cc0"],["/post/79a8e3a5.html","d8941850561425c4150e79b1910559e4"],["/post/8ab4a728.html","b86d8bd0f2f4a5b79d30519367b274df"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","b9e604526a137fc41ead14a4cac480a5"],["/post/9a1684cf.html","ce87169c8f79d08cbffe963cf95ab5c0"],["/post/a2a378f1.html","1cd1b9edf08a87ef64cf29fbb20c319f"],["/post/a2d9c915.html","62f389831b94bcc1188f42a1238fcae3"],["/post/a8531bad.html","712cda425f96ff5d92472f67d906059a"],["/post/android-base-guide.html","33699f7977a549e1b253c6cd1333d12e"],["/post/android-main-point.html","792d126eafd3b4998377aba8f6fa186c"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","97aec6671d7860998f07839f6853a88a"],["/post/c36dcexp67b.html","f4a49f6b72ad6683c6edec500a2d6dd0"],["/post/d0bfb046.html","c08fcaac3ce68a474d01dbe6e2fb9c76"],["/post/dc3e26d8.html","75d3e03ffaab9da560ddfd652234a805"],["/post/dc3e26d8/The-GitLab-Flow-2023-mr-pushing-code-portion.png","8b1d66d6e539f1fe8fbe3145b0f11c36"],["/post/dc3e26d8/git-feature-branch.png","da62ac4baa44ce986ec8a8e89d487317"],["/post/dc3e26d8/git-model.png","f3ecc3cf5b3902dbb1ff2356fe65e67e"],["/post/ef2b76b.html","27f0d6e190ffe51acbcbca97d703f4aa"],["/post/exp-hexo-base.html","f174bbb2d02a51b05c3b497e73f5ee47"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","d5b39ec0fcb0ab28abbdb2af4deef0e9"],["/post/f887fa47.html","020607e624d06a04eeaf9b4d931b66d6"],["/post/java-base-guide.html","be177a866da44b5edaa8aeb4724f1753"],["/sw-register.js","81fb721788ccc906786b25da56e40908"],["/tags/Java/index.html","884b79da31ce321d321872b49f7dab18"],["/tags/android/index.html","a656cb97f66d5eeaa1344d79d78723a5"],["/tags/index.html","82cc065c45be2e531700e59254ff285e"],["/tags/python/index.html","b6c2d88839575a6962288148b64a52d7"],["/tags/大纲/index.html","ced02067f82775ca0c6ab6a2af378ba7"],["/tags/开发/index.html","93bc6643eb0bf3159decd4cfe4130031"],["/tags/技巧/index.html","c23b50fef7a6ac6ae5117f377b2336b7"],["/tags/技能/index.html","5e70aaa1b3573a6aca610ade679b29f5"],["/tags/故事/index.html","a43d51ff9992100370886ada071ef121"],["/tags/游戏/index.html","745db8d423c0cbeee67aa0bd263b450a"],["/tags/算法/index.html","bd41af795bc46c76285f3b35ba420fc1"],["/tags/经验/index.html","052e92f807d8b6fabb2c611b581d286a"],["/tags/面试/index.html","1da28aeb65d78fedf22660758b35102a"],["/产品/index.html","e59b91e4b8ccb64bd8c5d399dcdcb494"],["/团队/index.html","2a84d74f007d68e946e490a0d7ac6f9c"],["/方法论/index.html","26fff559ffff7d1cdeda5c646fe1cf8a"],["/设计模式/index.html","207b3d07d5cdd5317c16fe6ad0f3983d"],["/面试/index.html","b17bf57e881b8a83e79c6fbae465110b"]];
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
