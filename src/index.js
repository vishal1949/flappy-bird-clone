const Game = require('./game');

window.addEventListener('DOMContentLoaded', () => {
    window.keysdown = {};
    new Game();
    addEventListener("keydown", function (e) { keysdown[e.keyCode] = true })
    addEventListener("keyup", function (e) { delete keysdown[e.keyCode] })
})