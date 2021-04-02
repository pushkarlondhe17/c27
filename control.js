class Control
{
    constructor(a,b)
    {
     var options =
     {
    bodyA : a, bodyB : b, stiffness : 0.1, length : 20

     }
     this.Control= control.create(options)
     World.add(world,this.Control)
    }
    display()
    {
    strokeWeight(4)
    line(this.Control.bodyA.position.x, this.Control.bodyA.position.y,
         this.Control.bodyB.position.x, this.Control.bodyB.position.y )
    }
}