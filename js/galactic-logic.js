
// // User Age Calcualtion
export class Age {
  constructor(enteredAge) {
    this.age = enteredAge;
  }

  AgeInSeconds(){
    let days = (this.age * 365.25);
    let hours = days * 24;
    let minutes = hours * 60;
    let seconds = minutes * 60;
    return seconds;
  }

  class MercuryAge extends Age {
    return enteredAge / .24;
  }
  class VenusAge extends Age {
    return enteredAge / .62;
  }
  class MarsAge extends Age {
    return enteredAge / 1.88;
  }
  class JupiterAge extends Age {
    return enteredAge / 11.86;
  }
};
