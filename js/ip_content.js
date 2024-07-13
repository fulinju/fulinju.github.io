//获取当前IP地址和浏览器标识
function getBrowserInfo() {
    var agent = navigator.userAgent.toLowerCase();

    var regStr_ie = /msie [\d.]+;/gi;
    var regStr_ff = /firefox\/[\d.]+/gi
    var regStr_chrome = /chrome\/[\d.]+/gi;
    var regStr_saf = /safari\/[\d.]+/gi;

    //IE
    if (agent.indexOf("msie") > 0) {
        return agent.match(regStr_ie);
    }

    //firefox
    if (agent.indexOf("firefox") > 0) {
        return agent.match(regStr_ff);
    }

    //Chrome
    if (agent.indexOf("chrome") > 0) {
        return agent.match(regStr_chrome);
    }

    //Safari
    if (agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0) {
        return agent.match(regStr_saf);
    }
}

// ip_content.js

// 确保代码在页面加载时可以直接执行，但需要确保 ip_content 元素在这段代码执行时已经存在于 DOM 中

async function fetchIPInfo() {
    const url = 'https://myip.ipip.net/json';

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.ret === 'ok') {
            const ip = data.data.ip;
            const locationArray = data.data.location;

            // 过滤空值并去掉最后一个值和最后一个逗号
            const filteredLocation = locationArray.filter(Boolean);
            const location = filteredLocation.length > 1 ? filteredLocation.slice(0, -1).join('-') : filteredLocation[0];

            // 打印 IP 和位置信息到控制台
            console.log(`IP: ${ip}`);
            console.log(`位置: ${location}`);

            // 插入到指定的 HTML 元素中
            const ipContentElement = document.querySelector(".ip_content");
            if (ipContentElement) {
                ipContentElement.innerHTML = `欢迎来自 <span class="p">${location}</span> 的小伙伴<br>访问IP为： <span class='p'>${ip}</span><br>浏览器版本：<span class='p'>${navigator.userAgent}</span>`;
            } else {
                console.error('找不到类名为 ip_content 的元素');
            }
        } else {
            console.error('请求失败或返回数据格式错误');
        }
    } catch (error) {
        console.error('发生网络错误:', error);
    }
}

// 调用函数获取 IP 信息
fetchIPInfo();

// var ip_content = document.querySelector(".ip_content");

// if (ip_content != null && typeof (returnCitySN) != undefined) {
//     ip_content.innerHTML = '欢迎来自 <span class="p">' 
//     + returnCitySN["cname"] + "</span> 的小伙伴<br>" 
//     + "访问IP为： <span class='p'>" + returnCitySN["cip"] 
//     + "</span><br>浏览器版本：<span class='p'>" + getBrowserInfo() + '</span>';
// }