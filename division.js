class Division{
    constructor(x,h,w,h){
        var options={
            isStatic:true
        }
        this.body=bodies.rectangle(x,y,w,h,options)
        this.w=w;
        this.y=y;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.postion;
        rectMode(CENTER);
        fill ("white");
        rect(pos.x,pos.y,this.w,this.h)
    };
}