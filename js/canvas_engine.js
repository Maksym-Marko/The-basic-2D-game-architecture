/*
* There is the canvas drawing engine.
*/ 

let CanvasEngine = {

	// data for each elements
	elements_data: [],

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

	// add elements
	addStaticElements: function( array_of_elemnts ) {

		// set elements
		CanvasEngine.array_of_elemnts = array_of_elemnts;

		// create data point for each elemetns
		CanvasEngine.array_of_elemnts.map( function( value, index ) {

		let tmp_obj = {};			

			Object.keys( value ).map( function( objectKey, index ) {

			    let _value = value[objectKey];

			    tmp_obj[objectKey] = _value;

			});

			CanvasEngine.elements_data[index] = tmp_obj;			

		} );

		// console.log(CanvasEngine.elements_data);


	},

	// map elements
	mapElements: function() {

		CanvasEngine.array_of_elemnts.map( function( value, index ) {

			// draw elements
			CanvasEngine.drawElement( value, index );

		} );

	},

	// draw element
	drawElement: function( params_object, _index ) {			

		CanvasEngine.context.beginPath();

		CanvasEngine.context.fillStyle = params_object.color;

		CanvasEngine.context.rect( params_object.posX, params_object.posY, params_object.width, params_object.height );
		
		CanvasEngine.context.fill();

		// console.log(CanvasEngine.elements_data[_index].run.biasX);

	},

	// loop
	loop: function() {

		// layout
		CanvasEngine.drawLayout();

		// elements
		CanvasEngine.mapElements();

		requestAnimationFrame( CanvasEngine.loop );

	},

	// initialization
	init: function() {

		CanvasEngine.loop();

	}

};