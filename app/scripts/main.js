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
    'max': [ 10000 ]
  };
  // Init slider
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
});
