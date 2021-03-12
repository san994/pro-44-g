class Player{

    constructor(x,y){
    
        var option = {
    
         isStatic : false
    
        }
    
     this.body = Bodies.rectangle(x,y,30,30,option);
     World.add(world,this.body)
    
    }
    display(){
    
    var pos = this.body.position
    push()
    rectMode(CENTER);
    fill("red");
    rect(pos.x,pos.y,30,30);
    pop()
    
    }
    
    
    
    }