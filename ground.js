class Ground {
    constructor(x,y,width,height){
        this.width = width;
        this.height= height;
        var rop={
            isStatic:true
          }
          this.body=bodies.rectangle(x,y,width,height,rop);
          world.add(aw,this.body);
    }

    display(){
        var pos = this.body.position;
        fill("grey");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}