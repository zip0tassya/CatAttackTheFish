let halfOfWindow = document.documentElement.clientWidth / 2;
let leftBorder = halfOfWindow - 250;
let rightBorder = halfOfWindow + 150;
// СОЗДАЕМ ОХОТНИКА

const hunter = document.getElementById('hunter');
let img_hunter = document.getElementById('img_hunter');

const hunterStyles = {
  top: '60px',
  left: halfOfWindow + 'px',
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0)',
  border: 'rgba(0, 0, 0, 0)'
};

for (const key in hunterStyles) {
  hunter.style[key] = hunterStyles[key];
}

// ДВИЖЕНИЕ ОХОТНИКА

document.addEventListener('keydown', function(event) {
  move(event.keyCode, hunter);
});

function move(direction, hunter) {
  const hunterCurrentPositionX = parseInt(hunter.style.left);
  const hunterCurrentPositionY = parseInt(hunter.style.top);

  let biasX = 0;
  let biasY = 0;

  switch (direction) {
    case 38:
      biasY = hunterCurrentPositionY <= 10 ? 0 : -5;
      break;
    case 40:
      biasY = hunterCurrentPositionY >= 410 ? 0 : 5;
      break;
    case 39:
      biasX = hunterCurrentPositionX >= rightBorder ? 0 : 5;
      img_hunter.src = 'assets/cat_right.png';
      break;
    case 37:
      biasX = hunterCurrentPositionX <= leftBorder ? 0 : -5;
      img_hunter.src = 'assets/cat_left.png';
      break;
  }

  hunter.style.left = hunterCurrentPositionX + biasX + 'px';
  hunter.style.top = hunterCurrentPositionY + biasY + 'px';

}

// СОЗДАЕМ ЦЕЛЬ

const target = document.getElementById('target');

const targetStyles = {
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0)',
  border: 'rgba(0, 0, 0, 0)'
};

for (const key in targetStyles) {
  target.style[key] = targetStyles[key];
}

// ПОЯВЛЕНИЕ В РАНДОМНОЙ ТОЧКЕ

function randomNumber(min, max) {
  return (Math.floor(min + Math.random() * (max - min)));
}

target.style.left = randomNumber(leftBorder, rightBorder) + 'px';
target.style.top = randomNumber(10, 465) + 'px';

// ОБНОВЛЕНИЕ СОСТОЯНИЯ ИГРЫ

const p = document.getElementById('score');

let i = 0;
document.addEventListener('keydown', function(event) {

  let getDistance = function(hunter_, target_) {
    let diffX = hunter_.offsetLeft - target_.offsetLeft;
    let diffY = hunter_.offsetTop - target_.offsetTop;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
  }

  let distance = getDistance(hunter, target);

  if (distance <= 60) {
    target.style.left = randomNumber(leftBorder, rightBorder) + 'px';
    target.style.top = randomNumber(10, 465) + 'px';
    i++
    p.innerHTML = 'Score: ' + i;
  }
});