/*
* This section guides the firsts steps of the game.
* When a  user entered the page and he is ready starn the game.
*/

let GameManager = {

	/*
	* IDs of elements
	*/
		// preload area
		preload_area: 		'mx_preload_game_area',

		// start button
		start_button: 		'mx_start_game',

		// game area
		mx_gaming_area: 	'mx_gaming_area',

		// canvas
		mx_gaming_canvas: 	'mx_gaming_canvas',

	/*
	* Canvas engine
	*/

	/*
	* 1 create greetings
	*/
		// 1.1 static html
		userGreetings: function() {

			document.getElementById( GameManager.preload_area ).innerHTML = HtmlManager.userGreetings();

		},

	/*
	* 2 set previous actions
	*/
		/*
		* 2.1 set Start Game action
		*	-> drawGame.js
		*/ 
		setStartGameAction: function() {

			waitToElement( GameManager.start_button, function() {

				document.getElementById( GameManager.start_button ).addEventListener( 'click', function( e ) {
					
					// starn game
					DrawGame.startGame( e, GameManager.mx_gaming_area );

					// hide greetings
					GameManager.hideGreetingsArea();

				} );

			} );
		
		},

		// 2.2 hide greetings area
		hideGreetingsArea: function() {

			document.getElementById( GameManager.preload_area ).innerHTML = '';

		},

	/*
	* init
	*/
	init: function() {

		// greetings
		this.userGreetings();

		// start game
		this.setStartGameAction();	

	}


};

window.onload = function() {

	GameManager.init();

};