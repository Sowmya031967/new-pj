class box{
constructor(x,y,width,height){
    var options = {
    'restitution':0.8,
    'friction':0.3,
     'density':1.0
    }
    
this.body = Bodies.rectangle(x,y,width,height, options)
World.add(world,this.body)
this.h = height;
this.w = width;



}
display(){
    push();
    var pos =this.body.position;
    var angle = this.body.angle;
     translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(100);
    rect(0, 0, this.width, this.height);
    pop();
  }
}