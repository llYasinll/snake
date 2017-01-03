function Snake() {
    this.x = floor(random(cols)) * scl;
    this.y = floor(random(rows)) * scl;
    this.xspeed = 1;
    this.yspeed = 0;

    this.show = function() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    }


    this.update = function () {
      this.x += this.xspeed * scl;
      this.y += this.yspeed * scl;

      this.x = constrain(this.x, 0, width - scl);
      this.y = constrain(this.y, 0, height - scl);
    }

    this.dir = function(x, y) {

        if(!(this.xspeed * -1 ==x || this.yspeed * -1 == y)){
        this.xspeed = x;
        this.yspeed = y;
      }
    }

    this.eat = function () {
      var d = dist(this.x,this.y,food.pos.x,food.pos.y);
      if(d<1){
        food.done = true;
      }
    }
}
