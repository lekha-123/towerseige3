class ball
{
    constructor(x,y,r)
    {var options={
        
        isStatic:true
    }
        this.r=r
        this.image=loadImage("polygon.png")
        this.body=Bodies.circle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display()
    {
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
    translate (pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
   image(this.image,0,0,this.r);
    pop ();
    }
}