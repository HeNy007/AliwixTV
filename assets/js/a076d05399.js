window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":true},"autoA11y":{"enabled":true},"baseUrl":"https://kit-free.fontawesome.com","license":"free","method":"css","minify":{"enabled":true},"v4shim":{"enabled":false},"version":"latest"};
!function(){!function(){if(!(void 0===window.Element||"classList"in document.documentElement)){var e,t,n,i=Array.prototype,o=i.push,a=i.splice,s=i.join;r.prototype={add:function(e){this.contains(e)||(o.call(this,e),this.el.className=this.toString())},contains:function(e){return-1!=this.el.className.indexOf(e)},item:function(e){return this[e]||null},remove:function(e){if(this.contains(e)){for(var t=0;t<this.length&&this[t]!=e;t++);a.call(this,t,1),this.el.className=this.toString()}},toString:function(){return s.call(this," ")},toggle:function(e){return this.contains(e)?this.remove(e):this.add(e),this.contains(e)}},window.DOMTokenList=r,e=Element.prototype,t="classList",n=function(){return new r(this)},Object.defineProperty?Object.defineProperty(e,t,{get:n}):e.__defineGetter__(t,n)}function r(e){for(var t=(this.el=e).className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<t.length;n++)o.call(this,t[n])}}();function f(e){var t,n,i,o;prefixesArray=e||["fa"],prefixesSelectorString="."+Array.prototype.join.call(e,",."),t=document.querySelectorAll(prefixesSelectorString),Array.prototype.forEach.call(t,function(e){n=e.getAttribute("title"),e.setAttribute("aria-hidden","true"),i=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only"),n&&i&&((o=document.createElement("span")).innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling))})}var e,t,u=function(e){var t=document.createElement("link");t.href=e,t.media="all",t.rel="stylesheet",document.getElementsByTagName("head")[0].appendChild(t)},m=function(e){!function(e,t,n){var i,o=window.document,a=o.createElement("link");if(t)i=t;else{var s=(o.body||o.getElementsByTagName("head")[0]).childNodes;i=s[s.length-1]}var r=o.styleSheets;a.rel="stylesheet",a.href=e,a.media="only x",function e(t){if(o.body)return t();setTimeout(function(){e(t)})}(function(){i.parentNode.insertBefore(a,t?i:i.nextSibling)});var l=function(e){for(var t=a.href,n=r.length;n--;)if(r[n].href===t)return e();setTimeout(function(){l(e)})};function c(){a.addEventListener&&a.removeEventListener("load",c),a.media=n||"all"}a.addEventListener&&a.addEventListener("load",c),(a.onloadcssdefined=l)(c)}(e)},n=function(e,t){var n=t&&void 0!==t.autoFetchSvg?t.autoFetchSvg:void 0,i=t&&void 0!==t.async?t.async:void 0,o=t&&void 0!==t.autoA11y?t.autoA11y:void 0,a=document.createElement("script"),s=document.scripts[0];a.src=e,void 0!==o&&a.setAttribute("data-auto-a11y",o?"true":"false"),n&&(a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),a.setAttribute("data-fetch-svg-from",t.fetchSvgFrom)),i&&a.setAttributeNode(document.createAttribute("defer")),s.parentNode.appendChild(a)};function h(e,t){var n=t&&t.shim?e.license+"-v4-shims":e.license,i=t&&t.minify?".min":"";return e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/"+e.method+"/"+n+i+"."+e.method}try{if(window.FontAwesomeKitConfig){var i=window.FontAwesomeKitConfig;"js"===i.method&&(t={async:(e=i).asyncLoading.enabled,autoA11y:e.autoA11y.enabled},"pro"===e.license&&(t.autoFetchSvg=!0,t.fetchSvgFrom=e.baseUrl+"/releases/"+("latest"===e.version?"latest":"v".concat(e.version))+"/svgs"),e.v4shim.enabled&&n(h(e,{shim:!0,minify:e.minify.enabled})),n(h(e,{minify:e.minify.enabled}),t)),"css"===i.method&&function(e){var t,n,i,o,a,s,r,l,c=f.bind(f,["fa","fab","fas","far","fal"]);e.autoA11y.enabled&&(n=c,o=[],a=document,s=a.documentElement.doScroll,r="DOMContentLoaded",(l=(s?/^loaded|^c/:/^loaded|^i|^c/).test(a.readyState))||a.addEventListener(r,i=function(){for(a.removeEventListener(r,i),l=1;i=o.shift();)i()}),l?setTimeout(n,0):o.push(n),t=c,"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})),e.v4shim.enabled&&(e.asyncLoading.enabled?m(h(e,{shim:!0,minify:e.minify.enabled})):u(h(e,{shim:!0,minify:e.minify.enabled})));var d=h(e,{minify:e.minify.enabled});e.asyncLoading.enabled?m(d):u(d)}(i)}}catch(e){}}();
//<![CDATA[
		
		(function ignielAdBlock() {
		
		var judulAd = 'انتباه! تم الكشف عن مانع الإعلانات او استخدام في بي إن!',
		
		notifAd = 'نحن نحاول تقديم المحتوى الأفضل لك ، وحجب الإعلانات او استخدام في بي إن من قبلك لا يساعدنا على الاستمرار.. عذراً على الإزعاج.<br/> شكرًا لك.'; var ad = document['createElement']('script');
		
		ad['type'] = 'text/javascript';
		
		ad['src'] = '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
		
		ad['async'] = true;
		
		ad['onerror'] = function() {
		
		var _0xc9cbx2 = document['createElement']('div');
		
		_0xc9cbx2['id'] = 'ignielAdBlock';
		
		_0xc9cbx2['innerHTML'] = '<div class="isiAds"><span class="judul">' + judulAd + '</span><br/><svg viewBox="0 0 24 24"><path d="M13,13H11V7H13M12,17.3A1.3,1.3 0 0,1 10.7,16A1.3,1.3 0 0,1 12,14.7A1.3,1.3 0 0,1 13.3,16A1.3,1.3 0 0,1 12,17.3M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3Z"></path></svg><br/>' + notifAd + '</div>';
		
		document['body']['append'](_0xc9cbx2);
		
		document['body']['style']['overflow'] = 'hidden';
		
		window['adblock'] = true
		
		};
		
		var b_ad = document['getElementsByTagName']('script')[0];
		
		b_ad['parentNode']['insertBefore'](ad, b_ad)
		
		})();
		
		//]]> 
 
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(3(){(3 a(){8{(3 b(2){7((\'\'+(2/2)).6!==1||2%5===0){(3(){}).9(\'4\')()}c{4}b(++2)})(0)}d(e){g(a,f)}})()})();',17,17,'||i|function|debugger|20|length|if|try|constructor|||else|catch||5000|setTimeout'.split('|'),0,{}))
 $(document).keydown(function(e){
    if(e.which === 123){
       return false;
    }
});
$(document).bind("contextmenu",function(e) {
 e.preventDefault();
});
function disableClick(){ 
        document.onclick=function(event){ 
          if (event.button == 2) { 
            alert('Right Click Message'); 
            return false; 
          } 
        } 
      } 
 

    function mousehandler(e) {
        var myevent = (isNS) ? e : event;
        var eventbutton = (isNS) ? myevent.which : myevent.button;
        if ((eventbutton == 2) || (eventbutton == 3)) return false;
    }
    document.oncontextmenu = mischandler;
    document.onmousedown = mousehandler;
    document.onmouseup = mousehandler;
    function disableCtrlKeyCombination(e) {
        var forbiddenKeys = new Array("a", "s", "c", "x","u");
        var key;
        var isCtrl;
        if (window.event) {
            key = window.event.keyCode;
            //IE
            if (window.event.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        else {
            key = e.which;
            //firefox
            if (e.ctrlKey)
                isCtrl = true;
            else
                isCtrl = false;
        }
        if (isCtrl) {
            for (i = 0; i < forbiddenKeys.length; i++) {
                //case-insensitive comparation
                if (forbiddenKeys[i].toLowerCase() == String.fromCharCode(key).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
// JavaScript Document
function testfunc(){
    alert("It works...");
}





