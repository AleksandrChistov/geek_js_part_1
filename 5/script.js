// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
// только у вашей пирамиды должно быть 20 рядов, а не 5:

function getX(count) {
  let x = '';

  for (let i = 0; i < count; i++) {
    x += 'x';
  }

  return x;
}

function drawPyramid(countRow) {
  let drawing = '';

  for (let i = 1; i <= countRow; i++) {
    drawing += `${getX(i)}\n`;
  }

  return drawing;
}

const drawing = drawPyramid(20);

console.log(drawing);
