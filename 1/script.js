// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
// причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
// 3. *Заменить буквы, обозначающие фигуры картинками.

class ChessBoard {
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  chessMenBlack = ['&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '&#9823;'];
  chessMenWhite = ['&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '&#9817;'];

  createBoard() {
    const container = create('div', null, 'chess-board');
    const board = create('table', null, 'board');
    const header = create('thead');
    const footer = create('tfoot');
    const cellsHeader = this.createCellsWithLetters();
    const cells = this.createCells();
    const cellsFooter = this.createCellsWithLetters();

    header.append(cellsHeader);
    board.append(header);
    board.append(cells);
    footer.append(cellsFooter);
    board.append(footer);
    container.append(board);

    return container;
  }

  createCells() {
    const wrap = create('tbody');
    const nIterations = 9;

    for (let i = 1; i < nIterations; i++) {
      const numberBefore = create('td', `${nIterations - i}`, 'number-before');
      const numberAfter = create('td', `${nIterations - i}`,'number-after');
      const tr = create('tr');

      for (let j = 1; j < nIterations; j++) {
        const td = create('td');

        td.style.backgroundColor = (i + j) % 2 !== 0 ? '#C2673E' : '#E9CDAE';

        if (i === 1) {
          td.innerHTML = this.chessMenBlack[j - 1];
        }

        if (i === 2) {
          td.innerHTML = this.chessMenBlack[8];
        }

        if (i === 7) {
          td.innerHTML = this.chessMenWhite[8];
        }

        if (i === 8) {
          td.innerHTML = this.chessMenWhite[j - 1];
        }

        tr.append(td);
      }

      tr.insertAdjacentElement('afterbegin', numberBefore);
      wrap.append(tr);
      tr.append(numberAfter);
    }

    return wrap;
  }

  createCellsWithLetters() {
    const tr = create('tr');
    tr.classList.add('letter');

    for (let i = 0; i < 8; i++) {
      const td = create('td', this.letters[i]);
      tr.append(td);
    }

    return tr;
  }
}

const app = document.getElementById('app');
const chessBoard = new ChessBoard();
const boardElement = chessBoard.createBoard();
app.append(boardElement);

// ---------------------------------------

function create(selector, text = '', className = '') {
  const el = document.createElement(selector);
  el.textContent = text;
  if (className) {
    el.classList.add(className);
  }
  return el;
}
