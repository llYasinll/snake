function Snake() {
    this.x = floor(random(cols)) * scl;
    this.y = floor(random(rows)) * scl;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    this.show = function() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }


    this.update = function() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);
        this.x += this.xspeed * scl;
        this.y += this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);

    }

    this.dir = function(x, y) {

        if (!(this.xspeed * -1 == x || this.yspeed * -1 == y)) {
            this.xspeed = x;
            this.yspeed = y;
        }
    }

    this.eat = function() {
        var d = dist(this.x, this.y, food.pos.x, food.pos.y);
        if (d < 1) {
            food.done = true;
            this.total++;

        }
    }
}
