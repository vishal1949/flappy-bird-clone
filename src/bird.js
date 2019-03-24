let ctx = document.getElementById('flappy-canvas').getContext('2d');

class Bird{
    constructor(){
        this.y = 600/2;
        this.x = 25;
        this.flappyBird = new Image();
        this.flappyBird.src = 'img/flappybirdblue.jpg';
        this.gravity = .6;
        this.flight = 1.5;
        this.height = 60;
        this.width = 60;
        this.start = false;
        this.velocity = this.gravity

        this.show = this.show.bind(this);
        this.takeFlight = this.takeFlight.bind(this);
    }

    show(){
        ctx.drawImage(this.flappyBird, this.x, this.y, this.width, this.height);
        if(this.start){
            if( this.y < 560 ){ //that way when the value is 561 we can check
                this.y += this.velocity;
                this.velocity += this.gravity;
            }
        }else{
            this.start = true;
        }
    }


    takeFlight(){
        this.show();
        window.addEventListener('keypress', e => {
            if (e.keyCode === 32) {
                if(this.velocity > -10){
                    //you can times this.velocity by something less than 1 to add resistatnce 
                    for( let i = 0; i < this.flight; i++){
                        this.velocity -= 1;
                        
                    }
                    // this.velocity -= this.flight;
                }
            }
        })
    }
}

module.exports = Bird;