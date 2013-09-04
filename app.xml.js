var App = function(){

	// get data
	this.data = [
		{ name: 'I', types:'7,9' },
		{ name: 'II' },
		{ name: 'III' },
		{ name: 'IV' },
		{ name: 'V' }
	];

	this.map = [
		{ h: 100, w: 100, x: 0, y: 0 },
		{ h: 100, w: 100, x: 100, y: 10 },
		{ h: 100, w: 100, x: 200, y: 20 },
		{ h: 100, w: 100, x: 300, y: 30 },
		{ h: 100, w: 100, x: 400, y: 40 }
	];

	this.newNode = function(el, txt, parent) {
		// create objects
		var el = document.createElement(el),
			txt = txt ? document.createTextNode(txt) : null;
		if(txt) el.appendChild(txt); // build element
		if(parent) parent.appendChild(el); // if has parent append to it
		return el;
	};

	// initialize
	this.render();

};

// render xml file from json data
App.prototype.render = function() {

	var container = this.newNode("things");

	for(i in this.data){

		// params
		var $thing = this.data[i], $map = this.map[i];

		// create xml nodes
		thing = this.newNode("thing");
		this.newNode("name", $thing.name, thing);
		this.newNode("height", $map.h, thing);
		this.newNode("width", $map.w, thing);
		this.newNode("x", $map.x, thing);
		this.newNode("y", $map.y, thing);

		// add to main container
		container.appendChild(thing);
	}

	// attach to document
	document.getElementsByTagName("xml")[0].appendChild(container);

};

var app = new App();