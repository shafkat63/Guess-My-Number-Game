'use strict';

let Sceretnumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('NO Number!😒');

    //when player wins
  } else if (guess === Sceretnumber) {
    displayMessage('Correct Number🎉🎉!');
    score = score + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = Sceretnumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (highScore < score) {
      highScore = score;
    }

    document.querySelector('.highscore').textContent = highScore;
    //when guess is wrong
  } else if (guess !== Sceretnumber) {
    if (score > 1) {
      displayMessage(
        guess > Sceretnumber
          ? 'Number is greater than the secret number!'
          : 'Number is lesser than the secret number!'
      );
      score = score - 1;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game!!!☠☠☠');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  Sceretnumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
