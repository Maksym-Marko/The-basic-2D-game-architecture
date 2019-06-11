/*
* This section manages game processes.
*/

let DrawGame = {

	// elements
	array_elements: [],

	// start game
	startGame: function( e, game_area ) {

		e.preventDefault();

		this.game_area = game_area;		

		// init
		DrawGame.init();		

	},

	// create canvas 
	createArea: function() {

		document.getElementById( DrawGame.game_area ).innerHTML = HtmlManager.canvasTemplate( 600, 400 );
		
	},

	/*
	* Layout implementation
	* 	-> canvas_engine.js
	*/
	gameImplementation: function() {

		// run canvas
		CanvasEngine.runCanvas( GameManager.mx_gaming_canvas, '#70c5ce' );

		// draw elements
		CanvasEngine.addStaticElements( DrawGame.array_elements );

		// initialization
		CanvasEngine.init();

	},

	/*
	* Set elements to array.
	* Here you can set elements and their coordinates.
	*/
	setStaticElementsToArray: function() {

		// add first element
		DrawGame.array_elements.push( new elementInstance( 260, 160, 30, 50, '#f00' ) );
	
		// add second element
		DrawGame.array_elements.push( new elementInstance( 160, 120, 30, 50, '#00f' ) );

	},

	/*
	* initialization
	*/
	init: function() {

		// create canvas
		DrawGame.createArea();

		// set elements to array
		DrawGame.setStaticElementsToArray();

		// start loop
		DrawGame.gameImplementation();

	}

};
