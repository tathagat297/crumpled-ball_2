class dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.image=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y, this.width, this.height);
    }
    addImage(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y,250, 120);
    }
  };
