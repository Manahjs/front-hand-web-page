
// Footer Credit Current Year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

$(document).ready(function(){

	$(window).scroll(function() {
		//Checking if each items to animate are 
		//visible in the viewport
		$("h2[data-max]").each(function() {
		  inVisible($(this));
		});
	  })

	// Switch Tab portfolio
	$("#switch-id").change(function () {
		if ($(this).is(":checked")) {
			$(".contentB").show();
			$(".contentA").hide();
			$(".all").show();
		} else {
			$(".contentB").hide();
			$(".contentA").show();
		}
	});

$("#portfolio-flters li").click(function(){
	var dataMap = $(this).data("map");
	
	if($(".tooltip-map-down").hasClass(dataMap))
	{
		$(".tooltip-map-down").hide();		
		$('.'+dataMap+'').show();
		
	}
});
    // // set the image-map width and height to match the img size
    // $('#image-map').css({'width':$('#image-map img').width(),
    //                   'height':$('#image-map img').height()
    // })
    
    // //tooltip direction
    // var tooltipDirection;
                 
    // for (i=0; i<$(".pin").length; i++)
    // {               
    //     // set tooltip direction type - up or down             
    //     if ($(".pin").eq(i).hasClass('pin-down')) {
    //         tooltipDirection = 'tooltip-map-down';
    //     } else {
    //         tooltipDirection = 'tooltip-map-up';
    //         }
    
    //     // append the tooltip-map
    //     $("#image-map").append("<div style='left:"+$(".pin").eq(i).data('xpos')+"px;top:"+$(".pin").eq(i).data('ypos')+"px' class='" + tooltipDirection +"'>\
    //                                         <div class='tooltip-map'>" + $(".pin").eq(i).html() + "</div>\
    //                                 </div>");
    // }    
    
    // // show/hide the tooltip-map
    // $('.tooltip-map-up, .tooltip-map-down').mouseenter(function(){
    //             $(this).children('.tooltip-map').fadeIn(100);
    //         }).mouseleave(function(){
    //             $(this).children('.tooltip-map').fadeOut(100);
    //         })
});
// Contact Form
function sendEmail(){
let emailUname = document.getElementById("name-typewirte").value;
let emailMob = document.getElementById("phone-typewirte").value;
let emailComp = document.getElementById("company-typewirte").value;
let emailEmail = document.getElementById("email-typewirte").value;
let emailBody = document.getElementById("comment-typewirte").value;
let bodyContent = "Name:" + emailUname + "<br/> Email:" + emailEmail + "<br/> Mobile Number:" + emailMob + "<br/> Company Name:" +emailComp+ "<br/>" + emailBody;

	Email.send({
		Host : "smtp.elasticemail.com",
		Username : "edendc.projects@gmail.com",
		Password : "C581280E24B6D4DC0BDB6635E47EF62799AE",
		To : 'edendc.projects@gmail.com',
		From : "edendc.projects@gmail.com",
		Subject : emailUname,
		Body : bodyContent
	}).then(
	  message => alert(message)
	);
}

// Testimonial Slider

var menu = ['Hitarth & Netra', 'Urv Patel', 'Tejas Trivedi', 'Dhwani Patel', 'Purav Patel']
var mySwiper = new Swiper ('.swiper-container', {
	 autoplay: {
    delay: 5000,
  },
  direction: 'vertical',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
			
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
// Testimonial Slider End

// Copy to Clipboard
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	const textCopy = $("#changeCopyStatus");
	const textToReplace = textCopy.text();
	const newText = textToReplace.replace("COPY", "COPIED");
	textCopy.text(newText); 
	$temp.remove();

	setTimeout(function(){
		const textCopy = $("#changeCopyStatus");
		const textToReplace = textCopy.text();
		const newText = textToReplace.replace("COPIED", "COPY");
		textCopy.text(newText); 
	  }, 1500);
  }

  // Copy to Clipboard End

jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});


// OurWork Slider
(function() {

	function init(item) {
		var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;
        
		//create nav
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//create button prev
		var prevbtn = document.createElement('a');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//create button next
		var nextbtn = document.createElement('a');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//create counter
		var counter = document.createElement('div');
		counter.className = 'counter';
		counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";

		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			//update counter
			counter.firstChild.textContent = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		//keyboard navigation
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		// swipe navigation
		// from http://stackoverflow.com/a/23230280
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reset values */
			xDown = null;
			yDown = null;
		};


	}

	[].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
		init(item);
	});

})();

// Main Banner slider End


// // Testimonial
// $(document).ready(function(){
//     $("#testimonial-slider").owlCarousel({
//         items:1,
//         itemsDesktop:[1000,2],
//         itemsDesktopSmall:[979,1],
//         itemsTablet:[768,1],
//         pagination:false,
//         navigation:true,
//         slideSpeed:1000,
//         singleItem:true,
//         transitionStyle:"goDown",
//         navigationText:["",""],
//         autoPlay:false
//     });
// });


// Navbar For Mobile

var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobileView');
var demo1 = document.getElementById('demo11');


$( "#burgerBtn" ).click(function() {
	$("#mobile-nav").fadeToggle( "slow", "linear" );
	if($("#openMe").is(":visible") == true)
	{
		$("#openMe").hide();
		$("#closeMe").show();
	}else{
		$("#openMe").show();
		$("#closeMe").hide();
	}

  });

// Navbar For Mobile End


//Scroll Counter
function inVisible(element) {
	//Checking if the element is
	//visible in the viewport
	var WindowTop = $(window).scrollTop();
	var WindowBottom = WindowTop + $(window).height();
	var ElementTop = element.offset().top;
	var ElementBottom = ElementTop + element.height();
	//animating the element if it is
	//visible in the viewport
	if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
	  animate(element);
  }
  
  function animate(element) {
	//Animating the element if not animated before
	if (!element.hasClass('ms-animated')) {
	  var maxval = element.data('max');
	  var html = element.html();
	  element.addClass("ms-animated");
	  $({
		countNum: element.html()
	  }).animate({
		countNum: maxval
	  }, {
		//duration 5 seconds
		duration: 2000,
		easing: 'linear',
		step: function() {
		  element.html(html + Math.floor(this.countNum));
		},
		complete: function() {
		  element.html(html + this.countNum );
		}
	  });
	}
  
  }