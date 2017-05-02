
$(document).ready(function(){

inView.threshold(0.5);
inView('.section').on('enter', function(el){
console.log($(el));
var blockName = $(el).attr('id');
$('.header-menu').find('a[href="#'+blockName+'"]').addClass("active");
});

inView('.section').on('exit', function(el){
console.log($(el));
var blockName = $(el).attr('id');
$('.header-menu').find('a[href="#'+blockName+'"]').removeClass("active");
});
$(".header-menu a").on('click', function(event) {

if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });

 //FIXED MENU
  $(window).scroll(function() {
    var scrollHeight = $(".header").height();
    if ($(document).scrollTop() > scrollHeight - 70) {
      $(".header-menu").addClass("fixed");
    } else {
      $(".header-menu").removeClass("fixed");
    }
  });






});