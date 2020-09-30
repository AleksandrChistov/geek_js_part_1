// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

const userAnswer = confirm('Would you like to play improved game?');

userAnswer ? startImprovedGame() : startGame();

function startGame() {
  let winnings = 0;

  for (const data of dataForGame) {
    const userAnswer = prompt(`
      ${data.question}
      a) ${data.a}
      b) ${data.b}
      c) ${data.c}
      d) ${data.d}

      \u261B Enter -1 to exit the game.
    `);

    if (userAnswer === '-1') {
      alert(`Thanks for the game! Your winnings: $${winnings}.`);
      return false;
    }

    winnings += data.winnings;

    if (userAnswer === data.answer) {
      alert(`It is the correct answer! Your winnings: $${winnings}.`);
    } else {
      alert(`You lose! But you could have won $${winnings}.`);
      return false;
    }
  }
}
