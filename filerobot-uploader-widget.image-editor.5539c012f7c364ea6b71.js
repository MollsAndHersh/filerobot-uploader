(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{561:function(e,r,t){"use strict";t.r(r);var o=t(1),n=t.n(o),a=t(708),i=t.n(a);function l(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],o=!0,n=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!r||t.length!==r);o=!0);}catch(e){n=!0,a=e}finally{try{o||null==l.return||l.return()}finally{if(n)throw a}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(r){u(e,r,t[r])})}return e}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=function(e,r){"TAGGING"===e?r(!0,"TAGGING","MY_GALLERY"):r(!1)},s=function(e,r,t,o,n){"TAGGING"===e?(o([c({},t,{public_link:t.url_permalink})]),n(!0,"TAGGING")):n(!1)},d=function(e){var r=e.appState,t=e.files,o=l(t=void 0===t?{}:t,1)[0],a=void 0===o?{}:o,u=e.path,d=e.saveUploadedFiles,f=e.setPostUpload,m=r.prevTab,_=r.config,g=_.uploadKey,y=_.container,b=_.uploadParams,E={filerobotUploadKey:g,filerobotContainer:y,processWithCloudimage:"gif"===a.url_permalink.slice(-3).toLowerCase(),uploadWithCloudimageLink:!0,cloudimageToken:"demo",uploadParams:c({},b,{dir:u||b.dir})};return n.a.createElement(i.a,{show:!0,config:E,closeOnLoad:!1,src:a.url_permalink,onComplete:function(e,r){s(m,0,r,d,f)},onClose:function(){p(m,f)},showGoBackBtn:!0,showInModal:!1})};r.default=d;"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"goBack","/Users/dmitry/2017/airstore-uploader-react/projects/react-plugin/components/imageEditor/ImageEditorWrapper.js"),__REACT_HOT_LOADER__.register(s,"onComplete","/Users/dmitry/2017/airstore-uploader-react/projects/react-plugin/components/imageEditor/ImageEditorWrapper.js"),__REACT_HOT_LOADER__.register(d,"default","/Users/dmitry/2017/airstore-uploader-react/projects/react-plugin/components/imageEditor/ImageEditorWrapper.js"))}}]);