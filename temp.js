// ==UserScript==
// @name         Innis script 1
// @namespace    https://www.enjoycoding.me/
// @version      0.1
// @description  hello new world!
// @author       Innis
// @match        https://zhihu.com/*
// @match        https://juejin.cn/*
// @match        https://www.notion.so/*
// @icon         https://utoolsfigurebed.oss-cn-hangzhou.aliyuncs.com/logoIcon.png
// @grant        GM_log
// @grant GM_notification
// @license      MIT
// ==/UserScript==

(function () {
    'use strict';
    GM_log("Hello World");
    GM_notification({
        title: 'Hello World! title',
        text: 'Hello World! content',
        timeout: 5000,
        onclick: function () {
            GM_log("Hello World2");
        }
    });
})();
