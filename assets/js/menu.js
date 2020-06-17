// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// SCROLL WINDOW TO ID

$('a[href^="#"]').on('click', function(event) {
		var target = $(this.getAttribute('href'));
		if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
						scrollTop: target.offset().top
				}, 1000);
		}
});

// Menu Slide

	var menuHideShow = $('.menu').hasClass('menu_show');

	function desplazar (){
		$('.menu').toggleClass('menu_show');
    $('.hamburger_div').toggleClass('hamburger_div-slide');
		$('#hambIconOne').toggleClass('hamburger_icon_one');
		$('#hambIconTwo').toggleClass('hamburger_icon_two');
		$('#hambIconThree').toggleClass('hamburger_icon_three');
		// $('.menuicon').toggleClass('menuicon-black');
	}
	$('.hamburger_div').on('click', function(e){
		desplazar();
		e.stopPropagation();
		menuHideShow = $('.menu').hasClass('menu_show');
		console.log(menuHideShow)
	})

	window.addEventListener('click', function(e){
		if (menuHideShow = true && e.target.className != 'menu menu_show') {
			$('.menu').removeClass('menu_show');
			$('.hamburger_div').removeClass('hamburger_div-slide');
			$('#hambIconOne').removeClass('hamburger_icon_one');
			$('#hambIconTwo').removeClass('hamburger_icon_two');
			$('#hambIconThree').removeClass('hamburger_icon_three');
			// $('.menuicon').removeClass('menuicon-black');
			// e.stopPropagation();
		}
	})


// MENU STYLE

	var sectionOne = $('#sectionOne').offset();
	var sectionTwo = $('#sectionTwo').offset();
  var sectionThree = $('#sectionThree').offset();
  var sectionFour = $('#sectionFour').offset();
	var position = $(window).scrollTop();




  $(document).ready(function() {

      // MODAL BOX SHOW AND HIDE

    $('.modal_close').on('click', function(){
      $('.modal-box').removeClass('modal-show');
    })

    var modalId = $('.modal-box').attr('id');
    // var projectId = ;

    $('.card_link').on('click', function(){

      var projectIdConnect = $(this).attr('data-target');

      $('#'+projectIdConnect).addClass('modal-show');

    })

    var proyectCategory = $('.proyect_categories').children('li');
    var proyectTodos = $('.proyect_categories').children('li:nth-child(1)');
    var proyectActDep = $('.proyect_categories').children('li:nth-child(2)');
    var proyectInfDep = $('.proyect_categories').children('li:nth-child(3)');
    var filtered = false;

    proyectCategory.on('click', function(){
      proyectCategory.css('color', '#fff');
      $(this).css('color', '#C6D92C');
    });



    // proyectTodos.on('click', function() {
    //   $('.carousel').slick('slickUnfilter');
    //   filtered = false;
    // });
    //
    // proyectActDep.on('click', function() {
    //   $('.carousel').slick('slickUnfilter');
    //   $('.carousel').slick('slickFilter', $('.act-dep').parent().parent());
    //   filtered = true;
    // });
    //
    // proyectInfDep.on('click', function() {
    //   $('.carousel').slick('slickUnfilter');
    //   $('.carousel').slick('slickFilter', $('.inf-dep').parent().parent());
    //   filtered = true;
    // });



    // $(document).ready(function (){
    //     var $slider = $( '.carousel' );
    //     var $slider_clone = $slider.clone( true, true ); // add true, true to clone events too!
    //     // Create a new clone for the slider items
    //     var $new_slider = $slider_clone.clone( true, true );
    //
    //     init_slider();
    //
    //     $('.carousel').css("display","block");
    //
    //     // When someone clicks on a filter
    //     proyectCategory.on( 'click', function(){
    //         var filter_name = $(this).data('value');
    //
    //         // Clear current slider
    //         $slider.slick( 'unslick' ); // Remove slick
    //         $slider.empty(); // Remove elements
    //
    //         // Show only filtered items
    //         if( filter_name == "All" ) {
    //             $slider.append( $new_slider.find( '.card' ) );
    //         } else {
    //             $slider.append( $new_slider.find( '.card' + filter_name ) );
    //         }
    //
    //         // Slick slider init
    //         init_slider();
    //
    //     });
    //
    // });
    //
    // function init_slider() {
    //   $('.carousel').slick({
    //     lazyLoad: 'ondemand',
    //     arrows: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     rows: 1,
    //     responsive: [
    //       { breakpoint: 478,
    //         settings: {
    //           slidesPerRow: 1,
    //           rows: 1,
    //           slidesToShow: 2,
    //           slidesToScroll: 2,
    //         }
    //       }]
    //     });
    // }



  });



  // DESKTOPS

  // ---------------------------------


	var x = window.matchMedia("(min-width: 1100px)");
  //
	function myFunction(x) {
	  if (x.matches) { // If media query matches

	  		var windowHeight = $( window ).height();
	  		var position = $(window).scrollTop();

  //
  //
  //       // MENU CHANGE
  //
        $(window).on('scroll', function(){
          if ($(window).scrollTop() >= sectionOne.top + 100) {
            $('#diagonalUno').addClass('header_diagonal_uno-fade');
            $('#diagonalDos').addClass('header_diagonal_dos-fade');
          } else {
            $('#diagonalUno').removeClass('header_diagonal_uno-fade');
            $('#diagonalDos').removeClass('header_diagonal_dos-fade');
          }
        })

          $(window).on('load', function(){
            $('.header_title').addClass('header-from-left');
            $('.header_description').addClass('header-from-right');
          })

          // MENU ACTIVE

          $(window).on('scroll', function(){

          if($(window).scrollTop() >= sectionOne.top - 100) {
            $('#menu').children('a:nth-child(1)').addClass('menu-link-active');
            $('#menu').children('a:nth-child(3)').removeClass('menu-link-active');
          } else {
            $('#menu').children('a:nth-child(1)').removeClass('menu-active');
          }

          if($(window).scrollTop() >= sectionTwo.top - 100) {
            $('#menu').children('a:nth-child(1)').removeClass('menu-link-active');
            $('#menu').children('a:nth-child(3)').addClass('menu-link-active');
            $('#menu').children('a:nth-child(5)').removeClass('menu-link-active');
          }

          if($(window).scrollTop() >= sectionThree.top - 100) {
            $('#menu').children('a:nth-child(3)').removeClass('menu-link-active');
            $('#menu').children('a:nth-child(5)').addClass('menu-link-active');
            $('#menu').children('a:nth-child(7)').removeClass('menu-link-active');
          }

          if($(window).scrollTop() >= sectionThree.top * 10/7) {
            $('#menu').children('a:nth-child(5)').removeClass('menu-link-active');
            $('#menu').children('a:nth-child(7)').addClass('menu-link-active');
          }

          })



          // MEDIDA
          $(function(){
            var
            Node = $('#tapeContainer'),
            BaseWidth = Node.width();

            $(window).resize(function() {
                $('#tapeContainer').css({
                    top: ($(window).height() - $('#tapeContainer').outerHeight()) / 2
                });
            });



            // To initially run the function:
            // $(window).resize();


            var $scrollingDiv = Node;
            $(window).scroll(function() {
                var winScrollTop = $(window).scrollTop() + 200,
                    zeroSizeHeight = $(document).height() - $(window).height(),
                    newSize = BaseWidth * ( 1 - (winScrollTop / zeroSizeHeight) * (3/4) );

                Node.css({
                    width: newSize,
                    // "marginTop": winScrollTop + "px"
                });
            });

        });


		}
	}

	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes



  // COUNTER

  var expertos = $('#sectionTwo').offset();

  // const sm = window.matchMedia( "(max-width: 992px)" );
  // const md = window.matchMedia( "(min-width: 1000px)" );
  // if (mq.matches) {
  	$(window).scroll(function(){
  		if ($(window).scrollTop() >= expertos.top - 350) {
  			$('.count').each(function() {
  			var $this = $(this),
  						countTo = $this.attr('data-count');
  				$({ countNum: $this.text()}).animate({
  					countNum: countTo
  				},
  				{
  					duration: 1200,
  					easing:'swing',
  					step: function() {
  						$this.text(Math.floor(this.countNum));
  					},
  					complete: function() {
  						$this.text(this.countNum);
  						//alert('finished');
  					}
  				});
  		});
  	}
  })


  // PROJECT SLIDESHOW

  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
