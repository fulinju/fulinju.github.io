/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c6a5aa15be48ddf3a3605c8d345e7a2f"],["/archives/2024/06/index.html","58a2e1a2e89f07c1421546edd0f14126"],["/archives/2024/07/index.html","65694767a50eb4d8eee19a0b00d1cff8"],["/archives/2024/07/page/2/index.html","2614c68693cb8b70ee7498b3f92181c1"],["/archives/2024/index.html","e3518f512e9a9a04e06e61c6a46b83ea"],["/archives/2024/page/2/index.html","a6e81b3fbf500eb68f6e4d74c72a4084"],["/archives/2025/03/index.html","0e1d7dc70d6f2a3be64af289275523ca"],["/archives/2025/index.html","7f8eff52d98787aacc7980025d53341b"],["/archives/index.html","dd11f1230f22ea1dfbfa693f7530720d"],["/archives/page/2/index.html","18db9bb5db1ef51b39728c8ca6c057fa"],["/archives/page/3/index.html","c2aa52e964c87bca6b698c858bad4a85"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","ca40416a9e21cae1dc7ce1441b9a38f9"],["/categories/Java/index.html","7ce31f255c6b4d0aa12de5f45b907735"],["/categories/index.html","e5bdfc5744cb38c2070c489a50cce468"],["/categories/大纲/index.html","7eb77c4ea3ebb8897e8e25c6d8fa1794"],["/categories/技巧分享/index.html","2d16d822b25a7738e21a5b9a4147df6c"],["/categories/经验/index.html","eb70b53122714dcd2611581925850685"],["/categories/面试/index.html","8700994a9e7cc34e0126e6f260b1b743"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","e2763c357cd40b12bc671dcd12d7084c"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e23fcca95517abd3967e1e60ab41f4cd"],["/page/3/index.html","70af9df689bbfcccb9db134c631f2189"],["/post/17c79a2f.html","1c3b46d9f1e52597dc5358a93d4d92ec"],["/post/4a1b603.html","b37182ff881de405a64b94c7b72e47f8"],["/post/4c5eb723.html","e6801c18c6230e91fc6a92208ae6d851"],["/post/5d715b31.html","6c7aa4347b2ae64cfd700ba074845355"],["/post/5d81f735.html","687a60f71477dacf4baef84a40fe22f0"],["/post/752ec13d.html","8108e6555c0d837b26c9e272b322830a"],["/post/795293fc.html","76106e6c97f7642ecbd55debe4f96b8c"],["/post/79a8e3a5.html","1fba808d230e12c97adaf79836b6420c"],["/post/8ab4a728.html","1d7706600efe996a0e5e6ee77d875383"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","f45282962377bef2eb6715ef5ea6d115"],["/post/9a1684cf.html","4f70850d86c62da58f9f82859af73530"],["/post/a2a378f1.html","11f2be4bba33f8da3cbfea381b375910"],["/post/a2d9c915.html","1a1963c9c3e9d6a881e359fdd8b5d6b4"],["/post/a8531bad.html","875386ca855e13e5fce892fec2aa3473"],["/post/android-base-guide.html","b298d9fa4b59609311b38a6682a5fc8f"],["/post/android-main-point.html","25a385260545e65455e3e749adcf67f5"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","8e2031aca54c3cd33cfee6f19a75f660"],["/post/c36dcexp67b.html","9743946a3c8c1ffe3b219c8dccb28e72"],["/post/d0bfb046.html","7452d4f0b62da4f4bde9f77f3814d80f"],["/post/ef2b76b.html","66cd0550e187f67ef2a52cbba4fe5fcb"],["/post/exp-hexo-base.html","52ea6c1b13f95d6e1e26dcf203ce9e30"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","713f3061f0cb9b35cb01db286d1c9e76"],["/post/f887fa47.html","8b6755265119592414d0e10e66c5297e"],["/post/java-base-guide.html","80b9c4352dc5947a2e6845910ad87292"],["/sw-register.js","a5408dd0ad8007f3358313a180fbd92e"],["/tags/Java/index.html","0a969cdf234a75a4c83798ef26a63930"],["/tags/android/index.html","af617b3a5a0b9272b6979114f49b7303"],["/tags/index.html","5cdd721607a7724458f4d1244a511aea"],["/tags/python/index.html","a36706b3da0f39af74b8504fbdc011cb"],["/tags/大纲/index.html","5900cd179a8a67bc343baa76ec801c03"],["/tags/开发/index.html","6acf578766d42b7b8898c4561fb5f228"],["/tags/技巧/index.html","4aea454d76dcdbc900678d510c5c1f4e"],["/tags/技能/index.html","45a4bae540482e8815b6927630e1bd31"],["/tags/故事/index.html","945b9f924cae8a35ddf7772639a7ad68"],["/tags/游戏/index.html","ddf3ce4aa6df113ca6cb250deff2fd91"],["/tags/算法/index.html","a3d38af73e0c0ae155e3b2be6d704beb"],["/tags/经验/index.html","3078da27c1122b14c929e21df622f56d"],["/tags/面试/index.html","c4ed7f9231af8bd34f8e218c551145f4"]];
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
