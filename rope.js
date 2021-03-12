class Rope {

constructor(bodyA,pointB){

var option ={

bodyA : bodyA,
pointB: pointB,
length : 500,
swif

}

this.rope = Constraint.create(option)
World.add(world,this.rope)
this.pointB = pointB

}

display(){
var pointA = this.rope.bodyA.position
var pointB = this.pointB

line(pointA.x,pointA.y,pointB.x,pointB.y)

}
}