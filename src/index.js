const Game = require('./game');

window.addEventListener('DOMContentLoaded', () => {
    window.keysdown = {};
    new Game();
    window.addEventListener('keydown', (e) => {
        if (e.keyCode === 82) {
            new Game()
        }
    })
    addEventListener("keydown", function (e) { keysdown[e.keyCode] = true })
    addEventListener("keyup", function (e) { delete keysdown[e.keyCode] })
})