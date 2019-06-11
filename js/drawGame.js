/*
* This section manages game processes.
*/

let DrawGame = {

	// static elements
	array_static_elements: [],

	// array of players
	array_players: [],

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

		// draw static elements
		CanvasEngine.addStaticElements( DrawGame.array_static_elements );

		// draw player
		CanvasEngine.addPlayer( DrawGame.array_players );

		// initialization
		CanvasEngine.init();

	},

	/*
	* Set elements to array.
	* Here you can set elements and their coordinates.
	*/
	setStaticElementsToArray: function() {

		// add first element
		DrawGame.array_static_elements.push( new StaticElementInstance( 260, 160, 30, 50, '#f00' ) );
	
		// add second element
		DrawGame.array_static_elements.push( new StaticElementInstance( 160, 120, 30, 50, '#00f' ) );

	},

	/*
	* Set the player to array
	*/
	setPlayerToArray: function() {

		DrawGame.array_players.push( new PlayerInstance( 360, 160, 30, 30, '#fafafa' ) );

		// key manager
		CanvasEngine.keyManagerInit( 2.4 );

	},

	/*
	* initialization
	*/
	init: function() {

		// create canvas
		DrawGame.createArea();

		// set static elements to array
		DrawGame.setStaticElementsToArray();

		// set player to array
		DrawGame.setPlayerToArray();

		// start loop
		DrawGame.gameImplementation();

	}

};
