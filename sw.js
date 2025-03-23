/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Android/index.html","330c9486af7e3250a9981b77ab567c75"],["/Framework/index.html","3739095fbf5fa028f58fce57e0826af1"],["/Java/index.html","f6d1e5c597f3dac6cc15d0abf10915c3"],["/about/index.html","6b977aaab6173adef9af593bef755f2a"],["/archives/2024/06/index.html","bec429c232a3e165ca579040c2f5cb5c"],["/archives/2024/07/index.html","f226ac5ea82ddb2fbb95deb86de08ed3"],["/archives/2024/07/page/2/index.html","8c915e39595903f626d78bbcea361e62"],["/archives/2024/index.html","f311e78d6727ab0fc3eafb371e60a93e"],["/archives/2024/page/2/index.html","6329a5412d301a2977c1732a6f98c9e2"],["/archives/2025/03/index.html","3e4c8cbd977f427ddd3f918615dcecd2"],["/archives/2025/index.html","8693bd0574f5202f687585b110b8311f"],["/archives/index.html","d9cd2da371ffb32fe5d20c058cc61893"],["/archives/page/2/index.html","d90e8a3850fb664e701e3ba68f3bbbc4"],["/archives/page/3/index.html","aeb5d7c62082f9473130a19e601bcda9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Android/index.html","1729ea90a8b4ade4c6c075d2e3d54ed2"],["/categories/Java/index.html","3af0f751b29cc67c990dbf7f6cf03e17"],["/categories/index.html","5bddc0ca4ceb856fa6abfcc927d57219"],["/categories/大纲/index.html","71a105e869c0141d4df7353dbf0c7dd8"],["/categories/技巧分享/index.html","54aafee95f58cd5a7093f59f28126f89"],["/categories/经验/index.html","fc680be100acd4104a0e38ae42a4db6f"],["/categories/面试/index.html","0ef2a8a4926154200186f94abaa98592"],["/css/index.css","9c305a5aca5df0da5ea670da9a3ff344"],["/css/mouse.css","d9bfcdadf5f976c011c8edaac1aded71"],["/css/prism.css","f2c5a96cd675919b8b29a8dd667b6104"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","42c79f8ea6a81db0cb037e8fe54c0ca5"],["/img/background.png","d6623bf4a91e29b97103653c03dab925"],["/img/favicon.png","47bd071d478e2de4e20d1e43a001f884"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/wechat.jpg","82d1ccdd95c9c5a38f23d2edd1daa809"],["/imgs/test.png","df1a4531f1be0f94179927a92f21dc33"],["/index.html","fb287f493d24afc19a81d05c28c02af9"],["/js/ip_content.js","1a8478cbd234210978909c0bf805fdd7"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/link/index.html","4b37a74fcd21b784732e188ae0940ec4"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","050e32257141a31f340bf4af27977ff9"],["/page/3/index.html","217c23f1ea857f739838a9e1bd3e5ec2"],["/post/17c79a2f.html","54c53785f822c96421dce23141dacc5e"],["/post/4a1b603.html","ff335011cc590f06115c8df2dfaeb861"],["/post/4c5eb723.html","b5d0529eb687f77977175dd2bd0ade3a"],["/post/5d715b31.html","9f469f8dbb964d8325fc9a90cfe87a5f"],["/post/5d81f735.html","43b8328992f3b148aba2b790421e8ca4"],["/post/752ec13d.html","9e2e7e6e3d39371637d7a6c4119d90df"],["/post/795293fc.html","7269e8c34b0717dfedae1364433fce01"],["/post/79a8e3a5.html","19f22ce5d8bac1e14cc70b8bd0aede28"],["/post/8ab4a728.html","6d28f53a63d6710f659417e91edcb26b"],["/post/8ab4a728/Handler工作原理.png","658c651d2a98029bb499e603b108faab"],["/post/8ab4a728/Handler知识点脑图.png","b56b49c7a8a4026941d0ac02e0c442a1"],["/post/94392a3.html","b4df4f3d9d41f3a0d9f9a39e7568ff1b"],["/post/9a1684cf.html","6c67becfa62c9b958c023d752e00afc4"],["/post/a2a378f1.html","a49b02e04e4b4e3a1aa91dae665bbcf4"],["/post/a2d9c915.html","d4c93614b72eec55cabf49260b02e7fb"],["/post/a8531bad.html","df4496cba5c75426e0d94bffe65c64e6"],["/post/android-base-guide.html","eab59dd77aa09c273ef962dadc9c7876"],["/post/android-main-point.html","70e1e655c1c5f6cc9959825bae90f0cb"],["/post/android-main-point/test.png","df1a4531f1be0f94179927a92f21dc33"],["/post/b5369373.html","192da377c96119f79b41e574ba72c8a4"],["/post/c36dcexp67b.html","1e683756bece7754e9a0456ef3d6f9ab"],["/post/d0bfb046.html","50139818154a75b9a4cdff49bc5b3967"],["/post/ef2b76b.html","9eab69e61d68bdbf086bb9d80e63ab75"],["/post/exp-hexo-base.html","6730dabb6426fd77fd914b9dfa281d82"],["/post/exp-hexo-base/test.png","d6623bf4a91e29b97103653c03dab925"],["/post/exp-hexo-butterfly.html","e308eb556ebc4d2d370b787a9d6a2f0b"],["/post/f887fa47.html","48044fae8868921cb8c1c4fd16a3051c"],["/post/java-base-guide.html","5e867c006df62c40b5681b5c311ecaea"],["/sw-register.js","693695cfee865649e205291dc2473c71"],["/tags/Java/index.html","985be1039ff65d4fe9e81de0b6833797"],["/tags/android/index.html","5112e64cc675a55b935fc8e85cfef1d9"],["/tags/index.html","537fb5acc20ada815db09c75ca7b82fa"],["/tags/python/index.html","7c61b90dd800b25041c2a8a6295e1450"],["/tags/大纲/index.html","cd0f074830da45898a6329591a87c8fb"],["/tags/开发/index.html","ee70a33516988d4337917718659f56a8"],["/tags/技巧/index.html","d03d8add20f4cfe09f8bc9f08e606e14"],["/tags/技能/index.html","61d471ccc9a228122d1b9fe7a4583609"],["/tags/故事/index.html","96f2629ca2e5dc1dfa57e21848c6aa8f"],["/tags/游戏/index.html","039a5c2a69ca57a592d483456f9b1e85"],["/tags/算法/index.html","b3afe44d97c8093f18a830a4e5468253"],["/tags/经验/index.html","a0d5ed7f527e3acf8bfa8db8f80686b9"],["/tags/面试/index.html","eff041be2bd05522d398193dfbe01171"],["/产品/index.html","d21533c0e84481e26661504706923cba"],["/团队/index.html","bc6aed6023ac7841ed4602848e194d4b"],["/方法论/index.html","4b0b2f352cf4125a098eca783277d72f"],["/设计模式/index.html","dbf2b76a4931dda2c70da200777f58be"],["/面试/index.html","052350b8acf30d2d32c5294af29f5ff6"]];
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
