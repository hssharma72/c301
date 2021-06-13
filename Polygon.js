class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.width = 50;
        this.height =50;
    this.image = loadImage("polygon.png");
    this.Visibility=255;
        World.add(world, this.body);
      }
    
    display(){
      console.log(this.body.speed);
      if(this.body.speed<3){

      }
      else{
          World.remove(worls,this.body);
          push();
          this.Visibility=this.Visibility-5;
         tint(255,this.Visibilty);
         this.image(this.image,this.body.position.x,this.body.position.y,50,50)
         pop();
      }   
      }
    }
    