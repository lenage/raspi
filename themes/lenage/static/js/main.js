$(function(){
  $('.pi-status-hook').click(function(){
    $("#status").slideToggle();
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  });

  var n = $(".header-inner");
  var t = $("#banner");
  var o = t.delay(5000).height();
  var m = $("#title");
  var b = $("#tagline");
  var r = $("#title-small");
  var a = 84;
  var d = $("#featured").length > 0 ? $("#featured") : $("#content");
  var s;
  d.css({
    paddingTop: o + 20 + "px"
  });

  if ($("html").hasClass("lt-ie9") && !$("body").hasClass("home")) {
    $("#title-small, #title-small a").css({
      opacity: 1
    });
  }

  $(window).scroll(function () {
    if ($("body").hasClass("home")) {
      c();
    }
  });

  function c() {
        s = document.body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0;
        if (s < 0) {
            s = 0;
        }
        n.css({
            "margin-top": -(s / 3) + "px",
            opacity: 1 - (s / 350)
        });
        var v;
        if ((o - s) < 0) {
            v = 0;
        } else {
            v = ((o - s) + "px");
        }
        t.css({
            height: v
        });
        if ((o - s) > 85) {
            t.css({"background-position": "center " + (-s / 8) - 84 + "px"});
        }
        r.css({
            opacity: 0
        });
        if (s > 225) { r.css({opacity: 0 + ((s - 250) / 130)});}
        if (s > 500) {
            $("#header-pagination").fadeIn("fast");
        } else {
            $("#header-pagination").fadeOut("fast");
        }
    }

});
