import { Age } from './../js/galactic-logic.js';

$(document).ready(function() {
  $('#age-form').submit(function(event) {
    event.preventDefault();

    const dob = $('#dob').val();
    const userGender = $('.gender').val();
    const userSmoker = $('.smoker').val();
    const userRunner = $('.runner').val();
    const userLefty = $('.lefty').val();
    const userAge = new Age(dob, userGender, userSmoker, userRunner, userLefty);
    debugger;

    const userAgeSeconds = userAge.ageInSeconds();
    const userMercury = userAge.mercury();
    const userVenus = userAge.venus();
    const userMars = userAge.mars();
    const userJupiter = userAge.jupiter();
    const userEarthLife = userAge.lifeExpectancyEarth();
    const userMercuryLife = userAge.lifeExpectancyMercury();
    const userVenusLife = userAge.lifeExpectancyVenus();
    const userMarsLife = userAge.lifeExpectancyMars();
    const userJupiterLife = userAge.lifeExpectancyJupiter();
    const userEarthYearsLeft = userAge.earthYearsLeft();
    const userMercuryYearsLeft = userAge.mercuryYearsLeft();
    const userVenusYearsLeft = userAge.venusYearsLeft();
    const userMarsYearsLeft = userAge.marsYearsLeft();
    const userJupiterYearsLeft = userAge.jupiterYearsLeft();

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
