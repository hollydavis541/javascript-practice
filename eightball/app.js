let userName = 'Holly';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

userQuestion = 'Will I get a good apprenticeship position?'

console.log('Will I win a million dollars?')

let randomNumber = Math.floor(Math.random() * 7);

let eightBall = '';

switch(randomNumber) {
  case 0:
  eightBall = 'It is certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'My sources say no';
  break;
  case 5:
  eightBall = 'Outlook not so good';
  break;
  case 6:
  eightBall = 'Signs point to yes';
  break;
  case 7:
  eightBall = 'Do not count on it';
  break;
}

console.log(eightBall)