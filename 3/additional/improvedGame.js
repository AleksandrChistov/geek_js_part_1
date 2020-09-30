// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

function startImprovedGame() {
  let winnings = 0;
  let index = 0;
  let isLoading = false;

  const app = document.querySelector('#app');

  const questionCard = document.createElement('div');
  questionCard.classList.add('question-card');
  questionCard.addEventListener('click', checkAnswer);

  const logo = document.createElement('img');
  logo.setAttribute('src', './additional/logo.png');
  logo.classList.add('logo');

  let card = createCard(index);

  questionCard.innerHTML = card;
  app.append(logo, questionCard);

  function checkAnswer(event) {
    if (event.target.dataset.answer && !isLoading) {
      isLoading = true;
      winnings += dataForGame[index].winnings;

      if (dataForGame[index].answer === event.target.dataset.answer) {
        event.target.classList.add('correct');
        showText(`It is the correct answer! Your winnings: $${winnings}.`, 'win');
        setTimeout(() => {
          card = createCard(++index);
          questionCard.innerHTML = card;
          isLoading = false;
        }, 3000);
      } else {
        questionCard.removeEventListener('click', checkAnswer);
        showText(`You lose! But you could have won $${winnings}.`, 'lose');
        const correctAnswer = document.querySelector(`[data-answer=${dataForGame[index].answer}]`);
        correctAnswer.classList.add('correct');
        event.target.classList.add('incorrect');
      }
    }
  }

  function createCard(index) {
    return `
      <h2 class="card">${dataForGame[index].question}</h2>
      <ul>
        <li class="card" data-answer="a"><span>A:</span> ${dataForGame[index].a}</li>
        <li class="card" data-answer="b"><span>B:</span> ${dataForGame[index].b}</li>
        <li class="card" data-answer="c"><span>C:</span> ${dataForGame[index].c}</li>
        <li class="card" data-answer="d"><span>D:</span> ${dataForGame[index].d}</li>
      </ul>
    `
  }

  function showText(text, className) {
    const el = document.createElement('p');
    el.classList.add(className);
    el.textContent = text;
    questionCard.append(el)
  }
}
