let grid,
	tile = [];


function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);

	grid = new Grid(16);

	for(let i = 0; i < grid.dim.width + 1; i++) {
		tile[tile.length] = new Tile(i, floor(grid.dim.height / 2), 'grass');
	}
}

function draw() {
	background(255);

	grid.render();

	for(let i = 0; i < tile.length; i++) {
		tile[i].render(grid);
	}
}


function mousePressed() {
	console.log(grid.toGrid(mouseX), grid.toGrid(mouseY));

	tile[tile.length] = new Tile(grid.toGrid(mouseX), grid.toGrid(mouseY), 'yes');
}

function windowResized() {
	width = windowWidth;
	height = windowHeight;
	
	resizeCanvas(width, height, true);
	grid.resize();
}
