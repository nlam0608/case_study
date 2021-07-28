class Barrier{
    x;
    y;
    radius;
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    drawBarrier(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = "black";
        ctx.fill();
    }

    moveDown(){
        this.y += 50;
    }
}