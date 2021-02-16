	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Constraint = Matter.Constraint;

	var engine, world;
	var ball,ground;
	var box1;
	var spring;



	function setup() {
	createCanvas(1300,500);

	engine = Engine.create();
	world = engine.world;

	ball= new Ball(150,100,50);
	//spring = new Projectile(ball.body,{x:200,y:200});
	ground = new Ground(440,380,320,15);
    ground2 = new Ground1(740,380,340,15);

    //last layer
    block  = new BoxA(470,350);
	block1 = new BoxB(510,350);
	block2 = new BoxC(550,350);
	block3 = new BoxD(590,350);
	block4 = new BoxE(630,350);
	block5 = new BoxA(670,350);
	block6 = new BoxB(710,350);
	//second last layer
	block7 = new BoxC(490,310);
	block8 = new BoxD(530,310);
	block9 = new BoxE(570,310);
	block10 = new BoxA(610,310);
	block11 = new BoxB(650,310);
	block12 = new BoxC(690,310);
    //last third layer
	block13 = new BoxD(510,270);
    block14 = new BoxE(550,270);
	block15 = new BoxA(590,270);
	block16 = new BoxB(630,270);
	block17 = new BoxC(670,270);
	//last fourth layer
	block18 = new BoxD(530,230);
	block19 = new BoxE(570,230);
	block20 = new BoxA(610,230);
	block21 = new BoxB(650,230);
	//fifth layer
	block22 = new BoxB(550,190);
	block23 = new BoxC(590,190);
	block24 = new BoxD(630,190);
    //sixth layer
	block25 = new BoxE(570,150);
	block26 = new BoxA(610,150);
    //top layer
    block27 = new BoxB(590,110);


	}

	function draw() {
	background("black");
	Engine.update(engine);


	ball.display();
	ground.display();
    ground2.display();

	block.display();
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
    block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();
	block17.display();
	block18.display();
	block19.display();
	block20.display();
	block21.display();
	block22.display();
    block23.display();
	block24.display();
	block25.display();
	block26.display();
	block27.display();

	drawSprites();
	}	

/*function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX ,y: mouseY});
}

function mouseReleased(){
	spring.release();
}*/
