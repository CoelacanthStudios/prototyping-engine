class Tile {
	constructor(xGrid, yGrid, type) {
		this.pos = createVector(xGrid, yGrid);
		this.type = type;
	}

	render(gridSystem) {
		noStroke();

		if(this.type == 'grass') {
			fill(25, 175, 50);
		} else if(this.type == 'yes') {
			fill(0, 0, 255);
		}
		
		rect(floor(gridSystem.toCoord(this.pos.x)), floor(gridSystem.toCoord(this.pos.y)), gridSystem.length, gridSystem.length);
	}
}
