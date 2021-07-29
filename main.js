let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let car = new Car(20, 450, 30, 50,);
let obstacle = new Obstacle(300, -15, 30);

// sự kiện bàn phím
function moveCar() {
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

// Kết thúc trò chới
function moveObstacle() {
        if (checkCollision() === true) {
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

function drawCanvas() {
    obstacle.drawObstacle(ctx);
    car.drawCar(ctx);
}
// Sử lý va chạm
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
