class Dustbin {
    constructor(x, y, width, height) {


var option={
    isStatic:true
}

      this.image=loadImage("dustbingreen.png")

      this.body = Bodies.rectangle(x, y, width, height,option);
      this.width = width;
      this.height =height;
      World.add(world,this.body)
     
     

    } 

    display(){
      var pos=this.body.position
      image(this.image,700,485,200,200);
     push()
     translate(pos.x,pos.y)
      rectMode(CENTER);
      fill(173,234,250);
      stroke(173,234,250)

      rect(0,0,this.width,this.heigth)
     
      pop()
    }
  };
                 