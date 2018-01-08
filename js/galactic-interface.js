import { Age, LifeExpectancy } from './../js/galactic-logic.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    // $('select').material_select();
    const enteredDOB = $('#dob').val();
    console.log(enteredDOB);
    const newAgeSeconds = new Age(enteredDOB);
    console.log(newAgeSeconds);
    $('#age-form').slideUp();
    $('.resluts').slideDown();
    $('#todaysDate').text(moment());
    $('#enteredDOB').text(enteredDOB);

  });
});
