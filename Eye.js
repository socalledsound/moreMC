
class Eye {
    constructor(img){
      this.img = img;
      this.x = random(0, width-200);
      this.y = random(0, height -200);
      this.size = random(50,150);
      this.xSpeed = random(-1,1);
      this.ySpeed = random(-1,1);
    }
  
    checkEdges(){
        if(this.x < 0){
            this.x = width;
        }
        if(this.x > width){
            this.x = 0;
        }
        if(this.y < 0){
            this.y = height;
        }
        if(this.y > height){
            this.y = 0
        }
    }



    display(){
      image(this.img, this.x, this.y, this.size, this.size);
    }
  
  
    update(){
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
  
  
  }
  