$(document).ready(function() {
  $(".go_to").click(function() {
    var dot = $(this).attr("href");

    var pos = $(dot).offset().top;
    $('body,html').animate({
      scrollTop: pos
    }, 1500);
  })
flag = 0;
$("#next").click(function(){

  flag++;
  if(flag>2){
    flag = 0;
  }
  if(flag==0){
    $("#slide1").css({"z-index":"10","opacity":"1"});
    $("#slide1").css( "transform","translate(0px, 0px) scale(1)");
    $("#slide2").css({"z-index":"9","opacity":".7"});
    $("#slide2").css( "transform","translate(170px, 0px) scale(.7)");
    $("#slide3").css({"z-index":"8","opacity":".7"});
    $("#slide3").css( "transform","translate(-170px, 0px) scale(.7)");
  }
  if(flag==1){
    $("#slide1").css({"z-index":"8","opacity":".7"});
    $("#slide1").css( "transform","translate(-170px, 0px) scale(.7)");
    $("#slide2").css({"z-index":"10","opacity":"1"});
    $("#slide2").css( "transform","translate(0px, 0px) scale(1)");
    $("#slide3").css({"z-index":"9","opacity":".7"});
    $("#slide3").css( "transform","translate(170px, 0px) scale(.7)");
  }
  if(flag==2){
    $("#slide1").css({"z-index":"8","opacity":".7"});
    $("#slide1").css( "transform","translate(170px, 0px) scale(.7)");
    $("#slide2").css({"z-index":"8","opacity":".7"});
    $("#slide2").css( "transform","translate(-170px, 0px) scale(.7)");
    $("#slide3").css({"z-index":"10","opacity":"1"});
    $("#slide3").css( "transform","translate(0px, 0px) scale(1)");
  }

});
$("#prev").click(function(){

  flag--;
  if(flag<0){
    flag = 2;
  }
  if(flag==0){
    $("#slide1").css({"z-index":"99","opacity":"1"});
    $("#slide1").css( "transform","translate(0px, 0px) scale(1)");
    $("#slide2").css({"z-index":"9","opacity":".7"});
    $("#slide2").css( "transform","translate(170px, 0px) scale(.7)");
    $("#slide3").css({"z-index":"8","opacity":".7"});
    $("#slide3").css( "transform","translate(-170px, 0px) scale(.7)");
  }
  if(flag==1){
    $("#slide1").css({"z-index":"8","opacity":"1"});
    $("#slide1").css( "transform","translate(-170px, 0px) scale(.7)");
    $("#slide2").css({"z-index":"10","opacity":"1"});
    $("#slide2").css( "transform","translate(0px, 0px) scale(1)");
    $("#slide3").css({"z-index":"9","opacity":"1"});
    $("#slide3").css( "transform","translate(170px, 0px) scale(.7)");
  }
  if(flag==2){
    $("#slide1").css({"z-index":"8","opacity":"1"});
    $("#slide1").css( "transform","translate(170px, 0px) scale(.7)");
    $("#slide2").css({"z-index":"8","opacity":".7"});
    $("#slide2").css( "transform","translate(-170px, 0px) scale(.7)");
    $("#slide3").css({"z-index":"10","opacity":"1"});
    $("#slide3").css( "transform","translate(0px, 0px) scale(1)");
  }

});
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() >= 1000) {
  //     $('.scrollup').css("display","block");
  //   } else {
  //     $('.scrollup').css("display","none");
  //   }
  // });
  //
  // $('.scrollup').click(function() {
  //   $("html, body").animate({
  //     scrollTop: 0
  //   }, 600);
  //   return false;
  // });
});
