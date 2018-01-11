
 // User Age Calcualtion
export class Age {
  constructor(dob, gender, smoker, runner, lefty) {
    this.dob = dob;
    this.gender = gender;
    this.smoker = smoker;
    this.runner = runner;
    this.lefty = lefty;
  }

  ageInYears() {
    let dob = this.dob;
    let ageInYears = moment().diff(dob, 'years');
    return ageInYears;
  }

  ageInSeconds(){
    let ageInSeconds = this.ageInYears() * 31536000;
    return ageInSeconds;
  }

  mercury(){
    let mercuryAge = Math.round(this.ageInYears() * 0.24);
    return mercuryAge;
  }

  venus(){
    let venusAge = Math.round(this.ageInYears() * 0.62);
    return venusAge;
  }

  mars() {
    let marsAge = Math.round(this.ageInYears() * 1.88);
    return marsAge;
  }

  jupiter() {
    let jupiterAge = Math.round(this.ageInYears() * 11.86);
    return jupiterAge;
  }

  //Life Expectancy Notes//
  // US average age = 71
  // male --> takes 5 years off life
  // smoker --> takes 13 years off life
  // runner --> adds 5 years to life
  // lefty --> takes 3 years off life

  lifeExpectancyEarth(gender, smoker, runner, lefty) {
    let averageLife = 71;
    if (gender === 'male') {
      averageLife -= 5;
    }
    if (smoker === 'yes') {
      averageLife -= 13;
    }
    if (runner === 'yes') {
      averageLife += 5;
    }
    if (lefty === 'yes') {
      averageLife -= 3;
    }
    return averageLife;
  }

  lifeExpectancyMercury() {
    let earthLife = this.lifeExpectancyEarth();
    let mercuryLife = Math.round(earthLife / 0.24);
    return mercuryLife;
  }

  lifeExpectancyVenus() {
    let earthLife = this.lifeExpectancyEarth();
    let venusLife = Math.round(earthLife / 0.62);
    return venusLife;
  }

  lifeExpectancyMars() {
    let earthLife = this.lifeExpectancyEarth();
    let marsLife = Math.round(earthLife / 1.88);
    return marsLife;
  }

  lifeExpectancyJupiter() {
    let earthLife = this.lifeExpectancyEarth();
    let jupiterLife = Math.round(earthLife / 11.86);
    return jupiterLife;
  }

  earthYearsLeft() {
    let earthLife = this.lifeExpectancyEarth();
    let age = this.ageInYears();
    let yearsLeft = earthLife - age;
    return yearsLeft;
  }

  mercuryYearsLeft() {
    let mercuryLife = this.lifeExpectancyMercury();
    let age = this.ageInYears();
    let yearsLeft = mercuryLife - age;
    return yearsLeft;
  }

  venusYearsLeft() {
    let venusLife = this.lifeExpectancyVenus();
    let age = this.ageInYears();
    let yearsLeft = venusLife - age;
    return yearsLeft;
  }

  marsYearsLeft() {
    let marsLife = this.lifeExpectancyMars();
    let age = this.ageInYears();
    let yearsLeft = marsLife - age;
    return yearsLeft;
  }

  jupiterYearsLeft() {
    let jupiterLife = this.lifeExpectancyJupiter();
    let age = this.ageInYears();
    let yearsLeft = jupiterLife - age;
    return yearsLeft;
  }
}
