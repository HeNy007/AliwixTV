function wuffyplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent://"+btoa(b)+"#Intent;scheme=xmtv;package=co.wuffy.player;end"}};
function mxplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;package=com.mxtech.videoplayer.ad;end"}};
function mxplay_pro(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;package=com.mxtech.videoplayer.pro;end"}};
function extplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/*;end"}};
function intent(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end"}};
function vlcplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="vlc-x-callback://x-callback-url/stream?url=URL"+b+"&sub=aliwixplay.netlify.app"}};
function dlna(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="wvc-x-callback://open?url="+a+"&secure_uri=true"}};

function http(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="https://aliwixplay.tn/player/aplay?src="+btoa(a)}};
function https(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="https://aliwixplay.tn/player/aplays?src="+btoa(a)}};
function httpx(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="https://aliwixplay.tn/player/aplay1?src="+btoa(a)}};
function httpsx(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="https://aliwixplay.tn/player/aplays1?src="+btoa(a)}};
function radio(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="http://aliwixplay.tn/player/radio?src="+btoa(a)}};
function extrn(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;action=android.intent.action.VIEW;scheme=https;end"}};

//<![CDATA[
var Nanobar = function () {
var c, d, e, f, g, h, k = { width: "100%", height: "3.5px", zIndex: 9999, top: "0" }, l = { width: 0, height: "100%", clear: "both", transition: "height .3s" }; c = function (a, b) { for (var c in b) a.style[c] = b[c]; a.style["float"] = "left" }; f = function () { var a = this, b = this.width - this.here; 0.1 > b && -0.1 < b ? (g.call(this, this.here), this.moving = !1, 100 == this.width && (this.el.style.height = 0, setTimeout(function () { a.cont.el.removeChild(a.el) }, 100))) : (g.call(this, this.width - b / 4), setTimeout(function () { a.go() }, 16)) }; g = function (a) {
this.width =
a; this.el.style.width = this.width + "%"
}; h = function () { var a = new d(this); this.bars.unshift(a) }; d = function (a) { this.el = document.createElement("div"); this.el.style.backgroundColor = a.opts.bg; this.here = this.width = 0; this.moving = !1; this.cont = a; c(this.el, l); a.el.appendChild(this.el) }; d.prototype.go = function (a) { a ? (this.here = a, this.moving || (this.moving = !0, f.call(this))) : this.moving && f.call(this) }; e = function (a) {
a = this.opts = a || {}; var b; a.bg = a.bg || "#db3131"; this.bars = []; b = this.el = document.createElement("div"); c(this.el,
k); a.id && (b.id = a.id); b.style.position = a.target ? "relative" : "fixed"; a.target ? a.target.insertBefore(b, a.target.firstChild) : document.getElementsByTagName("body")[0].appendChild(b); h.call(this)
}; e.prototype.go = function (a) { this.bars[0].go(a); 100 == a && h.call(this) }; return e
}();
var nanobar = new Nanobar(); nanobar.go(30); nanobar.go(60); nanobar.go(100);
document.write(unescape('%3C%73%74%79%6C%65%20%74%79%70%65%3D%22%74%65%78%74%2F%63%73%73%22%3E%0A%2E%70%61%63%65%20%7B%0A%20%20%2D%77%65%62%6B%69%74%2D%70%6F%69%6E%74%65%72%2D%65%76%65%6E%74%73%3A%20%6E%6F%6E%65%3B%0A%20%20%70%6F%69%6E%74%65%72%2D%65%76%65%6E%74%73%3A%20%6E%6F%6E%65%0A%20%20%2D%77%65%62%6B%69%74%2D%75%73%65%72%2D%73%65%6C%65%63%74%3A%20%6E%6F%6E%65%3B%0A%20%20%2D%6D%6F%7A%2D%75%73%65%72%2D%73%65%6C%65%63%74%3A%20%6E%6F%6E%65%3B%0A%20%20%75%73%65%72%2D%73%65%6C%65%63%74%3A%20%6E%6F%6E%65%3B%0A%7D%0A%2E%70%61%63%65%2D%69%6E%61%63%74%69%76%65%20%7B%0A%20%20%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%3B%0A%7D%0A%2E%70%61%63%65%20%2E%70%61%63%65%2D%70%72%6F%67%72%65%73%73%20%7B%0A%20%20%62%61%63%6B%67%72%6F%75%6E%64%3A%20%23%63%62%34%34%33%37%3B%0A%20%20%70%6F%73%69%74%69%6F%6E%3A%20%66%69%78%65%64%3B%0A%20%20%7A%2D%69%6E%64%65%78%3A%20%32%30%30%30%3B%0A%20%20%74%6F%70%3A%20%30%3B%0A%20%20%72%69%67%68%74%3A%20%31%30%30%25%3B%0A%20%20%77%69%64%74%68%3A%20%31%30%30%25%3B%0A%20%20%68%65%69%67%68%74%3A%20%32%70%78%3B%0A%7D%0A%3C%2F%73%74%79%6C%65%3E'))
//]]> 
