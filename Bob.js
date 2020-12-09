class Bob {
    constructor(x, y,radius ) {
      var options = {
          isStatic:false,
          restitution: 1.0,
          density:4,
          friction: 2
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
     fill("pink");
      
      ellipseMode(CENTER);
     
      ellipse(pos.x,pos.y,this.radius,this.radius );
      
    }
  };