/**
 * Created by manuel-macbook on 18.12.16.
 */

function Ball() {
    this.xPosition = width/2;
    this.yPosition = height/2;
    this.speed = 10;

    this.show = function () {
        fill(255);
        ellipse(this.xPosition, this.yPosition, 30);
    }

    this.update = function () {

        if (this.yPosition > height) {
            this.yPosition = 0;
        }

        if (this.yPosition < 0) {
            this.yPosition = height;
        }

        if (this.xPosition > width) {
            this.xPosition = 0;
        }

        if (this.xPosition < 0) {
            this.xPosition = width;
        }

    }
    
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
    }


}