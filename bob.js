class Bob{


    constructor(x,y,radius){
    
        var    options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:1.0
         }
         this.radius = radius;
        this.body=Bodies.circle(x,y,radius,options);
       
        

       // this.image.scale =70.0;
    
        
       World.add(world, this.body);
    
       
    
    }
    
    
    
    display(){
    
    
    
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        
      ellipseMode(RADIUS);
       fill(162,0,255);
        
     ellipse(0,0,this.radius,this.radius);
        pop();
    
    
    
    }
    
    
    
}    
