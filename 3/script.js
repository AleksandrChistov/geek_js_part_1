var FIELD_SIZE_X = 20;//строки
var FIELD_SIZE_Y = 20;//столбцы
var SNAKE_SPEED = 200; // Интервал между перемещениями змейки
var COUNT_NODE = null; // Тег span для вставки счета
var snake = []; // Сама змейка
var direction = 'y+'; // Направление движения змейки
var gameIsRunning = false; // Запущена ли игра
var snake_timer; // Таймер змейки
var bomb_timer; // Таймер бомбы
var score = 0; // Результат

function init() {
    prepareGameField(); // Генерация поля

    var wrap = document.getElementsByClassName('wrap')[0];
    wrap.style.width = '400px';

    // События кнопок Старт и Новая игра
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);

    // Отслеживание клавиш клавиатуры
    addEventListener('keydown', changeDirection);
}

/**
 * Функция генерации игрового поля
 */
function prepareGameField() {
    // Создаём таблицу
    var game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');

    // Генерация ячеек игровой таблицы
    for (var i = 0; i < FIELD_SIZE_X; i++) {
        // Создание строки
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            // Создание ячейки
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell); // Добавление ячейки
        }
        game_table.appendChild(row); // Добавление строки
    }

    // находим тег и выводим текущий счет на страницу
    COUNT_NODE = document.getElementsByClassName('count__number')[0];
    COUNT_NODE.textContent = score.toString();

    document.getElementById('snake-field').appendChild(game_table); // Добавление таблицы
}

/**
 * Старт игры
 */
function startGame() {
    gameIsRunning = true;
    respawn();//создали змейку

    snake_timer = setInterval(move, SNAKE_SPEED);//каждые SNAKE_SPEED запускаем функцию move
    bomb_timer = setInterval(createBomb, 4000);//каждые 4с запускаем функцию createBomb
    setTimeout(createFood, 5000);
}

/**
 * Функция расположения змейки на игровом поле
 */
function respawn() {
    // Змейка - массив td
    // Стартовая длина змейки = 2

    // Respawn змейки из центра
    var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
    var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

    // Голова змейки
    var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_head.classList.add('snake-unit');
    // Тело змейки
    var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_tail.classList.add('snake-unit');

    snake.push(snake_head);
    snake.push(snake_tail);
}

/**
 * Движение змейки
 */
function move() {
    // Сборка классов с головы змейки
    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

    // Сдвиг головы
    var snake_coords = snake_head_classes[1].split('-');//преобразовали строку в массив
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);

    // Определяем новую точку
    var new_unit = setNewPoint(coord_y, coord_x);

    // проверка new_unit не часть змейки
    if (!isSnakeUnit(new_unit)) {

        // проверка содержит ли new_unit бомбу
        if (haveBomb(new_unit)) {
            finishTheGame();
            return;
        }

        // Добавление новой части змейки
        new_unit.classList.add('snake-unit');
        snake.push(new_unit);

        // Проверяем, надо ли убрать хвост
        if (!haveFood(new_unit)) {
            // Находим хвост
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');

            // удаляем хвост
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
    }
    else {
        finishTheGame();
    }
}

function setNewPoint(coord_y, coord_x) {
    var new_unit;

    if (direction == 'x-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];

        if (new_unit === undefined) {
            new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (FIELD_SIZE_X - 1))[0];
        }
    }
    else if (direction == 'x+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];

        if (new_unit === undefined) {
            new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (0))[0];
        }
    }
    else if (direction == 'y+') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];

        if (new_unit === undefined) {
            new_unit = document.getElementsByClassName('cell-' + (FIELD_SIZE_Y - 1) + '-' + (coord_x))[0];
        }
    }
    else if (direction == 'y-') {
        new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];

        if (new_unit === undefined) {
            new_unit = document.getElementsByClassName('cell-' + (0) + '-' + (coord_x))[0];
        }
    }

    return new_unit;
}

/**
 * Проверка на змейку
 * @param unit
 * @returns {boolean}
 */
function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}

/**
 * проверка на еду
 * @param unit
 * @returns {boolean}
 */
function haveFood(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class');

    // Если еда
    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();

        score++;
        COUNT_NODE.textContent = score.toString();
    }
    return check;
}

/**
 * Проверка на бомбу
 * @param unit
 * @returns {boolean}
 */
function haveBomb(unit) {
    var check = false;

    if (unit.textContent === '💣') {
        return true;
    }

    return check;
}

/**
 * Создание еды
 */
function createFood() {
    var foodCreated = false;

    while (!foodCreated) { //пока еду не создали
        var cell = getRandomCell();

        // проверка на змейку и бомбу
        if (!cell.classes.includes('snake-unit') && !cell.classes.includes('bomb-unit')) {
            cell.el.setAttribute('class', cell.classes + ' food-unit');
            foodCreated = true;
        }
    }
}

function createBomb() {
    var bombCreated = false;

    while (!bombCreated) { //пока бомбу не создали
        var cell = getRandomCell();

        // проверка на змейку и еду
        if (!cell.classes.includes('snake-unit') && !cell.classes.includes('food-unit')) {
            cell.el.setAttribute('class', cell.classes + ' bomb-unit');
            cell.el.innerHTML = '&#128163;';
            bombCreated = true;
        }
    }
}

function getRandomCell() {
    // рандом
    var x = Math.floor(Math.random() * FIELD_SIZE_X);
    var y = Math.floor(Math.random() * FIELD_SIZE_Y);

    var cell = document.getElementsByClassName('cell-' + y + '-' + x)[0];
    var cell_classes = cell.getAttribute('class');

    return {
        el: cell,
        classes: cell_classes
    };
}

/**
 * Изменение направления движения змейки
 * @param e - событие
 */
function changeDirection(e) {
	switch (e.keyCode) {
    case 37: // Клавиша влево
        if (direction != 'x+') {
            direction = 'x-'
        }
        break;
    case 38: // Клавиша вверх
        if (direction != 'y-') {
            direction = 'y+'
        }
        break;
    case 39: // Клавиша вправо
        if (direction != 'x-') {
            direction = 'x+'
        }
        break;
    case 40: // Клавиша вниз
        if (direction != 'y+') {
            direction = 'y-'
        }
        break;
    }
}

/**
 * Функция завершения игры
 */
function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    clearInterval(bomb_timer);
    alert('Вы проиграли! Ваш результат: ' + score.toString());
}

/**
 * Новая игра
 */
function refreshGame() {
    location.reload();
}

// Инициализация
window.onload = init;