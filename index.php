<html xmlns="http://www.w3.org/1999/xhtml">
 <head> 
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> 
  <meta name="apple-mobile-web-app-capable" content="yes"> 
  <link rel="apple-touch-startup-image" href="https://afghansky.net/img/logo.png"> 
  <link rel="icon" href="https://afghansky.net/img/logo.png" sizes="192x192"> 
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"> 
  <script src="https://kit.fontawesome.com/a076d05399.js"></script> 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
  <link rel="stylesheet" media="screen" href="https://fontlibrary.org/face/titr" type="text/css"> 
  <script src="js/a076d05399.js"></script> 
  <link rel="stylesheet" href="https://afghansky.net/css/style.css"> 
  <link rel="stylesheet" href="https://afghansky.net/css/style_option.css"> 
  <title>Afghan Sky App</title> 
  <style>


body {
	background-color: #000;
	font-family: Verdana, Geneva, sans-serif;
}	
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #d20000;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding-right:20px;
  text-decoration: none;
  font-size: 16px;
  font-weight:normal;
  color: #fff;
  display: block;
  transition: 0.3s;
  
}
.sidenav span {
  font-family: 'TitrBold';
}
.sidenav a:hover {
  color: #000;
}

.sidenav .closebtn {
  position: absolute;
  top: 10;
  right: 5px;
  font-size: 36px;
  margin-left: 50px;
}
.openbtn {
  width:30px; 
  height:25px; 
  cursor:pointer;
  box-sizing:border-box;
  margin-left:10px;
  margin-top:10px;
}
.openbtn:focus {
  transform: scale(1.5);
}
#logo {width: 35%;}
.btn{
	
	display:inline-block;
	text-align:center;
	margin:15px;
	outline:none;
}
.btn:focus{
	
	transform:scale(1.2);
}
.btn img{
	width:350px;
}
.main{
	text-align:center; display:block; margin:auto;margin-top:۴0px; border:thin solid #000;
}
.footer{
  color:#fff; text-align:center;  font-size:12px; position:fixed; bottom:0;
  padding:10px;
  background-color:#000; width:100%;
  left:-10;
}

.movies{
  display:inline-block;vertical-align:middle; position:relative; width: 100px; margin:25px;
  outline:none;
}
.movies:focus{
  transform: scale(1.4);
  
} 
.menu{
  display:inline-block;
  width:110px;
  margin:15px;
  text-align:center;
  text-decoration:none;
  color:#fff;
  font-size:12px;
  outline:none;
  box-sizing:border-box;
}

.menu:focus{
  transform: scale(1.5);
  
}
.menu img{
  width:100px;
  height:100px;
  width:100%;
  border-radius:10px;
	border:solid thick #484848;
	margin-bottom:5px;
	background-color:#fff;
}
.popup {
  margin: 70px auto;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  width: 70%;
  position: absolute;
  left:10vw;
  top:20vh;
  transition: all 5s ease-in-out;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
  font-size:18px;
}
.popup .close {
  position: absolute;
  top: 10px;
  right: 20px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #d20000;
}
.popup .close:hover {
  color: #000;
}
.popup .content {
  max-height: 30%;
  overflow: auto;
  
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 16px;}
  
  
}
@media screen and (max-width: 601px) {
  .menu:focus{
  transform: none;
  
}
 	.main{
	margin-top:0px;
} 
  #logo {width: 50%;}
  .btn{
	
	margin:0px;
	
}
 .btn:focus{
	
	
	transform:none;
}
.movies:focus{
  transform: none;
  
}
.movies{
  margin:20px;
  
}
	.footer{
  margin-top:20px;
}
.btn img{
	width:300px;
}
}

</style>
 </head>   
 <body> 
  <script type="text/javascript">
if( navigator.userAgent.match(/Build/i)

 ) {
        
        }else{
             if(!navigator.userAgent.match(/ipad|iphone/i)) {
           // window.location.href = "https://afghansky.net";
             }
        }
</script> 
  <script>	
function cls(id){

	$("#popup"+id).css("display","none");
	
	//var date = new Date();
	//date.setTime(date.getTime() + (60 * 1000));
	//$.cookie('msg', 'yes', { expires: date });
	
	
}
</script> 
  <div id="mySidenav" class="sidenav"> 
   <a href="javascript:void(0)" tabindex="1" class="closebtn" onclick="closeNav()"><i class="fas fa-reply" style="font-size:24px; margin-top:10px;"></i></a> 
   <table width="100%" border="0" height="400"> 
    <tbody>
     <tr> 
      <td align="right"> <i class="fas fa-home" style="font-size:28px; padding-left:10px; color:#fff;"></i></td> 
      <td align="right"><a tabindex="2" href="index.php?view=home"> <span>الصفحة الرئيسية</span> <br>Home </a></td> 
     </tr> 
     <tr> 
      <td align="right"> <i class="fas fa-tv" style="font-size:24px; color:#fff;"></i></td> 
      <td align="right"><a tabindex="3" href="index.php?view=login"> <span>البث المباشر </span> <br>Live TV </a></td> 
     </tr> 
     <tr> 
      <td align="right"> <i class="fas fa-film" style="font-size:28px; color:#fff;"></i></td> 
      <td align="right"><a tabindex="4" href="index.php?view=login"> <span>أفلام و مسلسلات</span> <br>Movies &amp; Series </a></td> 
     </tr> 
     <tr> 
      <td align="right"> <i class="fas fa-microphone-alt" style="font-size:28px; padding-right:5px; color:#fff;"></i></td> 
      <td align="right"><a tabindex="5" href="index.php?view=login"> <span>إذاعات راديو</span> <br>Online Radio </a></td> 
     </tr> 
     <tr> 
      <td align="right"> <i class="fas fa-sign-in-alt" style="font-size:24px; color:#fff;"></i></td> 
      <td align="right"><a tabindex="6" href="index.php?view=login"> <span>إتصل بنا</span> <br>Contact Us </a> </td> 
     </tr> 
     <tr> 
      <td align="right"> <a tabindex="7" href="javascript:void(0)" onclick="starts('close');" style="bottom:10; left:25%; position: absolute;"> 
        <div style="text-align: center; border: #fff solid thin; border-radius: 5px; padding: 10px; padding-left: 20px; padding-right: 20px; "> 
         <span>خروج</span> | Exit
        </div> </a></td> 
     </tr> 
    </tbody>
   </table> 
   <script>
function starts(url){
    
		
    window.AppInventor.setWebViewString(url);
    var myVar = setTimeout(pup, 3000);

    
    }
    
    
    function pup(){

    
    
    window.AppInventor.setWebViewString("");
    
    }
</script> 
  </div> 
  <table width="100%" border="0"> 
   <tbody>
    <tr> 
     <td width="15%" align="left" valign="top"><img src="https://afghansky.net/tv/img/menu.jpg" class="openbtn" onclick="openNav()"></td> 
     <td width="70%" rowspan="2" align="center"><img id="logo" src="https://github.com/HeNy007/AliwixTV/raw/main/img/20210516_062330.png"></td> 
     <td width="15%" align="center"></td> 
    </tr> 
    <tr> 
     <td>&nbsp;</td> 
     <td>&nbsp;</td> 
    </tr> 
   </tbody>
  </table> 
  <br>
  <br> 
  <div class="main"> 
   <a class="btn" href="index.php?view=login"> <img src="https://afghansky.net/tv/img/tv.jpg"> </a> 
   <a class="btn" href="index.php?view=login"> <img src="https://afghansky.net/tv/img/film.jpg"> </a> 
   <a class="btn" href="index.php?view=login"> <img src="https://afghansky.net/tv/img/radio.jpg"> </a> 
  </div> 
  <script>
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
</script> 
  <div class="footer">
   Copyright © 2021 by Aliwix Team
  </div>  
 </body>
</html>
