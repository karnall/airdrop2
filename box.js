class Box{
    constructor(x,y,widht,height) {
        var option = {
     "restitution":0.8,
     "friction":0.2,
     "density":1.0,
        }
    this.body = Bodies.rectangle(x,y,widht,height,option);
    this.width = widht;
    this.height=height;

    World.add(world,this.body)
    }
    display(){
var pos = this.body.position;
rectMode(CENTER);
fill (red);
rect (pos.x,pos.y,this.widht,this.height);

    }
} 