##requireJs
> custom.js

```js
(function (root, factory) {
if (typeof define === 'function' && define.amd) {
  // AMD
  define(['jquery', 'underscore'], factory);
} else if (typeof exports === 'object') {
  // Node, CommonJs-like
  module.exports = factory(require('jquery'), require('underscore'));
} else {
  // Browser globals(root is window)
  root.custom = factory(root.jQuery, root._);
}
}(this, function ($, _) {
	...
}))
```

##remove one param in url's search
```js
function formatUrl(string) {
	let url = window.location.hostname + window.location.pathname;
    let arr = window.location.search.split('&');
    let opt = window.location.href.split('#')[1];
    for(let i = 0,len = arr.length; i < len; i++){
        if(arr[i].indexOf(string + '=') !== -1){
            arr.splice(i,1)
        }
    }
	return url + arr.join('&') + '#' + opt;
}
```

##rxjs flatMap VS map
```js
['a','b','c'].flatMap((e) => {
	return [e, e+'x', e+'y', e+'z'];
})
//['a','ax','ay','az','b','bx','by','bz','c','cx','cy','cz']

['a','b','c'].map((e) => {
	return [e, e+'x', e+'y', e+'z'];
})
//[Array[4], Array[4], Array[4]]
```

## http Content-Type 字段值列表 摘自阮一峰老师文章
- text/plain
- text/html
- text/css
- image/jpeg
- image/png
- image/svg+xml
- audio/mp4
- video/mp4
- application/javascript
- application/pdf
- application/zip
- application/atom+xml

## 弹性触底 `cubic-bezier(0.36, -0.64, 0.34, 1.76)`

## nodejs服务遇到html内的js文件全都变成了html

报错信息` Uncaught SyntaxError: Unexpected token` 

去检查路径吧，一定是路径搞错了
