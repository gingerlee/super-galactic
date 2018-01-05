
// // User Age Calcualtion
export class Age {
  constructor(enteredAge) {
    this.age = enteredAge;
  }

  AgeInSeconds(){
    let days = this.age * 365.25;
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    return seconds;
  }

  MercuryAge(){
  return enteredAge / .24;
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
  const averageLife = 71;

  }
};
