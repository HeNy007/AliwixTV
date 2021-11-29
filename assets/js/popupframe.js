function downloadFile(data, fileName, type="text/plain") {
    // Create an invisible A element
    const a = document.createElement("a");
    a.style.display = "none";
    document.body.appendChild(a);

    // Set the HREF to a Blob representation of the data to be downloaded
    a.href = window.URL.createObjectURL(
      new Blob([data], { type })
    );

    // Use download attribute to set set desired file name
    a.setAttribute("download", fileName);

    // Trigger the download by simulating click
    a.click();

    // Cleanup
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  }
  function wuffyplay(b){if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){window.location=b}else{location.href="intent://"+btoa(b)+"#Intent;scheme=xmtv;package=co.wuffy.player;end"}};
 



// Follow slide
(function(TipsIM) {
  TipsIM(document).ready(function() {
    TipsIM.extend(TipsIM.easing, {
      easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
      }
    });
    var followBox = TipsIM("#TipsIMfollowSubscribe");
    var followHeight = "-" + followBox.outerHeight() + "px";
    followBox.hide().css({
      bottom: "-510px"
    });
    setTimeout(function() {
      followBox.show().animate({
        bottom: followHeight
      })
    }, 500);
    TipsIM(".TipsIMfollowButton").click(function(e) {
      if (followBox.hasClass("followOpened")) {
        TipsIM(this).removeClass("followActive");
        followBox.removeClass("followOpened").stop().animate({
          bottom: followHeight
        }, {
          duration: 300,
          easing: "easeOutCubic"
        })
      } else {
        TipsIM(this).addClass("followActive");
        followBox.addClass("followOpened").stop().animate({
          bottom: "0"
        }, {
          duration: 500,
          easing: "easeOutCubic"
        })
      }
      e.preventDefault()
    })
  })
})(jQuery);
