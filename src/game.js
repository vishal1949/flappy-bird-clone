const Bird = require('./bird');
const Pipe = require('./pipe');
const ctx = document.getElementById("flappy-canvas").getContext('2d');
const ctx2 = document.getElementById("score-directions").getContext('2d');

class Game {
    constructor(){
        this.width = 400;
        this.height = 600;
        // this.seconds = new Date().getSeconds();
        this.gameover = false;
        this.difficultyrate = 3;

        this.bird = new Bird();
        this.pipe = new Pipe();
        this.secondPipe = new Pipe();
        this.score = 0;
        this.anotherpipe = null;
        this.start = this.start.bind(this);
        this.drawGame = this.drawGame.bind(this);
        this.drawBird = this.drawBird.bind(this);
        this.drawPipe = this.drawPipe.bind(this);
        this.timer = this.timer.bind(this);
        this.difficulty = this.difficulty.bind(this);
        this.drawGame();

        this.i = 0;
    }

    timer(){
        if(this.pipe.xpos < -50){
            this.pipe = new Pipe();
            this.score++;
            // console.log(this.score);
        }
    }

    drawGame(){
        this.start();
    }

    difficulty(){
        if(this.score >= this.difficultyrate){
            this.bird.height += 10;
            this.bird.width += 10;
            this.pipe.speed += 2;
            this.pipe.gap += 5;
            this.difficultyrate += 5;
        }
    }

    start(){
        if(this.gameover === true){
            cancelAnimationFrame(this.gameover);

        }else{
            requestAnimationFrame(() => {
                ctx.clearRect(0, 0, this.width, this.height);
                ctx2.clearRect(0, 0, 400, 600);
                if(this.score > 2){
                    
                }
                this.drawGame();
                this.drawBird();
                this.drawPipe();
                this.timer();
                this.collision();
                this.difficulty();
                ctx2.font = "30px Arial";
                ctx2.fillStyle = "red";
                ctx2.fillText(`Score: ${this.score}\n`, 0, 50);
                ctx2.fillText('High Score: 34', 0, 90);
                ctx2.fillStyle = "white";
                ctx2.fillText('R to restart', 0, 130);
                ctx2.fillText('Spacebar to jump', 0, 170);
            })
        }
    }
    
    drawBird(){
        this.bird.takeFlight();

        
    }

    drawPipe(){
        this.pipe.show();
    }

    collision(){
        if((this.bird.x + this.bird.width -10 >= this.pipe.xpos && this.bird.x <= this.pipe.xpos + this.pipe.width) && 
            (this.bird.y <= this.pipe.downHeight - 20 || this.bird.y >= this.pipe.downHeight + this.pipe.gap - 40)){
            this.gameover = true;
        }
    }

    ai(){

    }


}

module.exports = Game;