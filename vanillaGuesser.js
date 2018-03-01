var submitButton = document.getElementById('submit');
var userGuess = document.getElementById('user-input');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var specialNum;
var guessForm = document.getElementById('guess-form');
var userHint = document.getElementById('display-hint');
var displayGuess = document.getElementById('display-guess');
var min = 1;
var max = 100;
var newRange = document.getElementById('displayNewRange');
var userGuessValue = parseInt(userGuess.value);
var userMin = document.getElementById('user-min');
var userMax = document.getElementById('user-max');

function randomNum() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

specialNum = randomNum();

function userRangeText() {
  if(min > max) {
    newRange.innerText = 'That is not a valid range';
  } else if(userMin.value && userMax.value){  
    min = parseInt(userMin.value);
    max = parseInt(userMax.value);
    displayGuess.innerText = '?';
    userHint.innerText = '';
    newRange.innerText = 'Your new range is ' +min+ ' to ' +max;
    min.value = '';
    max.value = '';
  } else {
    newRange.innerText = '';
    userHint.innerText = '';
  }
}

userGuess.addEventListener('keyup', function(event) {
  submitButton.removeAttribute('disabled');
  resetButton.removeAttribute('disabled');
  clearButton.removeAttribute('disabled');
});

clearButton.addEventListener('click', function(event) {
  userGuess.value = '';
  userHint.innerText = '';
  displayGuess.innerText = '???';
  //console.log(displayGuess.innerText);
});

resetButton.addEventListener('click', function(event) {
  specialNum = randomNum();
  console.log(specialNum);
  userGuess.value = '';
  userHint.innerText = '';
  userMin.value = '';
  userMax.value = '';
  displayGuess.innerText = '?';
  newRange.innerText = '';
  min = 1;
  max = 100;
});

guessForm.addEventListener('submit', function(event) {
  event.preventDefault();
  userRangeText();
  userGuessValue = parseInt(userGuess.value);
  if(userGuessValue !== NaN) {
  displayGuess.innerText = userGuess.value;
}
if(userMin.value && userMax.value !== '') {
    min = parseInt(userMin.value);
    max = parseInt(userMax.value);
  } else {
    min = min;
    max = max;
  }
  if(userGuessValue < min || userGuessValue > max) {
    specialNum = randomNum();
    console.log(specialNum);
    userRangeText();
    //userHint.innerText = "Enter a numerical value between " +min+ " and " +max;
  }
  if(userGuessValue === specialNum) {
    console.log(specialNum);
    userHint.innerText = "BOOM!";
    specialNum = randomNum();
    console.log(specialNum);
  } else if (typeof userGuessValue === String || userGuessValue > max || userGuessValue < min) {
    userHint.innerText = "Choose a number between " +min+ " and " +max;
}
    else if (userGuessValue > specialNum){
    userHint.innerText = "That is too high";
  } else {
    userHint.innerText = "That is too low";
  }
});
