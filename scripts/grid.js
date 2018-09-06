//This class defines the grid system that the entire game will be based off of
class Grid {

	//This constructor receives how many divisions the grid will have
	constructor(div) {
		//Sets the retrieved variable to an internal object variable
		this.div = div;

		//Creates a handy grid length variable
		this.length = floor(height / this.div);

		this.dim = {width: floor(width / this.length), height: floor(height / this.length)};


		//The grid will not be shown by default
		this.visibility = false;
	}

	//The code that renders the grid
	render() {
		stroke(0);

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


	//Converts a window coordinate to a grid position
	toGrid(input) {
		//Returns the value as a JSON object
		return floor(input / this.length);
	}

	//Converts a grid position to a window coordinate
	toCoord(input) {
		//Returns the value as a JSON object
		return input * this.length
	}


	//What gets run whenever a window resize is detected
	resize() {
		//Sets the grid length respectively
		this.length = floor(height / this.div);

		this.dim = {width: floor(width / this.length), height: floor(height / this.length)};
	}
}
