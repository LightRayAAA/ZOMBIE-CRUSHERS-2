class Stone{

    constructor(a, b, c, d){
    
    let options = {
    
    restitution: 0.2
    }
    
    this.x = a;
    this.y = b;
    this.width = c;
    this.height = d;
    this.body = Bodies.rectangle(a, b, c, d, options)
    World.add(world, this.body)
    }
    
    display(){
    
    let pos = this.body.position
    push()
    translate(pos.x, pos.y)
    fill("white")
    ellipseMode(CENTER)
    ellipse(0, 0, this.width, this.height)
    pop()
    }
    }