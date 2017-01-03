function Food() {
    this.pos = createVector(floor(random(cols)), floor(random(rows)));
    this.pos.mult(scl);

    this.done = false;

    this.show = function() {
        fill(255, 0, 100);
        rect(this.pos.x, this.pos.y, scl, scl);
    }

    this.update = function () {
      console.log(this.done);
      if(this.done){
        this.pos = createVector(floor(random(cols)), floor(random(rows)));
        this.pos.mult(scl);
        this.done = false;
      }
    }
}
