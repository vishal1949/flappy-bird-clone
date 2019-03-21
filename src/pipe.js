const UP = 'UP';
const DOWN = 'DOWN';
const ctx = document.getElementById("flappy-canvas").getContext('2d');


class Pipe{
    constructor(side){
        this.side = side;
        this.upPipe = new Image();
        this.upPipe.src = '../img/upPipe.jpg';
        this.downPipe = new Image();
        this.downPipe.src = '../img/downPipe.png'
        this.width = 60;
        this.upHeight = 200;
        this.downHeight = 200;
        this.xpos = 350;
        this.upYpos = 550;
        this.downYpos = 0;
        this.gap = 140;

        this.show = this.show.bind(this);
        this.randomHeight = this.randomHeight.bind(this);
    }

    randomHeight(){
        this.downHeight = Math.floor((Math.random() * 320) + 50);
        this.upYpos = (this.downHeight + this.gap);
        this.upHeight = 600 - this.upYpos;
    }

    show(){
        if(this.xpos === 350 ){
            this.randomHeight();
            this.xpos++;
        }
        ctx.drawImage(this.upPipe, this.xpos, this.upYpos, this.width, this.upHeight);
        ctx.drawImage(this.downPipe, this.xpos, this.downYpos, this.width, this.downHeight)
    }
}

module.exports = Pipe;