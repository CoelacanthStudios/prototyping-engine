let gridSize = 100,
	player;

class Player {
	constructor(gridSpawn) {
		this.gridPos = createVector(gridSpawn.x, gridSpawn.y);
		this.pos = createVector(this.gridPos.x * gridSize, this.gridPos.y * gridSize);
	}

	update() {
		this.gridPos.x = constrain(this.gridPos.x, 0, 15);
		this.gridPos.y = constrain(this.gridPos.y, 0, 15);
		
		this.pos.x = this.gridPos.x * gridSize;
		this.pos.y = this.gridPos.y * gridSize;
	}

	render() {
		noStroke();
		fill(0);
		rect(this.pos.x, this.pos.y, gridSize, gridSize);
	}
}

function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);

	gridSize = height / 16;

	player = new Player({x: 2, y: 2});
}

function draw() {
	background(255);

	player.update();
	player.render();
}

function keyPressed() {
	if(keyCode === 87) {
		player.gridPos.y--;
	} else if(keyCode === 83) {
		player.gridPos.y++;
	} else if(keyCode === 65) {
		player.gridPos.x--;
	} else if(keyCode === 68) {
		player.gridPos.x++;
	}
}

function windowResized() {
	resizeCanvas(width, height);
}