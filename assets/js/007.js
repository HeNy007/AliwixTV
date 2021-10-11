 if(typeof jQuery === 'undefined') {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
   	jqTag.type = 'text/javascript';
   	jqTag.src = 'https://code.jquery.com/jquery-1.7.2.min.js';
    jqTag.onload = jq_show;
    headTag.appendChild(jqTag);
} else {
	jq_show();
}
function jq_show() {
	jQuery(document).ready(function() {
	if(typeof window.yxsc=='undefined') {
		jQuery('body').prepend('<div id="yx-sli1" style="position:fixed;bottom:0px;left:0px;width:100%;height:65px;background-color:#fff;z-index:999999999999;text-align:center;border:0;padding:0;box-sizing:content-box;"><div style="display:block;font-family:Arial;font-size:13px;width:100%;height:15px;line-height:13px;border:none;margin:0;padding:0;background-color:#171258;color:#ffffff;text-align:center;font-family:Arial;font-size:13px;line-height:13px;"><a href="https://ad2bitcoin.com/index.php?ref=heny007" style="color:#fff;text-decoration:underline;border:none;margin:0;padding:0;" rel="nofollow">SUPPORT US !</a><div style="position:absolute;right:0px;top:0px;width:15px;height:15px;border:none;margin:0;padding:0;line-height:13px;"><img src="https://github.com/HeNy007/HeNy007.github.io/raw/main/safelink/but_close.png" width="13" height="13" onclick="document.getElementById(\'yx-sli1\').style.display=\'none\';" style="cursor:pointer;border:none;margin:0;padding:0;" /></a></div></div><div style="position:relative;left:50%;margin-left:-150px;width:468px;height:60px;box-sizing:content-box;background-color:#fff;padding:0;"><iframe src="https://ad2bitcoin.com/ad.php?ref=heny007&width=468" marginwidth="0" marginheight="0" width="468" height="60" scrolling="no" border="0" frameborder="0"></iframe></div></div>');
		        window.yxsc=true;
	}
    });
}


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
