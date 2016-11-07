/**
 * Created by joeyang ong on 2016-10-05.
 */

$(document).ready(function(){

     //alert("jquery ok!");
     //alert($(window).width());

     // $(window).resize(function(){
     //     $(".topbar").text($(window).width());
     // });

     $(window).resize(function () {

         var currWidth = $(window).width();

         $("#turnshow-adv > .carousel-inner > div").each(function (idx,element) {
              var bgImgPath = $(element).data(currWidth>720?"lg":"sm");
              //alert(bgImgPath);
              $(element).css("backgroundImage","url('"+bgImgPath+"')");
         })

     }).trigger('resize');

});
