// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
// причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.
// 3. *Заменить буквы, обозначающие фигуры картинками.

class ChessBoard {
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  chessMen = ['L'];

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

    for (let i = 1, last = 9; i < last; i++) {
      const numberBefore = create('tr', `${last - i}`, 'number-before');
      const numberAfter = create('tr', `${last - i}`,'number-after');
      const tr = create('tr');

      for (let j = 1; j < 9; j++) {
        const td = create('td');

        if ((i + j) % 2 !== 0) {
          td.style.backgroundColor = 'black';
        }

        tr.append(td);
      }

      wrap.append(numberBefore);
      wrap.append(tr);
      wrap.append(numberAfter);
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

function create(selector, text = '', className = '') {
  const el = document.createElement(selector);
  el.textContent = text;
  if (className) {
    el.classList.add(className);
  }
  return el;
}
