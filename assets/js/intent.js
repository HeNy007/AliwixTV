function wuffyplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent://"+btoa(b)+"#Intent;scheme=xmtv;package=co.wuffy.player;end"}};
function mxplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+a+"#Intent;package=com.mxtech.videoplayer.ad;end"}};
function mxplay_pro(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;package=com.mxtech.videoplayer.pro;end"}};
function extplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/*;end"}};
function intent(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end"}};
function vlcplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="vlc-x-callback://x-callback-url/stream?url=URL"+b+"&sub=aliwixplay.netlify.app"}};
function dlna(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="wvc-x-callback://open?url="+a+"&secure_uri=true"}};


function onShouldStartLoadWithRequest(request){

  // short circuit these
  if (!request.url ||
    request.url.startsWith('http') ||
    request.url.startsWith("/") ||
    request.url.startsWith("#") ||
    request.url.startsWith("javascript") ||
    request.url.startsWith("about:blank")
  ) {
    return true;
  }

  // blocked blobs
  if(request.url.startsWith("blob")){
    Alert.alert("Link cannot be opened.");
    return false;
  }

  // list of schemas we will allow the webview
  // to open natively
  if(request.url.startsWith("tel:") ||
    request.url.startsWith("mailto:") ||
    request.url.startsWith("maps:") ||
    request.url.startsWith("geo:") ||
    request.url.startsWith("sms:")
    ){

    Linking.openURL(request.url).catch(er => {
      Alert.alert("Failed to open Link: " + er.message);
    });
    return false;
  }

  // let everything else to the webview
  return true;
}



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


var fallbackToStore = function() {
  window.location.replace('https://play.google.com/store/apps/details?id=co.wuffy.player');
};
var openApp = function() {
  window.location.replace('intent://app/SplashScreen#Intent;scheme=app_;package=co.wuffy.player;end');
};
var triggerAppOpen = function() {
  openApp();
  setTimeout(fallbackToStore, 700);
};

triggerAppOpen();



_onShouldStartLoadWithRequest = (event) => {
  const { url } = event;
  if (url.startsWith('intent://') && url.includes('scheme=http') && Platform.OS === 'android') {
    SendIntentAndroid.openChromeIntent(url);
    return false;
  }
  return true;
}





const webViewRef = React.useRef(null);

<WebView
  ref={webViewRef}
  setSupportMultipleWindows={true}
  onError={({nativeEvent}) => {
              // Function that is invoked when the WebView load fails.
              if (nativeEvent.url.startsWith('tel:') && nativeEvent.canGoBack) {
                // Fallback for tel links without target="_blank"
                webViewRef.current.goBack();
              }
           }}
/>
