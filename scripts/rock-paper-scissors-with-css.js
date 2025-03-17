let scoresheet = JSON.parse(localStorage.getItem('scoresheet')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

console.log(scoresheet);

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  result = '';
  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    scoresheet.wins += 1;
  } else if (result === 'You lose.') {
    scoresheet.losses += 1;
  } else if (result === 'Tie.') {
    scoresheet.ties += 1;
  }

  localStorage.setItem('scoresheet', JSON.stringify(scoresheet));

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You
  <img src="img/${playerMove}-emoji.png" class="move-icon" alt="" />
  <img src="img/${computerMove}-emoji.png" class="move-icon" alt="" />
  Computer`;

  updateScoreElement();
}

function updateScoreElement() {
  document.querySelector(
    '.js-scoresheet'
  ).innerHTML = `Wins: ${scoresheet.wins}, Loss: ${scoresheet.losses}, Tie: ${scoresheet.ties}`;
}

let computermove = '';
function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}
