class SlingShot {
    constructor(bodyA, pointB){
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
            var options = {
                bodyA: bodyA,
                pointB: pointB,
                stiffness: 0.04,
                length:10
            }
            this.pointB = pointB;
            this.Sling = Constraint.create(options);
            World.add(world,this.Sling);
        }

        fly(){
        this.Sling.bodyA = null
        }
        attach(body){
            this.Sling.bodyA = body
        }
        
        display() {
            image(this.sling1, 200, 20);
            image(this.sling2, 170, 20);
            if(this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.pointB;
            push()
            stroke(63, 29, 29)
            if(pointA.x < 220){
                image(this.sling3, pointA.x-30, pointA.y-10, 15, 30) 
                strokeWeight(7);
                line(pointA.x -20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y-2);
            } 
            else {
                image(this.sling3, pointA.x+25, pointA.y-10, 15, 30) 
                strokeWeight(4);
                line(pointA.x + 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 20, pointA.y, pointB.x + 30, pointB.y-2);
            }
            pop()
            }
        }
}