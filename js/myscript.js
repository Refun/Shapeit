$(function() {

  "use strict";
  


//scroll to top
$("a[href='#top']").click(function() {
     $("html, body").animate({ scrollTop: 0 }, "slow");
     return false;
  });


    var menu = $('.menu');
    var origOffsetY = menu.offset().top;

    function scroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            $('.menu').addClass('sticky').fadeIn();
            //$('.content').addClass('menu-padding');
        } else {
            $('.menu').removeClass('sticky').fadeIn();
            //$('.content').removeClass('menu-padding');
        }


    }

    document.onscroll = scroll;



//smoothscolll
smoothScroll.init();




  var topoffset = 50; //variable for menu height
  var slideqty = $('#featured .item').length;
  var wheight = $(window).height(); //get the height of the window
  var randSlide = Math.floor(Math.random()*slideqty);

  $('#featured .item').eq(randSlide).addClass('active');


  $('.fullheight').css('height', wheight); //set to window tallness


  //replace IMG inside carousels with a background image
  $('#featured .item img').each(function() {
    var imgSrc = $(this).attr('src');
    $(this).parent().css({'background-image': 'url('+imgSrc+')'});
    $(this).remove();
  });

  //adjust height of .fullheight elements on window resize
  $(window).resize(function() {
    wheight = $(window).height(); //get the height of the window
    $('.fullheight').css('height', wheight); //set to window tallness
  });



  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }


  // Add an inbody class to nav when scrollspy event fires
  $('.navbar-fixed-top').on('activate.bs.scrollspy', function() {
    var hash = $(this).find('li.active a').attr('href');
    if(hash !== '#featured') {
      $('header nav').addClass('inbody');
    } else {
      $('header nav').removeClass('inbody');
    }
  });


  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 1000);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

  //Automatically generate carousel indicators
  for (var i=0; i < slideqty; i++) {
    var insertText = '<li data-target="#featured" data-slide-to="' + i + '"';
    if (i === randSlide) {
      insertText += ' class="active" ';
    }
    insertText += '></li>';
    $('#featured ol').append(insertText);
  }

  $('.carousel').carousel({
    pause: false
  });






//magnificpop up


    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        disableOn:0,
        fixedContentPos: false
    });

    $('.image-popups').magnificPopup({
  delegate: 'a',
  type: 'image',
    mainClass: 'mfp-fade',
  removalDelay: 500, //delay removal by X to allow out-animation
   callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
            }
          },
          closeOnContentClick: true,
        		closeBtnInside: false,
  midClick: false // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});



//owl-carousel1

    $("#owl-demo1").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 1500, //Set AutoPlay to 3 seconds
       //items : 3,

     stopOnHover:true,
     responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
      items : 1,
    itemsCustom : false,
    itemsDesktop : [1230,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [520,1],
    singleItem : false,
    itemsScaleUp : false,
        afterInit: makePages,
        afterUpdate: makePages
    });
    function makePages() {

        $.each(this.owl.userItems, function(i) {

            $('.owl-controls .owl-page').eq(i)
                .css({
                    'background': 'url(' + $(this).find('img').attr('src') + ')',
                    'background-size': 'cover',
                    'text-align' : 'center',
                    'background-color': 'rgba(0,0,0,0.75)',
                    'margin':'50px 0px'
                })

                 var titleData = jQuery(this).find('img').attr('alt');
                 var paginationLinks = jQuery('.owl-controls .owl-pagination .owl-page span');

                 $(paginationLinks[i]).append(titleData);
               // .text( $(this).find('img').attr('alt'))
        });
    }
$("#owl-demo2").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        autoPlay: 1500, //Set AutoPlay to 3 seconds
       //items : 3,

     stopOnHover:true,
     responsive: true,
      responsiveRefreshRate : 200,
      responsiveBaseWidth: window,
      items : 1,
    itemsCustom : false,
    itemsDesktop : [1230,1],
    itemsDesktopSmall : [980,1],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [520,1],
    singleItem : false,
    itemsScaleUp : false,

   });
$("#owl-demo3").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        //singleItem: true,
       autoPlay: 1500, //Set AutoPlay to 3 seconds
       items : 2,
       itemsCustom : false,
    itemsDesktop : [1230,2],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,1],
    itemsTabletSmall: false,
    itemsMobile : [520,1],
    singleItem : false,
    itemsScaleUp : true,


   });





//sorting file
 var $optionSets = $('.simplefilter'),
                $optionLinks = $optionSets.find('li');
$optionLinks.on('click', function(e){
                    var $this = $(this);
                    // don't proceed if already selected
                    if ( $this.hasClass('selected') ) {
                      // return false;
                      e.preventDefault();
                    }
                    var $optionSet = $this.parents('.simplefilter');
                    $optionSet.find('.selected').removeClass('selected');
                    $this.addClass('selected');


});



  if($('infos-inner').hasClass(':not(.active)')){
     $( '.infos_description' ).hover(

          function() {
           $(this).toggleClass('active');
           $(this).find('.info-inner').removeClass('active');
         });

  }




//quicksnad


  var filterizd = $('.filtr-container').filterizr({
   //options object
});

 

});


//map

            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.6700, -73.9400), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"all","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#ed5929"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#c4c4c4"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#ffcb05"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21},{"visibility":"on"}]},{"featureType":"poi.business","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffcb05"},{"lightness":"0"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#ed5929"},{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffcb05"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#666666"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            };
       
