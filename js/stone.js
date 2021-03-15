class Stone {
  constructor(x, y,radius) {
    var options ={
      isStatic:false,
      'density':1.2,
      'friction': 1,
      'restitution':0
    }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    this.x=x;
    this.y=y;
    this.image=loadImage("images/stone.png");
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    

    push();
    translate(pos.x, pos.y);
    
    imageMode(CENTER)
    image(this.image,0, 0, this.radius, this.radius);
    pop();
  }
}