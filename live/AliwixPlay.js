function js_thml(){
	let AliwixPlay = "";
	AliwixPlay += "  <div id=\"DraGao\" class=\"cards animate__animated animate__zoomIn\"> \n";
	AliwixPlay += "\t  <div align=\"center\">\n";
	AliwixPlay += "\t  <div class=\"box-title\">\n";
	AliwixPlay += "\t  <div class=\"HeNyTimer\" id=\"HeNyTimer\">\n";
	AliwixPlay += "\t  </div></div> </div> \n";
	AliwixPlay += "\t   <div class=\"video-4\"> \n";
	AliwixPlay += "\t   <div class=\"video-serv\">\n";
	AliwixPlay += "\t\t    \n";
	AliwixPlay += "\t\t <!-- البث ------------------------------------> \n";
	AliwixPlay += "\t\t <a class=\"button\" href=\"http://raw.githack.com/HeNy007/AliwixPlayer/main/plyr.html?src=http://88.198.32.36:1935/live/Duhok--Sports--HD/chunklist.m3u8\" target=\"HeNyIframe\">البث 5 </a> \n";
	AliwixPlay += "\t\t  <!-- البث ------------------------------------> \n";
	AliwixPlay += "\t\t<a class=\"button\" href=\"http://raw.githack.com/HeNy007/AliwixPlayer/main/plyr.html?src=http://mmn.mypsx.net:1935/live/mmnhdsport/playlist.m3u8\" target=\"HeNyIframe\">البث 4 </a> \n";
	AliwixPlay += "\t\t<!-- البث ------------------------------------> \n";
	AliwixPlay += "\t\t<a class=\"button\" href=\"http://raw.githack.com/HeNy007/AliwixPlayer/main/plyr.html?src=http://190.2.148.141:8080/bar7667/tracks-v1a1/mono.m3u8\" target=\"HeNyIframe\">البث 3 </a> \n";
	AliwixPlay += "\t\t<!-- البث ------------------------------------> \n";
	AliwixPlay += "\t\t<a class=\"button\" href=\"http://raw.githack.com/HeNy007/AliwixPlayer/main/plyr.html?src=http://server.sibfungold.info:8080/live/gaicu84/iVMawDNfwV@/53068.m3u8\" target=\"HeNyIframe\" > البث 2 </a> \n";
	AliwixPlay += "\t\t<!-- البث ------------------------------------> \n";
	AliwixPlay += "\t\t<a class=\"button\" href=\"http://raw.githack.com/HeNy007/AliwixPlayer/main/plyr.html?src=http://190.2.148.141:8080/bar7638/tracks-v1a1/mono.m3u8\" target=\"HeNyIframe\">البث 1 </a> \n";
	AliwixPlay += "\t\t<!-- البث ------------------------------------>     \n";
	AliwixPlay += "\t   </div> \n";
	AliwixPlay += "\t   <div class=\"video-con\"><center>\n";
	AliwixPlay += "\t\t<iframe class=\"video-iframe\" allowfullscreen frameborder=\"0\" height=\"320\" mozallowfullscreen=\"\" name=\"HeNyIframe\" src=\"http://raw.githack.com/HeNy007/AliwixPlayer/main/plyr.html?src=http://190.2.148.141:8080/bar7638/tracks-v1a1/mono.m3u8\" webkitallowfullscreen=\"\" width=\"97%\" ></iframe> </center>\n";
	AliwixPlay += "\t   </div> \n";
	AliwixPlay += "\t  </div> \n";
	AliwixPlay += "\t\t</div>\n";
	AliwixPlay += "  <div dir=\"rtl\" style=\"text-align: right;\" trbidi=\"on\"> \n";
	AliwixPlay += "  <div style=\"text-align: center;\"> \n";
	AliwixPlay += "  <span style=\"color: white; font-font-family: 'Markazi Text', serif; font-size: x-small;\"><b>تطبيق أليويكس بلاي تطبيق مجاني لمشاهدة جميع القنوات , تطبيق أليويكس بلاي هو الحل الامثل لكم لمشاهدة جميع قنوات الدول العربية والاجنبية وجميع المباريات دائما مع ذكر مصدر البث وجميع انوع البث الموجودة علي أليويكس بلاي هي روابط خارجية ليس لنا به اي علاقه مجرد نقل البث من \n";
	AliwixPlay += "  مصادر خارجية حتي نقوم بالحفاظ على حقوق</b><span style=\"text-align: right;\"><b> البث من مصدرها الرئيسي</b></span></span><br>\n";
	AliwixPlay += "  <div class=\"pic\"> \n";
	AliwixPlay += "  <img height=\"\" src=\"https://github.com/HeNy007/HeNy007.github.io/raw/main/aliwixplay/20220205_183458.png\" width=\"65%\">\n";
	AliwixPlay += "  <!-- <br>يتم اضافة البث قبل المباراة بربع ساعه \n";
	AliwixPlay += "  ------------------------------------> </div> \n";
	AliwixPlay += "  </div> \n";
	AliwixPlay += "  <br><br>\n";
	return AliwixPlay;
}


document.getElementById("js_html").innerText = js_thml();
document.getElementById("html-text").value = js_thml();
