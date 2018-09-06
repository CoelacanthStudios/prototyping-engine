class Tile {
	constructor(xGrid, yGrid, type) {
		this.pos = createVector(xGrid, yGrid);
		this.type = type;
	}

	render(gridSystem) {
		noStroke();

		if(this.type == 'grass') {
			fill(0, 100, 0);
		}
		
		rect(floor(gridSystem.toCoord(this.pos.x)), floor(gridSystem.toCoord(this.pos.y)), gridSystem.length, gridSystem.length);
	}
}
