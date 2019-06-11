// waiting element loading
function waitToElement( element, func ) {

	let checkExist = setInterval(function() {

		let check_element = document.getElementById( element );

		if ( check_element !== null ) {

			clearInterval(checkExist);

			func();

		}

		console.log( 'I\'m waiting!' );

	}, 100);

}

// element instance
function elementInstance( posX, posY, width, height, color ) {

	this.posX 		= posX;

	this.posY 		= posY;

	this.width 		= width;

	this.height 	= height;

	this.color 		= color;

}
