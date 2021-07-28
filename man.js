let c = document.getElementById("game");
let ctx = c.getContext("2d");
let planes = new (400,100,10,50);
let barrier = new Barrier(150,0,30);

// Tao nut di chuyen
function moveplanes(){
    switch (event.keyCode){
        case 37:{
            planes.moveLeft();
            break;
        }
        case 38:{
            planes.moveUp();
            break;
        }case 39:{
            planes.moveRight();
            break;
        }case 40:{
            planes.moveDown();
            break;
        }
    }
    clearCanvas();
    planes.drawPlanes(ctx);
}

function movebarrier(){
    if(checkBarrier() === true){
        location.reload();
        clearInterval(intervalId)
        alert("Game Over");
    }
    if (obstacle.y >= 450){
        obstacle.y = 0;
    }
    obstacle.moveDown();
    clearCanvas();
    drawCanvas();
}

function drawCanvas(){
    barrier.drawBarrier(ctx);
    planes.drawPlanes()
}

function checkCollision() {
    if (((car.x <= obstacle.x + obstacle.radius && obstacle.x + obstacle.radius <= car.x + car.width) &&
        car.y <= obstacle.y + obstacle.radius && obstacle.y + obstacle.radius <= car.y + car.height)) {
        return true;
    }else if(((car.x <= obstacle.x - obstacle.radius && obstacle.x - obstacle.radius <= car.x + car.width)) &&
        car.y <= obstacle.y - obstacle.radius && obstacle.y - obstacle.radius <=car.y + car.height){
        return true;
    }else if(((car.x <= obstacle.x - obstacle.radius && obstacle.x - obstacle.radius <= car.x + car.width)) &&
        car.y <= obstacle.y + obstacle.radius && obstacle.y + obstacle.radius <=car.y + car.height){
        return true;
    }
    return false;
}

function clearCanvas() {
    ctx.clearRect(0, 0, 1000, 500);
}

let intervalId = setInterval(moveObstacle, 1000) //ms => 1000ms = 1s

car.drawCar(ctx);
obstacle.drawObstacle(ctx);
window.addEventListener("keydown", moveCar);