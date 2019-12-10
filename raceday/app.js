let raceNumber = Math.floor(Math.random() * 1000);

let regEarly = true;

let age = 17;

if (regEarly === true && age > 18) {
  raceNumber += 1000;
}

if (age > 18 && regEarly === true) {
  console.log(`Your race number is ${raceNumber} and your race start time is 9:30 AM`)
} else if (age > 18 && regEarly !== true) {
  console.log(`Your race number is ${raceNumber} and your race start time is 11:00 AM`)
} else if (age < 18){
  console.log(`Your race number is ${raceNumber} and your race start time is 12:30 PM`)
} else {
  console.log('Please go to the registration desk')
}