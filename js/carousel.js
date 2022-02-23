function owlInitializeProducts() {
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
   owlInitializeProducts();
});

$(window).resize(function() {
   owlInitializeProducts();
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


// PPD CAROUSEL 
 function owlInitialize() {
   if ($(window).width() < 768) {
      $('.products-pdp').owlCarousel(
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
      $('.products-pdp').owlCarousel('destroy');
   }
} 

$(document).ready(function(e) {
   owlInitialize();
});

$(window).resize(function() {
   owlInitialize();
});


//SMALL IMAGE CAROUSEL
function owlInitializeImage() {
   if ($(window).width() < 768) {
      $('.small-image').owlCarousel(
         {
            loop: true,
            margin: 10,
            autoWidth: true,
            autoHeight: true,
            items: 3,
            dots: true,
            mouseDrag: true,
            responsive: {
               768:{
                  items: 3,
                  slideBy: 3,
                  autoWidth: true,
                  autoHeight: true,
               }
            }
         }
      );
   }else{
      $('.small-image').owlCarousel('destroy');
   }
} 

$(document).ready(function(e) {
   owlInitializeImage();
});

$(window).resize(function() {
   owlInitializeImage();
});