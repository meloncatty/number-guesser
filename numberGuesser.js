var submitButton = document.getElementById('submit');
var userGuess = document.getElementById('user-input');
var clearButton = document.getElementById('clear');
var resetButton = document.getElementById('reset');
var specialNum = randomNum();
var guessForm = document.getElementById('guess-form');
var userHint = document.getElementById('display-hint');
var displayGuess = document.getElementById('display-guess');

console.log(specialNum);

function randomNum() {
  return specialNum = Math.floor(Math.random() * 100);
}
function disarm() {
  clearButton.setAttribute('disabled', false);
  resetButton.setAttribute('disabled', false);
}
//console.log(event) only within eventListener/jQuery events//
submitButton.addEventListener('click', function(event){
  document.querySelector('#display-guess').innerText = userGuess.value;
});

// $('#submit').on('click', function() {
//   var userGuess = $('#user-input').val();
//   $('#display-guess').text(userGuess);
// })

clearButton.addEventListener('click', function(event) {
  userGuess.value = '';
  userHint.innerText = '';
  displayGuess.innerText = '';
  disarm();
});

// $('#clear').on('click', function() {
//   $('#user-input').empty();
//   $('#clear').removeAttr('disabled', false);
//   $('#reset').attr('disabled', false);
// })

resetButton.addEventListener('click', function(event) {
  specialNum = randomNum();
  userGuess.value = '';
  userHint.innerText = '';
  displayGuess.innerText = '';
  disarm();
});

guessForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var userGuess = document.getElementById('user-input');
  userGuess = userGuess.value;
  console.log(userGuess);
  // console.log();
  if (userGuess.length > 0) {
    clearButton.removeAttribute('disabled');
    resetButton.removeAttribute('disabled');
  } else {
    clearButton.setAttribute('disabled', false);
    resetButton.setAttribute('disabled', false);
  }
  if(isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
    userHint.innerText = "Enter a numerical value between 1 and 100";
  } else {
    if(userGuess === specialNum) {
      userGuess = parseInt(userGuess)
      console.log(specialNum);
      userHint.innerText = "BOOM!";
    } else if (userGuess > specialNum){
      userHint.innerText = "That is too high";
    } else {
      userHint.innerText = "That is too low";
    }
  }
});



// $(document).ready(function () {
  // var num= randomNum();
  // $('#reset').click(function() {
  //   $(':input', '#guess-form').val('');
  //   $('#display-hint').empty();
  //   $('#display-guess').empty();
  //   $('#reset').attr('disabled', true);
  //   $('#clear').attr('disabled', true);
  //   num = randomNum();
  // });
  // $('form').submit(function (event) {
  //   event.preventDefault();
  //   var userGuess = $('#user-input').val();
  //   if (userGuess.length > 0) {
  //     $('#clear').removeAttr('disabled');
  //     $('#reset').removeAttr('disabled');
  //   } else {
  //     $('#clear').attr('disabled', true);
  //     // $('#reset').attr('disabled', true);
  //   }
//     if (isNaN(userGuess) || userGuess > 100 || userGuess < 1) {
//       $('#display-hint').text('Enter numerical value between 1 and 100');
//     } else {
//       userGuess = parseInt(userGuess);
//       if(userGuess === randomNum) {
//         $('#display-hint').text('BOOM!');
//       } else if(userGuess > randomNum){
//         $('#display-hint').text('That is too high');
//       } else {
//         $('#display-hint').text('That is too low');
//       };
//     };
//   });
// });






// function guessResult(num) {
//   if(userInput === num) {
//     console.log('Correct');
//   } else if(userInput > num){
//     console.log('Too high');
//   } else {
//     console.log('Too low');
//   };
// };


// submitButton.addEventListener('click', function(){
//   displayUserGuess.innerText = userInput.value;
// });
//
// function displayHint() {
//
//   if(randomNum === $('#user-input')) {
//     console.log("Correct");
//   } else if(randomNum < userInput) {
//     console.log("Too high");
//   } else {
//     console.log("Too low");
//   }
// };
