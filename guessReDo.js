function randomNum() {
    return Math.floor(Math.random() * (101));
  }

randomNum = randomNum();
console.log(randomNum);

$('#user-input').on('keyup', enableButtons);
$('#clear').on('click', clearButton);

function enableButtons() {
  if($(this).val().length > 0) {
    $('#submit').prop('disabled', false);
    $('#clear').prop('disabled', false);
    $('#reset').prop('disabled', false);
  }
}



function clearButton() {
  $('#user-input').val('');
  // $('#display-hint').text('');
  $('#display-guess').text('???');
}

$('#submit').on('keypress click', submitForm);

function submitForm(e) {
  e.preventDefault();
  var userGuessValue = $('#user-input').val();
  userGuessValue = parseInt(userGuessValue);
  if(userGuessValue !== NaN){
    $('#display-guess').text(userGuessValue)
  }
  if(userGuessValue === randomNum) {
    $('#display-hint').text('BOOM');
    randomNum = randomNum();
  } else if (userGuessValue > randomNum) {
    $('#display-hint').text('That is too high');
  } else {
    $('#display-hint').text('That is too low');
  }
}
