
    var elements = document.querySelectorAll('[data-chaffle]');
    Array.prototype.forEach.call(elements, function (el) {
      var chaffle = new Chaffle(el)
      el.addEventListener('mouseover', function () {
        chaffle.init();
      });
    });
	
	$(document).ready(function() {
$(".sidenav-menu a").click(function () {
    $(".sidenav-menu a").removeClass("active");
    $(this).addClass("active");   
});
});





 

         $('.navbar-nav a').on('click', function(e) {
         $('.navbar-toggle').toggleClass("collapsed");
		 $('.navbar-toggle').attr("aria-expanded","false");
		 $('#myNavbar').attr("aria-expanded","false");
		 $('.navbar-collapse').removeClass("in");
         e.preventDefault();
         }); 
		 
		 
         $('.tog-btn i').on('click', function(e) {
         $('.sidenav').toggleClass("width-none");
         $('.fas').toggleClass("i-rotate");
         $('.logo-img').toggleClass("dis-none");
         e.preventDefault();
         });       

         $('#home').on('click', function(e) {
          $('.about, .skills, .work, .contact').css("display","none");
      $('.front-wrap').css("display","block");
          e.preventDefault();
          }); 

         $('#ab').on('click', function(e) {
         $('.front-wrap, .skills, .work, .contact').css("display","none");
		 $('.about').css("display","block");
         e.preventDefault();
         });  

         $('#sk').on('click', function(e) {
         $('.front-wrap, .about, .work, .contact').css("display","none");
		 $('.skills').css("display","block");
         e.preventDefault();
         }); 

         $('#wrk').on('click', function(e) {
         $('.front-wrap, .about, .skills, .contact').css("display","none");
		 $('.work').css("display","block");
         e.preventDefault();
         }); 	

         $('#cn').on('click', function(e) {
         $('.front-wrap, .about, .skills, .work').css("display","none");
		 $('.contact').css("display","block");
         e.preventDefault();
         }); 

         $('#ab-m').on('click', function(e) {
         $('.front-wrap, .skills, .work, .contact').css("display","none");
		 $('.about').css("display","block");
         e.preventDefault();
         });  

         $('#sk-m').on('click', function(e) {
         $('.front-wrap, .about, .work, .contact').css("display","none");
		 $('.skills').css("display","block");
         e.preventDefault();
         }); 

         $('#wrk-m').on('click', function(e) {
         $('.front-wrap, .about, .skills, .contact').css("display","none");
		 $('.work').css("display","block");
         e.preventDefault();
         }); 	

         $('#cn-m').on('click', function(e) {
         $('.front-wrap, .about, .skills, .work').css("display","none");
		 $('.contact').css("display","block");
         e.preventDefault();
         }); 
		 
         $('#con-form').on('click', function(e) {
         $('.front-wrap, .skills, .work, .about').css("display","none");
		 $('.contact').css("display","block");
		 $(".sidenav-menu a").removeClass("active");
		 $(".cnt-active").addClass("active");
         e.preventDefault();
         });		 



         particlesJS("particles-js", {
         "particles": {
           "number": {
             "value": 80,
             "density": {
               "enable": true,
               "value_area": 800
             }
           },
           "color": {
             "value": "#ffffff"
           },
           "shape": {
             "type": "circle",
             "stroke": {
               "width": 0,
               "color": "#000000"
             },
             "polygon": {
               "nb_sides": 5
             },
             "image": {
               "src": "img/github.svg",
               "width": 100,
               "height": 100
             }
           },
           "opacity": {
             "value": 0.5,
             "random": false,
             "anim": {
               "enable": false,
               "speed": 1,
               "opacity_min": 0.1,
               "sync": false
             }
           },
           "size": {
             "value": 3,
             "random": true,
             "anim": {
               "enable": false,
               "speed": 40,
               "size_min": 0.1,
               "sync": false
             }
           },
           "line_linked": {
             "enable": true,
             "distance": 150,
             "color": "#ffffff",
             "opacity": 0.4,
             "width": 1
           },
           "move": {
             "enable": true,
             "speed": 6,
             "direction": "none",
             "random": false,
             "straight": false,
             "out_mode": "out",
             "bounce": false,
             "attract": {
               "enable": false,
               "rotateX": 600,
               "rotateY": 1200
             }
           }
         },
         "interactivity": {
           "detect_on": "canvas",
           "events": {
             "onhover": {
               "enable": true,
               "mode": "repulse"
             },
             "onclick": {
               "enable": true,
               "mode": "push"
             },
             "resize": true
           },
           "modes": {
             "grab": {
               "distance": 400,
               "line_linked": {
                 "opacity": 1
               }
             },
             "bubble": {
               "distance": 400,
               "size": 40,
               "duration": 2,
               "opacity": 8,
               "speed": 3
             },
             "repulse": {
               "distance": 200,
               "duration": 0.4
             },
             "push": {
               "particles_nb": 4
             },
             "remove": {
               "particles_nb": 2
             }
           }
         },
         "retina_detect": true
         });
         

         $('.js-tilt').tilt({
         maxTilt:        20,
         perspective:    1000,  
         speed:          2000, 
         easing:         "cubic-bezier(.03,.98,.52,.99)",
         reset: false,
         glare: true,
         maxGlare: .1
         })
         

         var typtxt = document.getElementById('typtxt');
         
         var typewriter = new Typewriter(typtxt, {
             loop: true
         });
         
         typewriter.typeString('Front-End Developer')
             .pauseFor(2500)
             .deleteAll().typeString('Code tinkerer')
             .pauseFor(2500)
             .deleteAll()
             .typeString('Passionate about fitness')
             .pauseFor(1500)
             .deleteAll()
             .start();

         var typtxt2 = document.getElementById('typtxt2');
         
         var typewriter = new Typewriter(typtxt2, {
             loop: true
         });
         
         typewriter.typeString('Front-End Developer')
             .pauseFor(2500)
             .deleteAll().typeString('Code tinkerer')
             .pauseFor(2500)
             .deleteAll()
             .typeString('Passionate about fitness')
             .pauseFor(1500)
             .deleteAll()
             .start();
	$('.responsive').slick({  infinite: true,  speed: 1000,  slidesToShow: 1,  slidesToScroll: 1,  arrows:true,  variableWidth:false,  centerMode: false,  autoplay:true,    dots:false,  swipe: true,  responsive: [    {      breakpoint: 992,      settings: {        slidesToShow: 1,        slidesToScroll: 1,        infinite: true,        dots: true,		centerMode: true,      }    },    {      breakpoint: 769,      settings: {        slidesToShow: 1,        slidesToScroll: 1      }    },    {      breakpoint: 577,      settings: {        slidesToShow: 1,        slidesToScroll: 1,      }    },	    {      breakpoint: 321,      settings: {        slidesToShow: 1,        slidesToScroll: 1,      }    }  ]});