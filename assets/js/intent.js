function wuffyplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent://"+btoa(b)+"#Intent;scheme=xmtv;package=co.wuffy.player;end"}};
  function maxplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+a+"#Intent;package=com.mxtech.videoplayer.ad;end"}};
  function maxplay_pro(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;package=com.mxtech.videoplayer.pro;end"}};
  function extplay(a){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=a}else{location.href="intent:"+a+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/*;end"}};
  function intent(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent:"+b+"#Intent;action=android.intent.action.VIEW;scheme=http;type=video/mp4;end"}};
 
/* search by HeNy007
 ****************************/
var s = $('input'),
 f  = $('form'),
 a = $('.after'),
 m = $('h4');
 
 s.focus(function(){
 if( f.hasClass('open') ) return;
 f.addClass('in');
 setTimeout(function(){
 f.addClass('open');
 f.removeClass('in');
 }, 1300);
 });
 
 a.on('click', function(e){
 e.preventDefault();
 if( !f.hasClass('open') ) return;
 s.val('');
 f.addClass('close');
 f.removeClass('open');
 setTimeout(function(){
 f.removeClass('close');
 }, 1300);
 })
 
 f.submit(function(e){
 e.preventDefault();
 m.html('Thanks, high five!').addClass('show');
 f.addClass('explode');
 setTimeout(function(){
 s.val('');
 f.removeClass('explode');
 m.removeClass('show');
 }, 3000);
 })



$("#searchTheKey").on('keyup', function(){
    var value = $(this).val().toLowerCase();
    $("#matchKey li").each(function () {
    if ($(this).text().toLowerCase().search(value) > -1) {
    $(this).show();
    $(this).prev('.subjectName').last().show();
    } else {
    $(this).hide();
    }
    });
    })
