let ctx = document.getElementById('flappy-canvas').getContext('2d');

class Bird{
    constructor(){
        this.y = 600/2;
        this.x = 25;
        this.flappyBird = new Image();
        this.flappyBird.src = '../img/flappybirdblue.jpg';
    }

    show(){
        ctx.drawImage(this.flappyBird, this.x, this.y, 30, 30);
    }
}

module.exports = Bird;