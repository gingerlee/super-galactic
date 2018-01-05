import { Age } from './../js/galactic-logic.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    let enteredAge = parseInt($('#age').val());
    console.log(enteredAge);
    const newAgeSeconds = new Age(enteredAge);
    console.log(newAgeSeconds);
    $('#age-form').slideUp();
    $('.resluts').slideDown();
    $('.resluts').append(`<li> Your age in years is: ${enteredAge} </li>`);
  });
});
