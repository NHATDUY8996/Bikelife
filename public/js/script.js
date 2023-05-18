//script
  let totalBars = document.querySelectorAll(".navMN");

  let changeMenuIcon = function () {
    for (var activeBar = 0;
      activeBar < totalBars.length;
      activeBar++) {
      totalBars[activeBar].classList.toggle("active")

    }
  }
// script

// slide banner
$('.banner__list').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
});
$('.play').on('click',function(){
  owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
  owl.trigger('stop.owl.autoplay')
})
// slide banner

// slide cate
$('.carouselcate').owlCarousel({
    items:6,
    loop:false,
    margin:10,
    dots:false,
    nav:true,
    navText : ['<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>','<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:2,
            nav:false
        },
        768:{
            items:4
        },
        1000:{
            items:5
        }
    }
});
// slide cate
$('.trademark__listcarousel').owlCarousel({
    loop:false,
    margin:10,
    dots:false,
    nav:true,
    items: 2,
    navText : ['<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>',
    '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'],
});
// slide sport
$('.sport__list').owlCarousel({
    items:4,
    loop:false,
    margin:20,
    dots:false,
    nav:true,
    navText : ['<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>','<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>'],
    responsive:{
        0:{
            items:2,
        },
        768:{
            items:4
        },
        1000:{
            items:6
        }
    }
});
// progress banner
$(function() {

  $(".slick-dots .animated-dot").click(function() {
      $(this).toggleClass("play");
      if ($(this).hasClass("play")) {
          isPause = true;
          $('.slider-progress').slick('slickPause');
          $bar.css({
              width: 100 + "%"
          });
      } else {
          isPause = false;
          $(this).css('background-image', '');
          $('.slider-progress').slick('slickPlay');
      }
  });


  var time = 2;
  var $bar,
      isPause,
      tick,
      percentTime;

  $bar = $('.slider-progress .progress');

  function startProgressbar() {
      resetProgressbar();
      percentTime = 0;
      isPause = false;
      tick = setInterval(interval, 10);
  }

  function interval() {
      if ($(".slick-dots .animated-dot").hasClass("play")) {
          isPause = true;
      }
      if (isPause === false) {
          percentTime += 1 / (time + 0.7);
          $bar.css({
              width: percentTime + "%"
          });
          if (percentTime >= 100) {
             
              startProgressbar();
          }
      }
  }

  function resetProgressbar() {
      $bar.css({
          width: 0 + '%'
      });
      clearTimeout(tick);
  }

  startProgressbar();

  $(".banner__list").on("beforeChange", function() {
      resetProgressbar();
      startProgressbar();
      $bar.css({
          width: 100 + "%"
      });
  });

});
// progress banner
// Get the button
let mybutton = document.getElementById("btntop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// animation bottom to top
function bottomToTop() {
    var bottomToTops = document.querySelectorAll(".bottomToTop");
  
    for (var i = 0; i < bottomToTops.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = bottomToTops[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        bottomToTops[i].classList.add("active");
      } else {
        bottomToTops[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", bottomToTop);