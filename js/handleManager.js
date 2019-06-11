// waiting element loading
function waitToElement( element, func ) {

	let checkExist = setInterval(function() {

		console.log( 'I\'m waiting for "#' + element + '" element!' );

		let check_element = document.getElementById( element );

		if ( check_element !== null ) {

			clearInterval(checkExist);

			func();

			console.log( 'There is an element.' );

		}		

	}, 100);

}

// static element instance
function StaticElementInstance( posX, posY, width, height, color ) {

	this.posX 		= posX;

	this.posY 		= posY;

	this.width 		= width;

	this.height 	= height;

	this.color 		= color;

}

// player
function PlayerInstance( posX, posY, width, height, color ) {

	this.posX 		= posX;

	this.posY 		= posY;

	this.width 		= width;

	this.height 	= height;

	this.color 		= color;

}