window.onbeforeunload = function(){
  window.scrollTo(0,0);
};


$(window).scroll(function(){
  var positionTop = $(window).scrollTop();
  console.log(positionTop);

  if(positionTop > 150){
    $(".navbar-container").addClass("navbar-container-bg");
    $(".navbar-brand").css("color","#fff");
    $(".nav-link").css("color","#fff");
    $(".nav-link").hover(function(){
      $(this).css("color","#fff");
    },function(){
      $(this).css("color","#fff");
    });
    $(".navbar").css("paddingTop","0");
    $(".navbar").css("height","80px");
    $(".logo-img").attr("src", "public/images/navicraft-logo-white.svg");
  }else{
    $(".navbar-container").removeClass("navbar-container-bg");
    $(".navbar-brand").css("color","#5f9484");
    $(".nav-link").css("color","#5f9484");
    $(".nav-link").hover(function(){
      $(this).css("color","#5f9484");
    },function(){
      $(this).css("color","#5f9484");
    });
    $(".navbar").css("paddingTop","50px");
    $(".navbar").css("height","120px");
    $(".logo-img").attr("src", "public/images/navicraft-logo.svg");
  }

});
