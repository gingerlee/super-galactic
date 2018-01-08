
 // User Age Calcualtion
export class Age {
  constructor(enteredAge) {
    this.age = enteredAge;
  }

  AgeInSeconds(){
    let ageDays = enteredAge * 365.25;
    let ageHours = ageDays * 24;
    let ageMinutes = ageHours * 60;
    let ageSeconds = ageMinutes * 60;
    return ageSeconds;
  }

  // AccurateAgeInSeconds(){
  //   let now = moment().unix();
  //   let then = date.unix();
  //   let diff = (now - then) / (60 * 60 * 24 * 365);
  //   let years = Math.floor(diff);
  // }

  Mercury(){
    const mercuryAge = enteredAge / .24
    return mercuryAge;
  }

  Venus(){
    const venusAge = enteredAge / .62;
    return venusAge;
  }

  Mars() {
    const marsAge = enteredAge / 1.88;
    return marsAge
  }

  Jupiter() {
    const jupiterAge = enteredAge / 11.86;
    return jupiterAge;
  }

  // LifeExpectancy(gender, smoker, runner, lefty){
  //   const averageLife = 71; //US average
  //   smoker - takes 13 years off life
  //   male - takes 8 years off life
  //   runner - adds 5 years to life
  //   lefty - takes 3 years off life
  //   if
  // }
};
