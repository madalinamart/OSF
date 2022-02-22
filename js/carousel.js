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


 //FEATURED PRODUCTS CAROUSEL
 $(document).ready(function(){
   $(".featured").owlCarousel({
      loop: true,      
      margin: 30,      
      dots: false,
      nav: true,
      mouseDrag: true,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      responsive: {
         768:{
            items: 3,
            slideBy: 3,
         },
         1280:{
            items: 4,
            slideBy: 4,
         }
      }
   });
 });

/* //SMALL IMAGES CAROUSEL
function owlInitializeImages() {
   if($(window).width() < 768) {
      $(".small-image").owlCarousel({         
            loop: false,
            margin: 20, 
            items: 3,
            autoWidth: true,
            nav: false,
            dots: true,
            center: true,
            mouseDrag: true,
            rewind: true,
         }
      );
   }else{
      $(".small-image").owlCarousel("destroy");
   }
}

$(document).ready(function(e) {
   owlInitializeImages();
});

$(window).resize(function() {
   owlInitializeImages();
}); */