//sketch one
var sketch1 = function( p ){
	p.setup = function(){
		p.createCanvas(200,200);
	};

	p.draw = function() {
		p.background('pink');
		p.fill('black');
		p.ellipse(p.width/2,p.height/2,50,50);
	};
};
var myp5_1 = new p5(sketch1, 'c1');

//Sketch two
var sketch2 = function( p ){
	p.setup = function(){
		p.createCanvas(200,200);
	};

	p.draw = function() {
		p.background('black');
		p.fill('white');
		p.ellipse(p.width/2,p.height/2,50,50);
	};
};
var myp5_2 = new p5(sketch2, 'c2');
