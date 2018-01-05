
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

};
