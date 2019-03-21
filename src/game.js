const Bird = require('./bird');
const Pipe = require('./pipe');
const ctx = document.getElementById("flappy-canvas").getContext('2d');

class Game {
    constructor(){
        this.width = 400;
        this.height = 600;

        this.bird = new Bird();
        this.upPipe = new Pipe();


        this.drawGame = this.drawGame.bind(this);
        this.drawBird = this.drawBird.bind(this);
        this.drawPipe = this.drawPipe.bind(this);

        this.drawGame();
    }

    drawGame(){
        requestAnimationFrame(() => {
            ctx.clearRect(0, 0, this.width, this.height);
            this.drawGame();
            this.drawBird();
            this.drawPipe();
        })
    }
    
    drawBird(){
        // this.bird.show();
        this.bird.takeFlight();
        // ctx.drawImage(this.bird.flappybird, this.bird.width, this.bird.height, 40, 40);

    }

    drawPipe(){
        this.upPipe.show();
    }


}

module.exports = Game;