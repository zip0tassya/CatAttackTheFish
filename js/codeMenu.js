let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let width = canvas.getAttribute('width');
let height = canvas.getAttribute('height');

const bg = new Image();
const play = new Image();
const info = new Image();
const settings = new Image();

bg.src = 'assets/bg.png';
play.src = 'assets/play.png';
info.src = 'assets/info.png';
settings.src = 'assets/settings.png';

window.onload = function() {
    ctx.drawImage(bg, 0, 0);
    ctx.drawImage(play, 150, 100);
    ctx.drawImage(settings, 150, 160);
    ctx.drawImage(info, 150, 220);
};

/*
canvas.addEventListener('click', ()=>{
    play.href = 'game.html';
});
*/