class Car2 {
    width;
    height;
    x;
    y;
    color;

    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height=height;
        this.color=color
    }
    drawCar(ctx){
        ctx.fillRect(this.x, this.y, this.width, this.height, this.color);
        ctx.fill();
    }

    moveLeft() {
        this.x -= 20;
    }

    moveRight() {
        this.x += 20;
    }

    moveUp() {
        this.y -= 20;
    }

    moveDown() {
        this.y += 20;
    }

}