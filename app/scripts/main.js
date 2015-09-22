'use strict';
jQuery(document).ready(function($) {
  // Tabs switcher
  $('.tabs').on('click', '.tabs_buttons li', function(event) {
    event.preventDefault();
    var index = $(this).index();
    $('.tabs_blocks li, .tabs_buttons li')
      .removeClass('current');
    $('.tabs_blocks li:eq(' + index + '), .tabs_buttons li:eq(' + index + ')')
      .addClass('current');
  });
  // Selectbox style plugins
  $('.selectStyle').selectize({
    create: true,
    sortField: 'text'
  });
  // UI slider
  // Get element by id
  var ExampleSlider = document.getElementById('uislider');
  // Array slider parameters
  var ranges = {
    'min': [ 0 ],
    'max': [ 14000 ]
  };
  // Init slider
  $('.ui-slider-description .min').html(ranges.min);
  $('.ui-slider-description .max').html(ranges.max);
  noUiSlider.create(ExampleSlider, {
    connect: true,
    behaviour: 'tap',
    start: [ 500, 4000 ],
    range: ranges
  });
  // Binding inputs
  var inputMin = document.getElementById('input-min');
  var inputMax = document.getElementById('input-max');
  ExampleSlider.noUiSlider.on('update', function(value, handle){
    var val = value[handle];
    if ( handle ) {
      inputMax.value = Math.round(val);
    } else {
      inputMin.value = Math.round(val);
    }
  });
  inputMin.addEventListener('change', function(){
    ExampleSlider.noUiSlider.set([this.value, null]);
  });

  inputMax.addEventListener('change', function(){
    ExampleSlider.noUiSlider.set([null, this.value]);
  });
  // Owl carousel
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        480:{
            items:2,
            nav:false
        },
        680:{
            items:3,
            nav:false
        },
        880:{
            items:4,
            nav:true,
            loop:false
        },
        1280:{
            items:5,
            nav:true,
            loop:false
        }
    }
  });
});
