class Car {
    width;
    height;
    x;
    y;
    type;

    constructor(x, y, width, height,type) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.type = type;
    }

    // Tạo di chuyển cho car
    drawCar(ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height,);
        ctx.fill();
    }

    moveLeft() {
        if (car.x>0){
            this.x -= 10;
        }

    }

    moveRight() {
        if(car.x<450){
            this.x += 10;
        }
    }

    moveUp() {
        if(car.y>0){
            this.y -= 10;
        }
    }

    moveDown() {
        if (car.y<450){
            this.y += 10;
        }
    }
}
