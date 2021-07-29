let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let car2 = new car(10,400,50,100);
let obstacleA = new Obstacle2(150,0,30);
let obstacleB = new Obstacle2(100,0,30);
let obstacleC = new Obstacle2(350,0,30);
let itemsA = new Items(50,0,40);
let itemsB = new Items(70,0,40);
let itemsC = new Items(250,0,40);
let count = document.getElementById("csore");

// Tạo phím
function  movecar2(){
    switch (event.keyCode){
        case 37: {
            car.moveLeft();
            break;
        }
        case 38: {
            car.moveUp();
            break;
        }
        case 39: {
            car.moveRight();
            break;
        }
        case 40: {
            car.moveDown();
            break;
        }
    }
    clearCanvas();
    car.drawCar(ctx);
}

function moveObstacle2(){
    if (checkCollision()===true){
        location.reload();
        clearInterval(intervalId)
    }
}


