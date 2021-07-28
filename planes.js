class Planes{
    width;
    height;
    x;
    y;

    constructor(width,height,x,y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    setWidth(width){
        this.width = width;
    }

    setHeight(height){
        this.height = height;
    }

    setY(y){
        this.y = y;
    }

    setX(X){
        this.x = x;
    }

    drawPlanes(ctx){
        ctx.fillRect(this.width, this.height, this.x , this.y);
        ctx.fill();
    }

    moveLeft(){
        this.x -= 10;
    }

    moveRight(){
        this.x += 10;
    }
    moveUp(){
        this.y -= 10;
    }
    moveDown(){
        this.y += 10;
    }

}