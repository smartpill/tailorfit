# TailorFit

## jQuery plugin that fits and centers elements within their containers.

Tested on all user-agents available on Chrome 26 dev tools:
* IE 7+
* FF 4+
* iOS 3+ (iPad and iPhone)
* Android
* BlackBerry
* MeeGo
    
* [Screenshots](http://dev.fhmp.net/tailorfit/browsertest/results/) of tests done on browsershots.org:


### Latest version will always be hosted at 
> http://dev.fhmp.net/tailorfit/tailorfit-latest-min.js

## [Demo](http://dev.fhmp.net/tailorfit/demo/)

#### Usage
```javascript
    $('#container > img').load(function(){
        // maxWidth, maxHeight, maintain aspect ratio
        $(this).tailorfit({
                maxWidth  : this.width,
                maxHeight : this.height
        });
    });
```
