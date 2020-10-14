class Plinko{
    constructor(x,y,radius){
       
        this.r=radius;
        this.body=Bodies.circle(x,y,this.r,{isStatic:true});
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        circle(this.body.x,this.body.y);
    }
}