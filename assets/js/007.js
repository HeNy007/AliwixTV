 !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("darkmode-js",[],t):"object"==typeof exports?exports["darkmode-js"]=t():e["darkmode-js"]=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};o.get||o.set?Object.defineProperty(t,n,o):t[n]=e[n]}return t.default=e,t}(n(1));var r=o.default;t.default=r,o.IS_BROWSER&&function(e){e.Darkmode=o.default}(window),e.exports=t.default},function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.IS_BROWSER=void 0;var r="undefined"!=typeof window;t.IS_BROWSER=r;var a=function(){function e(t){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r){t=Object.assign({},{bottom:"32px",right:"32px",left:"unset",time:"0.3s",mixColor:"#fff",backgroundColor:"#fff",buttonColorDark:"#100f2c",buttonColorLight:"#fff",label:"",saveInCookies:!0,autoMatchOsTheme:!0},t);var n="\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(t.mixColor,";\n        transition: all ").concat(t.time," ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(t.right,";\n        bottom: ").concat(t.bottom,";\n        left: ").concat(t.left,";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n\n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n\n      .darkmode-toggle {\n        background: ").concat(t.buttonColorDark,";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        border:none;\n        right: ").concat(t.right,";\n        bottom: ").concat(t.bottom,";\n        left: ").concat(t.left,";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n\n      .darkmode-toggle--white {\n        background: ").concat(t.buttonColorLight,";\n      }\n\n      .darkmode-toggle--inactive {\n        display: none;\n      }\n\n      .darkmode-background {\n        background: ").concat(t.backgroundColor,";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n\n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n\n      @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n        .darkmode-toggle {display: none !important}\n      }\n\n      @supports (-ms-ime-align:auto), (-ms-accelerator:true) {\n        .darkmode-toggle {display: none !important}\n      }\n    "),o=document.createElement("div"),a=document.createElement("button"),i=document.createElement("div");a.innerHTML=t.label,a.classList.add("darkmode-toggle--inactive"),o.classList.add("darkmode-layer"),i.classList.add("darkmode-background");var d="true"===window.localStorage.getItem("darkmode"),s=t.autoMatchOsTheme&&window.matchMedia("(prefers-color-scheme: dark)").matches,l=null===window.localStorage.getItem("darkmode");(!0===d&&t.saveInCookies||l&&s)&&(o.classList.add("darkmode-layer--expanded","darkmode-layer--simple","darkmode-layer--no-transition"),a.classList.add("darkmode-toggle--white"),document.body.classList.add("darkmode--activated")),document.body.insertBefore(a,document.body.firstChild),document.body.insertBefore(o,document.body.firstChild),document.body.insertBefore(i,document.body.firstChild),this.addStyle(n),this.button=a,this.layer=o,this.saveInCookies=t.saveInCookies,this.time=t.time}}var t,n,a;return t=e,(n=[{key:"addStyle",value:function(e){var t=document.createElement("link");t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href","data:text/css;charset=UTF-8,"+encodeURIComponent(e)),document.head.appendChild(t)}},{key:"showWidget",value:function(){var e=this;if(r){var t=this.button,n=this.layer,o=1e3*parseFloat(this.time);t.classList.add("darkmode-toggle"),t.classList.remove("darkmode-toggle--inactive"),t.setAttribute("aria-label","Activate dark mode"),t.setAttribute("aria-checked","false"),t.setAttribute("role","checkbox"),n.classList.add("darkmode-layer--button"),t.addEventListener("click",(function(){var r=e.isActivated();r?(n.classList.remove("darkmode-layer--simple"),t.setAttribute("disabled",!0),setTimeout((function(){n.classList.remove("darkmode-layer--no-transition"),n.classList.remove("darkmode-layer--expanded"),t.removeAttribute("disabled")}),1)):(n.classList.add("darkmode-layer--expanded"),t.setAttribute("disabled",!0),setTimeout((function(){n.classList.add("darkmode-layer--no-transition"),n.classList.add("darkmode-layer--simple"),t.removeAttribute("disabled")}),o)),t.classList.toggle("darkmode-toggle--white"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!r)}))}}},{key:"toggle",value:function(){if(r){var e=this.layer,t=this.isActivated(),n=this.button;e.classList.toggle("darkmode-layer--simple"),document.body.classList.toggle("darkmode--activated"),window.localStorage.setItem("darkmode",!t),n.setAttribute("aria-label","De-activate dark mode"),n.setAttribute("aria-checked","true")}}},{key:"isActivated",value:function(){return r?document.body.classList.contains("darkmode--activated"):null}}])&&o(t.prototype,n),a&&o(t,a),e}();t.default=a}])}));
    function addDarkmodeWidget() {
    new Darkmode().showWidget();
    }
    window.addEventListener('load', addDarkmodeWidget);
     const options = {
  bottom: '64px', // default: '32px'
  left: 'unset', // default: '32px'
  right: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
  }
   const darkmode = new Darkmode(options);
  darkmode.showWidget();





document.addEventListener('DOMContentLoaded', function(event) {
      window.cookieChoices && cookieChoices.showCookieConsentBar && cookieChoices.showCookieConsentBar(
          (window.cookieOptions && cookieOptions.msg) || 'Diese Website verwendet Cookies von Google, um Dienste anzubieten und Zugriffe zu analysieren. Deine IP-Adresse und dein User-Agent werden zusammen mit Messwerten zur Leistung und Sicherheit f\xfcr Google freigegeben. So k\xf6nnen Nutzungsstatistiken generiert, Missbrauchsf\xe4lle erkannt und behoben und die Qualit\xe4t des Dienstes gew\xe4hrleistet werden.',
          (window.cookieOptions && cookieOptions.close) || 'OK',
          (window.cookieOptions && cookieOptions.learn) || 'Weitere Informationen',
          (window.cookieOptions && cookieOptions.link) || 'https://www.blogger.com/go/blogspot-cookies');
    });
//<![CDATA[
   //JS Cookie    // createCookie (name,value,days) // readCookie(name) // eraseCookie(name)
  function createCookie(c,d,e){if(e){var b=new Date();b.setTime(b.getTime()+(e*60*1000));var a="; expires="+b.toGMTString()}else{var a=""}document.cookie=c+"="+d+a+"; path=/"}function readCookie(b){var e=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var f=a[d];while(f.charAt(0)==" "){f=f.substring(1,f.length)}if(f.indexOf(e)==0){return f.substring(e.length,f.length)}}return null}function eraseCookie(a){createCookie(a,"",-1)};
   // tab bug fix
  $( document ).ready(function() {
  if( document.querySelectorAll('[id^=tab].tab.tab_content').length > 1){
  var textBoxes = document.querySelectorAll('[id^=tab].tab.tab_content');
  for(var i in textBoxes){
  if(i = 0){} else {
  textBoxes[i].style.display="none";
  }
  }
  }
  });
  //]]>
_WidgetManager._RegisterWidget('_HeaderView', new _WidgetInfo('Header1', 'headercontent', document.getElementById('Header1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML35', 'alcssmenu', document.getElementById('HTML35'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML20', 'news-slider-col', document.getElementById('HTML20'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML4', 'korapost', document.getElementById('HTML4'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML992', 'korapost', document.getElementById('HTML992'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML991', 'korapost', document.getElementById('HTML991'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'korapost', document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/1416520984-lbx__ar.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/1050234869-lightbox_bundle_rtl.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML903', 'korapost', document.getElementById('HTML903'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML900', 'korapost', document.getElementById('HTML900'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML106', 'korapost', document.getElementById('HTML106'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML108', 'korapost', document.getElementById('HTML108'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_LinkListView', new _WidgetInfo('LinkList56', 'social-counter', document.getElementById('LinkList56'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML1', 'sidebar-wrapper', document.getElementById('HTML1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_LabelView', new _WidgetInfo('Label1', 'sidebar-wrapper', document.getElementById('Label1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_LabelView', new _WidgetInfo('Label2', 'sidebar-wrapper', document.getElementById('Label2'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML2', 'sidebar-wrapper', document.getElementById('HTML2'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_FeedView', new _WidgetInfo('Feed1', 'sidebar-wrapper', document.getElementById('Feed1'), {'title': '', 'showItemDate': false, 'showItemAuthor': false, 'feedUrl': 'http://live.coolkora.com/feeds/posts/default', 'numItemsShow': 5, 'loadingMsg': '\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...', 'openLinksInNewWindow': false, 'useFeedWidgetServ': 'true'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML5', 'sidebar-wrapper', document.getElementById('HTML5'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML8', 'gallery', document.getElementById('HTML8'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML52', 'alba-tabs-wid', document.getElementById('HTML52'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML21', 'tab1', document.getElementById('HTML21'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML22', 'tab2', document.getElementById('HTML22'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML23', 'tab3', document.getElementById('HTML23'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML24', 'tab4', document.getElementById('HTML24'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML25', 'tab5', document.getElementById('HTML25'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML26', 'all', document.getElementById('HTML26'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML43', 'footer-custom_text', document.getElementById('HTML43'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML17', 'alba-vcover-item', document.getElementById('HTML17'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML111', 'alert-mobAnddesk', document.getElementById('HTML111'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML112', 'alert-mobAnddesk', document.getElementById('HTML112'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML113', 'adsmobandcomp', document.getElementById('HTML113'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML114', 'adsmobandcomp', document.getElementById('HTML114'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML115', 'adsmobandcomp', document.getElementById('HTML115'), {}, 'displayModeFull'));
