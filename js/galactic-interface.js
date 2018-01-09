import { Age } from './../js/galactic-logic.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();

    const dob = $('#dob').val();
    const userAge = new Age(dob);

    let userAgeSeconds = userAge.ageInSeconds();
    let userMercury = userAge.mercury();
    let userVenus = userAge.venus();
    let userMars = userAge.mars();
    let userJupiter = userAge.jupiter();
    let userEarthLife = userAge.lifeExpectancyEarth();
    let userMercuryLife = userAge.lifeExpectancyMercury();
    let userVenusLife = userAge.lifeExpectancyVenus();
    let userMarsLife = userAge.lifeExpectancyMars();
    let userJupiterLife = userAge.lifeExpectancyJupiter();
    let userEarthYearsLeft = userAge.earthYearsLeft();
    let userMercuryYearsLeft = userAge.mercuryYearsLeft();
    let userVenusYearsLeft = userAge.venusYearsLeft();
    let userMarsYearsLeft = userAge.marsYearsLeft();
    let userJupiterYearsLeft = userAge.jupiterYearsLeft();

    $('#age-form').slideUp();
    $('.resluts').slideDown();
    
    $('#todaysDate').text(moment());
    $('#enteredDOB').text(dob);
    $('#ageInSeconds').text(userAgeSeconds);
    $('#ageOnMercury').text(userMercury);
    $('#ageOnVenus').text(userVenus);
    $('#ageOnMars').text(userMars);
    $('#ageOnJupiter').text(userJupiter);
    $('#lifeOnEarth').text(userEarthLife);
    $('#lifeOnMercury').text(userMercuryLife);
    $('#lifeOnVenus').text(userVenusLife);
    $('#lifeOnMars').text(userMarsLife);
    $('#lifeOnJupiter').text(userJupiterLife);
    $('#earthYearsLeft').text(userEarthYearsLeft);
    $('#mercuryYearsLeft').text(userMercuryYearsLeft);
    $('#venusYearsLeft').text(userVenusYearsLeft);
    $('#marsYearsLeft').text(userMercuryYearsLeft);
    $('#jupiterYearsLeft').text(userJupiterYearsLeft);

  });
});
