class Particle{
    constructor(x,y){
     var options={
         restitution:0.04
     }
     this.body=Bodies.circle(x,y,this.r,options);
     this.body.color(255,0,255);
    }
    display(){
        circle(this.body.x,this.body.y);   
    }
}