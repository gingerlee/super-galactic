import { Age } from './../js/galactic-logic.js';

describe ("Age", function() {
  var testAge;

  beforeEach(function(){
    testAge = new Age(34);
  });

  it("should test whether an entered age outputs entered age integer", function() {
    expect(testAge.age).toEqual(34);
  });
