/* $(document).ready(function(){
$(".owl-carousel").owlCarousel({
   loop: true,
   margin: 10, 
   autoWidth: true,
   autoHeight: true,
   items: 1,
   dots: true,
});
});
 */
function owlInitialize() {
   if ($(window).width() < 768) {
      $('.owl-carousel').owlCarousel(
         {
            loop: true,
            margin: 10, 
            autoWidth: true,
            autoHeight: true,
            items: 1,
            dots: true,
            center: true,
            mouseDrag: true,
         }
      );
   }else{
      $('.owl-carousel').owlCarousel('destroy');
   }
}

$(document).ready(function(e) {
   owlInitialize();
});

$(window).resize(function() {
   owlInitialize();
});

