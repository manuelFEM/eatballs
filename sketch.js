var ball;

function setup() {
    height = 400;
    width = 800;
    createCanvas(width, height);
    ball = new Ball();
}

function draw() {
    background(color(224, 220, 215));
    ball.update();
    ball.show();
    keyStroke();
}

function keyStroke() {

    if (keyIsDown(RIGHT_ARROW))
        ball.move("right");

    if (keyIsDown(LEFT_ARROW))
        ball.move("left");

    if (keyIsDown(UP_ARROW))
        ball.move("up");

    if (keyIsDown(DOWN_ARROW))
        ball.move("down");
}