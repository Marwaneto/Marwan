$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');
  });
  $('#social').click(function(){
      $(this).toggleClass('fa-times');
      $('.social_navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
    $('#social').removeClass('fa-times');
    $('.social_navbar').removeClass('nav-toggle');
  });

  $('.portfolio .button-container .button').click(function(){

    let filter = $(this).attr('data-filter');

    if(filter == 'all'){
      $('.portfolio .image-container .box').show('400')
    }else{
      $('.portfolio .image-container .box').not('.'+filter).hide('200');
      $('.portfolio .image-container .box').filter('.'+filter).show('400');
    }

  });

  $('#theme-toggler').click(function(){
    $(this).toggleClass('fa-sun');
    $('body').toggleClass('dark-theme');
  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});
$(window).on("load", function() {
  var t = $(".portfolio-container");
  t.isotope({
      filter: ".new",
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1
      }
  }), $(".work__fillters span").click(function() {
      $(".work__fillters .active").removeClass("active"), $(this).addClass("active");
      var i = $(this).attr("data-filter");
      return t.isotope({
          filter: i,
          animationOptions: {
              duration: 750,
              easing: "linear",
              queue: !1
          }
      }), !1
  });
});