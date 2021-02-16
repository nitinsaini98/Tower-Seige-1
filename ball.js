class Ball{
    constructor(x,y,radius){
        var option = {
         isStatic: true,
         restitution: 0.8,
         friction: 1.0,
         density: 1.0
        }
        this.ball = Bodies.circle(x,y,radius,option);
        this.radius = radius;
        World.add(world,this.ball)

    }
    display(){
        var pos = this.ball.position;
        fill(176,21,83)
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.radius)

}
}