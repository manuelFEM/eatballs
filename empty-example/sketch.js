var ball;

function setup() {
    height = 400;
    width = 800;
    createCanvas(width, height);
    ball = new Ball();
}

function draw() {
    background(0);
    ball.update();
    ball.show();
}


function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        ball.move("right");
        console.log("test");
    } else if (keyCode === LEFT_ARROW) {
        ball.move("left");
    }else if (keyCode === UP_ARROW) {
        ball.move("up");
    }else if (keyCode === DOWN_ARROW) {
        ball.move("down");
    }
}