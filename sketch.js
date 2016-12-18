var balls = [];

function setup() {
    height = 700;
    width = 700;
    createCanvas(width, height);
    balls.push(new Ball());
    addBalls();

}

function draw() {
    background(color(224, 220, 215));
    keyStroke();
    if (balls[balls.length - 1].hits(balls)) {
        balls.push(new Ball());
    }
    for (var i = 0; i < balls.length; i++) {
        balls[i].show();
        balls[i].update();
    }

}

function keyStroke() {

    if (keyIsDown(RIGHT_ARROW)) {
        balls[balls.length - 1].move("right");
    }
    if (keyIsDown(LEFT_ARROW)) {
        balls[balls.length - 1].move("left");
    }
    if (keyIsDown(UP_ARROW)) {
        balls[balls.length - 1].move("up");
    }
    if (keyIsDown(DOWN_ARROW)) {
        balls[balls.length - 1].move("down");
    }

}

function addBalls() {
    setTimeout(function () {
        if (balls.length < 100) {
            balls.push(new Ball());
            addBalls();
        }
    }, 1500);
}