$(function(){
 
  
  $('.nav-toggle, .nav-close').click(function(e){
     e.preventDefault();
     $('.nav').toggleClass('active');
  });

 
  $(window).scroll(function(){ 
     if($(this).scrollTop() > 100){
          $('.nav-bar').addClass('fixed');
     }else{
          $('.nav-bar').removeClass('fixed');
     }
  });
});