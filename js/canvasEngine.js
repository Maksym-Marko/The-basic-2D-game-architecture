/*
* There is the canvas drawing engine.
*/ 

let CanvasEngine = {

	// data for each static elements
	static_elements_data: [],

	// data for players
	players_data: [],

	// canvas initialization
	runCanvas: function( _canvas, bgc_color ) {

		CanvasEngine.canvas_element = document.getElementById( _canvas );

		CanvasEngine.context = CanvasEngine.canvas_element.getContext( '2d' );

		// set color
		CanvasEngine.bgc = bgc_color;

	},

	// layout
	drawLayout: function() {

		// background
		CanvasEngine.context.fillStyle = CanvasEngine.bgc;

		CanvasEngine.context.fillRect( 0, 0, CanvasEngine.canvas_element.width, CanvasEngine.canvas_element.height );

	},

	/*
	* add static elements
	*/
	addStaticElements: function( array_of_static_elemnts ) {

		// set elements
		CanvasEngine.array_of_static_elemnts = array_of_static_elemnts;

		// create data point for each elemetns
		CanvasEngine.array_of_static_elemnts.map( function( value, index ) {

		let tmp_obj = {};			

			Object.keys( value ).map( function( objectKey, index ) {

			    let _value = value[objectKey];

			    tmp_obj[objectKey] = _value;

			});

			CanvasEngine.static_elements_data[index] = tmp_obj;			

		} );

		// console.log(CanvasEngine.static_elements_data);


	},

		// map static elements
		mapStaticElements: function() {

			CanvasEngine.array_of_static_elemnts.map( function( value, index ) {

				// draw elements
				CanvasEngine.drawStaticElement( value, index );

			} );

		},

			// draw static element
			drawStaticElement: function( params_object, _index ) {			

				CanvasEngine.context.beginPath();

				CanvasEngine.context.fillStyle = params_object.color;

				CanvasEngine.context.rect( params_object.posX, params_object.posY, params_object.width, params_object.height );
				
				CanvasEngine.context.fill();

			},

	/*
	* Add player
	*/
	addPlayer: function( array_of_players ) {

		// set players
		CanvasEngine.array_of_players = array_of_players;

		// create data point for each player
		CanvasEngine.array_of_players.map( function( value, index ) {

			let tmp_player_obj = {};			

			Object.keys( value ).map( function( objectKey, index ) {

			    let _value = value[objectKey];

			    tmp_player_obj[objectKey] = _value;

			});

			CanvasEngine.players_data[index] = tmp_player_obj;			

		} );

	},

		// map each player
		mapPlayers: function() {

			CanvasEngine.array_of_players.map( function( value, index ) {

				// draw elements
				CanvasEngine.drawPlayer( value, index );

			} );

		},

			// draw player
			drawPlayer: function( params_object, _index ) {

				CanvasEngine.context.beginPath();

				CanvasEngine.context.fillStyle = CanvasEngine.players_data[_index].color;

				CanvasEngine.context.rect( CanvasEngine.players_data[_index].posX, CanvasEngine.players_data[_index].posY, CanvasEngine.players_data[_index].width, CanvasEngine.players_data[_index].height );
				
				CanvasEngine.context.fill();

			},

	/*
	* Key Manager
	*/
	keyManagerInit: function( speed ) {

		document.addEventListener( 'keypress', CanvasEngine.logKey );

		CanvasEngine.keySpeed = speed !== undefined ? speed : 0.5;

	},

		// check key
		logKey: function( e ) {

			if( e.code === 'KeyS' || e.code === 'KeyW' || e.code === 'KeyA' || e.code === 'KeyD' ) {

				// move to top
				if( e.code === 'KeyW' ) {

					CanvasEngine.players_data[0].posY = CanvasEngine.players_data[0].posY - CanvasEngine.keySpeed;

				}

				// move to bottom
				if( e.code === 'KeyS' ) {

					CanvasEngine.players_data[0].posY = CanvasEngine.players_data[0].posY + CanvasEngine.keySpeed;

				}

				// move to the right
				if( e.code === 'KeyD' ) {

					CanvasEngine.players_data[0].posX = CanvasEngine.players_data[0].posX + CanvasEngine.keySpeed;

				}

				// move to the left
				if( e.code === 'KeyA' ) {

					CanvasEngine.players_data[0].posX = CanvasEngine.players_data[0].posX - CanvasEngine.keySpeed;

				}

			}			

		},

	/*
	* loop
	*/
	loop: function() {

		// layout
		CanvasEngine.drawLayout();

		// draw static elements
		CanvasEngine.mapStaticElements();

		// draw players
		CanvasEngine.mapPlayers();

		// loop engine
		requestAnimationFrame( CanvasEngine.loop );

	},

	// initialization
	init: function() {

		CanvasEngine.loop();

	}

};