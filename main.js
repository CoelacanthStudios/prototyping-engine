let grid;

class Tile {
	constructor(x, y, type) {
		this.pos = createVector(x, y);
		this.type = type;
	}

	render() {
		noStroke();

		if(this.type = 'grass') {
			fill(0, 100, 0);
		}

		rect()
	}
}

//This class defines the grid system that the entire game will be based off of
class Grid {

	//This constructor receives how many divisions the grid will have
	constructor(div) {
		//Sets the retrieved variable to an internal object variable
		this.div = div;

		//Creates a handy grid length variable
		this.length = height / this.div;


		//The grid will not be shown by default
		this.visibility = false;
	}

	//The code that renders the grid
	render() {
		//Unless the visibility is set to 'true' it will not render
		if(this.visibility) {
			//Creates vertical grid lines for how many divisions there are
			for(let i = 0; i < width; i += this.length) {
				//The line position is floored to keep the image clear
				line(floor(i), 0, floor(i), height);
			}

			//Creates horizontal grid lines for how many divisions there are
			for(let i = 0; i < height; i += this.length) {
				//The line position is floored to keep the image clear
				line(0, floor(i), width, floor(i));
			}
		}
	}


	//Converts a window coordinate to a grid position
	toGrid(xIn, yIn) {
		//Returns the value as a JSON object
		return {x: floor(xIn / this.length), y: floor(yIn / this.length)};
	}

	//Converts a grid position to a window coordinate
	toCoord(xIn, yIn) {
		//Returns the value as a JSON object
		return {x: xIn * this.length, y: yIn * this.length};
	}


	//What gets run whenever a window resize is detected
	resize() {
		//Sets the grid length respectively
		this.length = height / this.div;
	}


	//A handy function to set the visibility to 'true'
	show() {
		this.visibility = true;
	}

	//A handy function to set the visibility to 'false'
	hide() {
		this.visibility = false;
	}
}


function setup() {
	width = windowWidth;
	height = windowHeight;
	createCanvas(width, height);

	grid = new Grid(16);
	grid.show();
}

function draw() {
	background(255);

	grid.render();
}


function mousePressed() {
	console.log(grid.toGrid(mouseX, mouseY));
}

function windowResized() {
	width = windowWidth;
	height = windowHeight;
	
	resizeCanvas(width, height, true);
	grid.resize();
}
