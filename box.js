class Box {
    constructor(x,y,width,height){
        this.width = width;
        this.height= height;
        var rop={
            restitution:0.8,
            friction:1.0
          }
          this.body=bodies.rectangle(x,y,width,height,rop);
          world.add(aw,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("grey");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}