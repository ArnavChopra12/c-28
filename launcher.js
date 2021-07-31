class Launcher
{
    constructor(bodyA, pointB)
	{
		var options={
bodyA: bodyA,
pointB: pointB,
stiffness: 0.01,
length: 10
		}
		this.pointB=this.pointB;
		this.sling = Constraint.create(options);
		World.add(world, this.launch);
}
fly(){
	this.launcher.bodyA=null;
}
Launch(bodyA){
	this.throw.bodyA=this.bodyA;
}
display(){

}
	}
