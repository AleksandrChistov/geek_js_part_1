// 2. Для игры, реализованной на уроке,
// добавить возможность вывода хода номер n (номер задается пользователем)

var event, ok;
var answers = [];

checkAnswer(0);

switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        checkAnswer(1)
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                checkAnswer(3);
                askUserAboutStory();
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                checkAnswer(3);
                askUserAboutStory();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        checkAnswer(2)
        switch (event) {
            case 1: // Второе действие
                checkAnswer(3);
                askUserAboutStory();
                break;
            case 2: // Второе действие
                checkAnswer(3);
                askUserAboutStory();
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------

function checkAnswer(index) {
    do { // Выводим вопрос
        ok = false;
        event = +prompt(works[index].q + works[index].a1 + works[index].a2 + '-1 - Выход из игры');

        if (event === -1) {
            break;
        }
        else {
            ok = isAnswer(works[index].count, event);
            if (ok) saveAnswer(works[index].q, works[index][`a${event}`]);
        }
    } while (!ok);
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }

    return true;
}

function saveAnswer(question, answer) {
    answers.push(question + answer);
}

function askUserAboutStory() {
    do {
        ok = false;

        if (!event) {
            event = +prompt(works[3].q + works[3].a1 + works[3].a2 + '-1 - Выход из игры');
        }

        if (event === -1) {
            break;
        }
        else {
            switch (event) {
                case 1:
                    showUserStory(0);
                    ok = true;
                    break;
                case 2:
                    showUserStory(1);
                    ok = true;
                    break;
                default:
                    alert('The entered value is not correct!');
                    event = null;
            }
        }
    } while(!ok)
}

function showUserStory(index) {
    alert(answers[index]);
}
