class Bob4 {
    constructor (x,y,radius) {
        var options = {
            isStatic:false,
            restitution:1.0,
            friction:0.5,
            density:2
        }
       
        this.body = Bodies.circle(660,500,50,options);
        World.add(world,this.body);
       }
       
       display(){
           var poss =this.body.position;
           var anglee = this.body.angle;

           
           push();
           translate(poss.x, poss.y);
           rotate(anglee);
           
           strokeWeight(8);
           stroke("yellow");
       
           ellipseMode(RADIUS);
           ellipse(0 , 0 , this.radius,this.radius);
           fill("pink");
       
           
           pop();
         }
       
       };