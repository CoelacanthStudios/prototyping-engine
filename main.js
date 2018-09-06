function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);
}

function draw() {
	background(255);

	player.update();
	player.render();
}

function windowResized() {
	resizeCanvas(width, height);
}