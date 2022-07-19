'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Ololo';

// document.querySelector('.number').textContent = '&';

// document.querySelector('.guess').value = 24;

let check = document.querySelector('.check');
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  }
});
