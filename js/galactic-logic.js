
// // User Age Calcualtion
export class Age {
  constructor(enteredAge) {
    this.age = enteredAge;
  }

  AgeInSeconds(){
    let ageDays = this.age * 365.25;
    let ageHours = ageDays * 24;
    let ageMinutes = ageHours * 60;
    let ageSeconds = ageMinutes * 60;
    return ageSeconds;
  }

  AccurateAgeInSeconds(){
    let now = moment().unix();
    let then = date.unix();
    let diff = (now - then) / (60 * 60 * 24 * 365);
    let years = Math.floor(diff);
  }

  MercuryAge(){
    const mercAge = enteredAge / .24
    return mercAge;
  }

  VenusAge(){
  return enteredAge / .62;
  }

  MarsAge() {
  return enteredAge / 1.88;
  }

  JupiterAge() {
  return enteredAge / 11.86;
  }

};

class LifeExpectancy extends Age {
  constructor(enteredAge) {
    this.averageLife = 71;
  }

};
