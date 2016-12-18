/**
 * Created by manuel-macbook on 18.12.16.
 */

function Ball() {
    this.xPosition = width/2;
    this.yPosition = height/2;
    this.speed = 5;
    this.diameter = 30;
    this.ballColor = setColor();

    this.show = function () {
        fill(this.ballColor);
        ellipse(this.xPosition, this.yPosition, this.diameter);
    };

    this.update = function () {

        if (this.yPosition > height)
            this.yPosition = 0;

        if (this.yPosition < 0)
            this.yPosition = height;

        if (this.xPosition > width)
            this.xPosition = 0;

        if (this.xPosition < 0)
            this.xPosition = width;

    };
    
    this.move = function (direction) {
        switch (direction) {
            case "left":
                this.xPosition -= this.speed;
                break;
            case "right":
                this.xPosition += this.speed;
                break;
            case "up":
                this.yPosition -= this.speed;
                break;
            case "down":
                this.yPosition += this.speed;
                break;
        }
    };

    function setColor() {
        colors = [
            color(68, 100, 85),
            color(253, 210, 98),
            color(211, 221, 220),
            color(199, 177, 156)
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    }

    this.hits = function (balls) {
        for (var i = 0; i < balls.length - 1; i++) {
            if (collideCircleCircle(this.xPosition, this.yPosition, this.diameter,
                    balls[i].xPosition, balls[i].yPosition, balls[i].diameter)) {
                return true;
            }
        }
    }
}