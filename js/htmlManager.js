let HtmlManager = {

	// create greetings
	userGreetings: function() {

		let html 	= 	'<div id="mx_greetings_wrap">' +

							'<img src="./img/hero.jpg" />' +

							'<p>' +

								'You need to click on red box 10 times through 30 sec.' +

							'</p>' +

							'<a href="#" id="mx_start_game">Start Game</a>' +

						'</div>';

		return html;

	},

	// canvas template
	canvasTemplate: function( _width, _height ) {

		let _canvas = '<canvas id="mx_gaming_canvas" width="' + _width + '" height="' + _height + '"></canvas>';

		return _canvas;

	}

};