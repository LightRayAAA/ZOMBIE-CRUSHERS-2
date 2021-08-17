class Base{

    constructor(a, b, c, d, color, isStatic){
    
    var options = {
    
    isStatic: isStatic
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    this.color = color

    this.body = Bodies.rectangle(a, b, c, d, options)
    World.add(world, this.body)
    }
    
    display(){
    
    var pos = this.body.position
    push()
    translate(pos.x, pos.y)
    fill("brown")
    rectMode(CENTER)
    rect(0, 0, this.width, this.height)
    pop()
    }
    }