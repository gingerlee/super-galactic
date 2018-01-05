// import { Age } from './../js/galactic-logic.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();
    const enteredAge = parseInt($('#age').val());
    console.log(enteredAge);
    // $('#age-form').slideUp();
    // $('.results').slideDown();
    $('.resluts').append(
    `<li>
    <p>Your age is: ${enteredAge}</p>
    </li>`
    );
  });
});
