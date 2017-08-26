$(document).ready(function(){
    $('.dropdown-button').dropdown();
    $(".button-collapse").sideNav();
   // $('.carousel.carousel-slider').carousel({fullWidth:true,indicators: true});
    $('.slider').slider({indicators: false, height: 700});
    $('select').material_select();
    var options=[
        {selector: '.desc', offset: 100, callback: function(el) {
        Materialize.fadeInImage($(el));
      } },
       {selector: '.ult', offset: 400, callback: function(el) {
        Materialize.showStaggeredList($(el));
      } }
    ];
    Materialize.scrollFire(options);
})