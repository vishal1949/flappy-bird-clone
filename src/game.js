const Bird = require('./bird');
const Pipe = require('./pipe');
const ctx = document.getElementById("flappy-canvas").getContext('2d');

class Game {
    constructor(){
        this.width = 400;
        this.height = 600;
        // this.seconds = new Date().getSeconds();
        this.gameover = false;
        this.difficultyrate = 3;

        this.bird = new Bird();
        this.pipe = new Pipe();
        this.score = 0;
        this.anotherpipe = new Pipe();
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
            this.bird.height += 20;
            this.bird.width += 20;
            this.pipe.speed += 2;
            this.pipe.gap += 5;
            this.difficultyrate += 5;
        }
    }

    start(){
        if(this.gameover === true){
                // this.bird.y -= 5;
            alert(`Game Over. You're score is: ${this.score} \nPress R to play again!`)
            cancelAnimationFrame(this.gameover);

        }else{
            requestAnimationFrame(() => {
                ctx.clearRect(0, 0, this.width, this.height);
                this.drawGame();
                this.drawBird();
                this.drawPipe();
                this.timer();
                this.collision();
                this.difficulty();
                ctx.font = "30px Arial";
                ctx.fillStyle = "red";
                ctx.fillText(`\t\t\t\t\t\t\t\t\t\t\t\t\t\tScore: ${this.score}`, 10, 50);
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
            (this.bird.y <= this.pipe.downHeight - 20 || this.bird.y >= this.pipe.downHeight + this.pipe.gap - 40)
        ) {
            // this.bird.y = 561;
            this.gameover = true;
        }
        // if((this.bird.x + 20 >= this.pipe.xpos+20) && 
        //     ((this.bird.y +20 >= this.pipe.downYpos-20 && this.bird.y <= this.pipe.downHeight-20) ||
        //     (this.bird.y+10 >= this.pipe.upYpos-30 && this.bird.y <= this.height))){
        //     this.bird.y = 561;
        //     this.gameover=true;
        // }
        // if(this.bird.y < -20){
        //     this.gameover = true;
        // }
    }


}

module.exports = Game;