import { Age } from './../js/galactic-logic.js';

describe ("Age", function() {
  let testAge;

  beforeEach(function(){
    testAge = new Age('09-07-1983', 'female', 'no', 'yes', 'yes');
  });

  it('it takes an entered age from user', function() {
    expect(testAge.dob).toEqual('09-07-1983');
  });

  it('it calculates enterd age into age in seconds', function() {
    expect(testAge.ageInSeconds(testAge)).toEqual(1072224000);
  });

  it('it calculates enterd age into age on Mercury', function() {
    expect(testAge.mercury(testAge)).toEqual(8);
  });

  it('it calculates enterd age into age on Venus', function() {
    expect(testAge.venus(testAge)).toEqual(21);
  });

  it('it calculates enterd age into age on Mars', function() {
    expect(testAge.mars(testAge)).toEqual(64);
  });

  it('it calculates enterd age into age on Jupiter', function() {
    expect(testAge.jupiter(testAge)).toEqual(403);
  });

  it('it calculates enterd age into life expectancy on Earth', function() {
    expect(testAge.lifeExpectancyEarth('female', 'no', 'yes', 'yes')).toEqual(73);
  });

});
