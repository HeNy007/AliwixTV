function wuffyplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent://"+btoa(b)+"#Intent;scheme=xmtv;package=co.wuffy.player;end"}};
function mxplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;package=com.mxtech.videoplayer.ad;end"}};
function mxplay_pro(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;package=com.mxtech.videoplayer.pro;end"}};
function extplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/*;end"}};
function intent(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end"}};
function vlcplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="vlc-x-callback://x-callback-url/stream?url=URL"+b+"&sub=aliwixplay.netlify.app"}};
function dlna(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="wvc-x-callback://open?url="+a+"&secure_uri=true"}};





if (!e.target.hasAttribute("target")) {
    e.target.setAttribute("target", "_blank");
}

mywebview.webViewClient = object : WebViewClient() {
           override fun shouldOverrideUrlLoading(webView: WebView, url: String): Boolean {
               if (url.startsWith("intent://")) {
                   val intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME)
                   if (intent != null) {
                       val fallbackUrl = intent.getStringExtra("browser_fallback_url")
                       return if (fallbackUrl != null) {
                           webView.loadUrl(fallbackUrl)
                           true
                       } else {
                           false
                       }
                   }
               }
               return false
           }
       }



