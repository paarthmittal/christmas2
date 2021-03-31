class snow{
    constructor(x, y){
        var options = { 
            'restitution':0.1,
            'friction':50,
            'density':10
          }
          this.body = Bodies.circle(x, y, 1, options);
          this.radius = 20;
          this.image=loadImage("snows/snow4.webp")
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 800), y:random(0, 400)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      ellipseMode(RADIUS);
      image(this.image,this.body.position.x, this.body.position.y, this.radius,this.radius);
    }
  }