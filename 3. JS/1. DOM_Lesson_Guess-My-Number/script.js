'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Ololo';

// document.querySelector('.number').textContent = '&';

// document.querySelector('.guess').value = 24;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let scoreNumber = +document.querySelector('.score').textContent;
let highscore = 0;

let check = document.querySelector('.check');
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  //   if (!guess) {
  //     document.querySelector('.message').textContent = 'No Number!';
  //     //When player wins
  //   } else if (guess === secretNumber) {
  //     document.querySelector('.message').textContent = 'Correct Number!';
  //     //When guess is too High
  //   } else if (guess > secretNumber) {
  //     if (scoreNumber > 0) {
  //       document.querySelector('.message').textContent = 'Too high';
  //       scoreNumber--;
  //       document.querySelector('.score').textContent = scoreNumber;
  //     }
  //     //When guess is too Low
  //   } else if (guess < secretNumber) {
  //     if (scoreNumber > 0) {
  //       document.querySelector('.message').textContent = 'Too low';
  //       scoreNumber--;
  //       document.querySelector('.score').textContent = scoreNumber;
  //     }
  //   }
  //   //When player loses
  //   if (scoreNumber === 0) {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //   }
  // });

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (scoreNumber > highscore) {
      highscore = scoreNumber;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is Wrong
  } else if (guess !== secretNumber && scoreNumber > 0) {
    guess > secretNumber
      ? (document.querySelector('.message').textContent = 'Too high')
      : (document.querySelector('.message').textContent = 'Too low');
    scoreNumber--;
    document.querySelector('.score').textContent = scoreNumber;
  }
  //When player loses
  if (scoreNumber === 0) {
    document.querySelector('.message').textContent = 'You lost the game!';
  }
});

let clickAgain = document.querySelector('.again');

clickAgain.addEventListener('click', () => {
  scoreNumber = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = scoreNumber;
  document.querySelector('.guess').value = '';

  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
