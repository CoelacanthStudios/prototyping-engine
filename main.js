let player;

class Player {
	constructor(spawn) {
		this.pos = createVector(spawn.x, spawn.y);
	}

	update() {}

	input() {
		if(keyCode === 87) {
			this.pos.y -= 10;
		}
	}

	render() {
		noStroke();
		fill(0);
		ellipse(this.pos.x, this.pos.y, 100);
	}
}

function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);

	player = new Player({x: width / 2, y: height / 2});
}

function draw() {
	background(255);

	player.update();
	player.render();
}

function keyIsDown(code) {
	if(code === 87 || code === 83 || code === 65 || code === 68) {
		player.input();
	}
}

function windowResized() {
	resizeCanvas(width, height);
}