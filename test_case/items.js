class Items{
    x;
    y;
    radius;

    // Khoi tao doi tuong do vat
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    drawItems(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2/Math.PI);
        ctx.fillStyle = "green";
        ctx.fill();
    }

    moveDown(){
        this.y += 20;
    }
}