function owlInitialize() {
   if ($(window).width() < 768) {
      $('.products').owlCarousel(
         {
            loop: true,
            margin: 20, 
            autoWidth: true,
            autoHeight: true,
            items: 1,
            dots: true,
            center: true,
            mouseDrag: true,
         }
      );
   }else{
      $('.products').owlCarousel('destroy');
   }
}

$(document).ready(function(e) {
   owlInitialize();
});

$(window).resize(function() {
   owlInitialize();
});

//BANNER CAROUSEL
$(document).ready(function(){
   $(".banner").owlCarousel({
      loop: true,
      items: 1,
      dots: true,
      center: true,
      mouseDrag: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 7000,
   });
 });