/*----------------------------------------------------*/
/*  SIDEBAR
/*----------------------------------------------------*/
$(document).ready(function () {

	$(".js-filter-header").on("click", function(i) {
    i.preventDefault();

    if ( ! $(this).next().hasClass("is-active") ) {
      $(this).next().slideToggle();
      $(this).next().addClass("is-active");
      $(this).find(".filter-title").addClass("is-active");

    } else {
      $(this).next().slideToggle();
      $(this).next().removeClass("is-active");
      $(this).find(".filter-title").removeClass("is-active");
    }
  });

  
});

$(window).on("load", function () {
  if ( $(window).width() < 577 ) {
    $('.filter-title, .filters-params').removeClass("is-active");
  }
});


/*----------------------------------------------------*/
/*  #RANGESLIDER
/*----------------------------------------------------*/
$(document).ready(function () {

  // Elements
  var slider = $('#budgetSlider');
  
  $( "#budgetSlider" ).slider({
    range: 'min',
    min: 1000,
    max: 10000,
    value: 5000,
    slide: function( event, ui ) {
      // $( "#square" ).val(ui.value);
      // getSum();
    }
  });

});