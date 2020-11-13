class Chain{
constructor(bodyA,bodyB){
    var options= {

        bodyA: bodyA,
        bodyB :bodyB,
        stiffness: 0.4,
        length:0.5,
    }

    this.chain= Constraint.create(options);



}
display(){
var posA=this.chain.bodyA.position
var posB=this.chain.bodyB.position
    stroke("brown");
    strokeWeight(5);
    line(posA.x,posA.y,posB.x,posB.y);
}        
        
}        
        
        
        
        
        
        





















