class Block{
    constructor(x, y, width, height, color) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.visibility = 225;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          pop();
        }
      }
}