const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];

var score = 0;
var count = 0;

var dv1, dv2, dv3, dv4, dv5, dv6, dv7, dv8, dv9, dv10;
var particle, gameState = "play";

function preload() {

}

function setup() {
	createCanvas(710, 720);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(355, windowHeight, width, 20)

	dv1 = new Division(0, windowHeight, 10, 500);
	dv2 = new Division(80, windowHeight, 10, 500);
	dv3 = new Division(160, windowHeight, 10, 500);
	dv4 = new Division(240, windowHeight, 10, 500);
	dv5 = new Division(320, windowHeight, 10, 500);
	dv6 = new Division(400, windowHeight, 10, 500);
	dv7 = new Division(480, windowHeight, 10, 500);
	dv8 = new Division(560, windowHeight, 10, 500);
	dv9 = new Division(640, windowHeight, 10, 500);
	dv10 = new Division(720, windowHeight, 10, 500);

	for (var j = 65; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 75, 10));

	}

	for (var j = 45; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 175, 10));

	}

	for (var j = 65; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 275, 10));

	}

	for (var j = 45; j <= width; j = j + 50) {
		plinkos.push(new Plinko(j, 375, 10));

	}

	Engine.run(engine);

}


function draw() {
	ellipseMode(CENTER);
	background("black");

	textSize(20);
	fill("white");
	text("1000", 15, windowHeight - 230);
	text("1000", 655, windowHeight - 230);
	text("500", 105, windowHeight - 230);
	text("500", 185, windowHeight - 230);
	text("100", 265, windowHeight - 230);
	text("100", 345, windowHeight - 230);
	text("100", 425, windowHeight - 230);
	text("500", 505, windowHeight - 230);
	text("500", 585, windowHeight - 230);
	text("Score : " + score, 15, 30);



	for (var i = 0; i < plinkos.length; i++) {
		plinkos[i].display();

	}

	/*if(frameCount%60 === 0){
	  particles.push(new Particle(random(width/2-100 , width/2+100) , 10, 10))
		}	
  
	for(var k = 0	; k < particles.length; k++){
	  particles[k].display();
  	
		}*/

	ground.display();
	dv1.display();
	dv2.display();
	dv3.display();
	dv4.display();
	dv5.display();
	dv6.display();
	dv7.display();
	dv8.display();
	dv9.display();
	dv10.display();

	if (particle != null) {

		particle.display();

		if (particle.body.position.y > 700) {

			if (particle.body.position.x > 240 && particle.body.position.x < 480) {

				score += 100
				particle = null;

			}

		}
	}

	if (particle != null) {

		particle.display();

		if (particle.body.position.y > 700) {

			if (particle.body.position.x > 0 && particle.body.position.x < 80) {

				score += 1000
				particle = null;

			}

		}
	}

	if (particle != null) {

		particle.display();

		if (particle.body.position.y > 700) {

			if (particle.body.position.x > 640 && particle.body.position.x < 720) {

				score += 1000
				particle = null;

			}

		}
	}

	if (particle != null) {

		particle.display();

		if (particle.body.position.y > 700) {

			if (particle.body.position.x > 80 && particle.body.position.x < 240) {

				score += 500
				particle = null;

			}

		}
	}

	if (particle != null) {

		particle.display();

		if (particle.body.position.y > 700) {

			if (particle.body.position.x > 400 && particle.body.position.x < 640) {

				score += 500
				particle = null;

			}

		}
	}


if(count === 6){

	clear();
	textSize(30)
	fill("red")
	text("Your score is : "+ score, width/2 , height/2)
	particles.destroy();``
	gameState === "end";

}





}
function mousePressed() {

	if (gameState !== "end") {

		particle = new Particle(mouseX, 10, 10, 10);
		count +=1

	}
}