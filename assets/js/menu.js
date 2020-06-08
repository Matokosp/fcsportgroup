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
		console.log(e.target)
	})


// MENU STYLE

	var sectionOne = $('#sectionOne').offset();
	var sectionTwo = $('#sectionTwo').offset();
	var position = $(window).scrollTop();



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
  //
          // if($(window).scrollTop() >= sectionTwo.top - 300) {
          //   $('.menu').addClass('menu_shrink');
          //   $('.menu-link').addClass('menu-link_shrink');
          //   $('.instagram_menu').addClass('instagram_menu_shrink');
          //   $('.laptop_menu_logo_div').addClass('laptop_menu_logo_div_shrink');
          // } else {
          //   $('.menu').removeClass('menu_shrink');
          //   $('.menu-link').removeClass('menu-link_shrink');
          //   $('.instagram_menu').removeClass('instagram_menu_shrink');
          //   $('.laptop_menu_logo_div').removeClass('laptop_menu_logo_div_shrink');
          // }

        })

          $(window).on('load', function(){
            $('.header_title').addClass('header-from-left');
            $('.header_description').addClass('header-from-right');
          })
		}
	}

	myFunction(x) // Call listener function at run time
	x.addListener(myFunction) // Attach listener function on state changes



  // COUNTER

  var expertos = $('#expertos').offset();

  // const sm = window.matchMedia( "(max-width: 992px)" );
  // const md = window.matchMedia( "(min-width: 1000px)" );
  // if (mq.matches) {
  	$(window).scroll(function(){
  		if ($(window).scrollTop() >= expertos.top - 150) {
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
