import { Age, LifeExpectancy } from './../js/galactic-logic.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const enteredAge = parseInt($('#age').val());
    console.log(enteredAge);
    const newAgeSeconds = new Age(enteredAge);
    console.log(newAgeSeconds);
    $('#age-form').slideUp();
    $('.resluts').append(`<li> Your age in years is: ${enteredAge} </li>`);
    $('.resluts').slideDown();





  });
});
