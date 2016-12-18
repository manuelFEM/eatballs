var balls = [];

function setup() {
    height = 400;
    width = 800;
    createCanvas(width, height);
    balls.push(new Ball());
    addBalls();
}

function draw() {
    background(0);

    for (var i = 0; i < balls.length; i++) {
        balls[i].show();
        balls[i].update();
    }

    moving();
}

function moving() {

    if (keyIsDown(RIGHT_ARROW)) {
        for (var i = 0; i < balls.length; i++) {
            balls[i].move("right");
        }
    }
    if (keyIsDown(LEFT_ARROW)) {
        for (var i = 0; i < balls.length; i++) {
            balls[i].move("left");
        }
    }
    if (keyIsDown(UP_ARROW)) {
        for (var i = 0; i < balls.length; i++) {
            balls[i].move("up");
        }
    }
    if (keyIsDown(DOWN_ARROW)) {
        for (var i = 0; i < balls.length; i++) {
            balls[i].move("down");
        }
    }

}

function addBalls() {
    setTimeout(function () {
        if (balls.length < 10) {
            balls.push(new Ball())
            addBalls();
        }
    }, 1500);
}