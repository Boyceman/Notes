##requirejs
```javascript
(function (root, factory) {
 if (typeof define === 'function' && define.amd) {
 define(['jquery'], function ($) {
     return (root.xUtils = factory($));
     });
 } else if (typeof module === 'object' && module.exports) {
 module.exports = (root.xUtils = factory(require('jquery')));
 } else {
 root.xUtils = factory(root.jQuery);
 }
 }(this, function ($) {}))
```
