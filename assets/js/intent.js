function wuffyplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent://"+btoa(b)+"#Intent;scheme=xmtv;package=co.wuffy.player;end"}};
function mxplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+a+"#Intent;package=com.mxtech.videoplayer.ad;end"}};
function mxplay_pro(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;package=com.mxtech.videoplayer.pro;end"}};
function extplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/*;end"}};
function intent(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end"}};
function vlcplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="vlc-x-callback://x-callback-url/stream?url=URL"+b+"&sub=aliwixplay.netlify.app"}};
function dlna(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="wvc-x-callback://open?url="+a+"&secure_uri=true"}};




     if (!checkUrlValid(decoded_url)) {
       Log.d("WebView","!checkUrlValid ");

       boolean res=super.shouldOverrideUrlLoading(view, url);
       if (res){
         Log.d("WebView","res=true ");
       }else{
         Log.d("WebView","res=false ");
       }
       return  res;//false 时 不回调 RN 的 handleShouldStartLoadWithRequest 方法
     } else {//以下是此方法的原始代码
       Log.d("WebView","Do your special things");

       // Do your special things
       activeUrl = url;
       dispatchEvent(  //调 RN 的 handleShouldStartLoadWithRequest 方法
         view,
         new TopShouldStartLoadWithRequestEvent(
           view.getId(),
           createWebViewEvent(view, url)));

       return true;
     }
   }


$(document).ready(function(){ $('#openApp').click();});





_onShouldStartLoadWithRequest = (event) => {
  const { url } = event;
  if (url.startsWith('intent://') && url.includes('scheme=http') && Platform.OS === 'android') {
    SendIntentAndroid.openChromeIntent(url);
    return false;
  }
  return true;
}





