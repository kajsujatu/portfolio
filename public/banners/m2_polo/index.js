(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,246,306);


(lib.hero1 = function() {
	this.initialize(img.hero1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,217,302);


(lib.hero2 = function() {
	this.initialize(img.hero2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,303);


(lib.hero3 = function() {
	this.initialize(img.hero3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,224,304);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgXByIAAjjIAvAAIAADjg");
	this.shape.setTransform(163.45,24.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag7BXQgbgeAAg5QAAgiANgbQANgbAYgOQAYgOAhAAQAhAAAhAQIgQAnQgNgGgMgFQgNgEgMAAQgbAAgPAUQgPAVAAAkQAABMA5AAQAXAAAigMIAAApQgcALgiAAQgxAAgageg");
	this.shape_1.setTransform(148.3,24.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhJCJIAAgtQAXAKAQAFQAQADANAAQAPABAJgHQAIgGAAgMQAAgHgEgFQgDgFgIgFQgHgEgVgLQgVgKgLgJQgKgJgGgMQgHgLABgQQgBgfAVgRQAVgRAiAAQATAAAQAEQAQAEARAIIgPAlQgTgHgLgDQgMgDgMAAQgMAAgIAHQgHAGgBAKQAAAGADAGQAEAEAGAEQAHAEAXAMQAgAPAMAQQAMAOgBAXQAAAfgVASQgXARgmABQglAAgcgOgAgYhiIAAgFQAagfAKgQIA1AAIAAAEQgIAIgTAQIgfAYg");
	this.shape_2.setTransform(129,21.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhQBXQgcgfAAg4QAAg5AdgdQAcgeAzgBQA1AAAcAfQAcAeAAA4QAAA4gcAfQgcAfg1AAQgzAAgdgfgAgqg5QgPAUAAAlQAAAmAPAUQAOATAcAAQA6AAAAhNQAAhMg6AAQgbAAgPATg");
	this.shape_3.setTransform(107.375,24.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AApByIgfh3IgFgaQgFgUAAgHIgEAbIgGAbIgeB2Ig3AAIg7jjIAwAAIAdB8QAIAiADAZIAFgbQADgTADgKIAhh/IAtAAIAhB/IAGAaIAFAeIAFgeIAGgdIAdh8IAwAAIg6Djg");
	this.shape_4.setTransform(79.175,24.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhQBXQgcgfAAg4QAAg5AdgdQAcgeAzgBQA1AAAcAfQAcAeAAA4QAAA4gcAfQgcAfg1AAQgzAAgdgfgAgqg5QgPAUAAAlQAAAmAPAUQAOATAcAAQA6AAAAhNQAAhMg6AAQgbAAgPATg");
	this.shape_5.setTransform(50.975,24.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAoByIhjisIgBAAQADAuAAATIAABrIgrAAIAAjjIA9AAIBiCqIABAAIgCg+IAAhsIArAAIAADjg");
	this.shape_6.setTransform(25.275,24.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(0,0,181,47.6), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjcFAIAAhiICeigQBBhCAYgeQAVgbAJgXQAJgWAAgYQAAgkgTgQQgSgRghAAQgkAAgfAQQghAPglAfIgFAEIhNhdIADgDQAwgpAegOQAegRAkgJQAlgJArAAQA8AAAuAWQAtAWAaAnQAaAoAAAyQgBAqgPApQgRApgeAkQgeAlhTBNIhLBIIEMAAIAAB4g");
	this.shape.setTransform(174.0605,16.3926,0.467,0.467);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AivDTQgpgpAAhJQAAhPA3gkQA3glBqgEIBOgDIAAgQQAAhDhFABQg2gBhNAjIgEACIgvhhIAEgCQBTgsBkAAQBhAAA1ArQA1AsAABWIAAFBIhjAAIgZg/QgfAogjAPQgjAQg4AAQhHAAgogogAAhAZQg3ACgaASQgZARAAAjQAAAyA6AAQAqAAAZgYQAagZAAgpIAAghg");
	this.shape_1.setTransform(138.8818,19.9887,0.467,0.467);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AifD3IAAnkIBsAAIASBPQAXgnAkgYQAngZAuAAQAbAAARAEIAFABIgLCEIgGgCQgNgEgYAAQg8AAghAfQggAeAAA2IAAD3g");
	this.shape_2.setTransform(119.22,19.8136,0.467,0.467);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AidC6QhChAAAh2QAAh5A9hDQA9hCBrAAQBnAAA5A6QA6A8AABmIAABEIkxAAQADAxAcAcQAcAeA1AAQAsAAAkgJQAlgJAqgTIAHgEIAABwIgDABQghAQgpAKQgmAIg5AAQh0AAhChBgABcg6QgCgqgWgXQgWgZgnAAQgnAAgVAZQgVAXgEAqICqAAIAAAAg");
	this.shape_3.setTransform(96.8728,20.0121,0.467,0.467);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3AzQgTgSAAghQAAggATgSQAUgSAjAAQAlAAATASQAUASgBAgQABAhgUARQgSATgmgBQgkAAgTgRg");
	this.shape_4.setTransform(78.6238,3.1991,0.467,0.467);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFDzIAAnkICLAAIAAHkg");
	this.shape_5.setTransform(78.6121,20.0121,0.467,0.467);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFFQIAAqfICLAAIAAKfg");
	this.shape_6.setTransform(66.2126,15.6687,0.467,0.467);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah7DcQg1gegeg6Qgcg5AAhLQAAh2A+hCQA+hCBvAAQBHAAA1AeQA1AfAdA5QAcA4AABMQAAB1g+BDQg/BDhuAAQhGAAg1gfgAhGhnQgWAiAABFQAABDAWAkQAWAiAxAAQAxAAAVgiQAWgiAAhFQAAhFgWgiQgWgggxgBQgwAAgWAhg");
	this.shape_7.setTransform(47.4381,20.0121,0.467,0.467);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADME8IABlbQAAgYAEhhIiaHUIh/AAIiPnSQAHB7AAAxIAAEmIiAAAIAAp3IC8AAICQHTICZnTIC8AAIAAJ3g");
	this.shape_8.setTransform(15.7271,16.6028,0.467,0.467);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,184.5,31.8), null);


(lib.Klatkapośrednia1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Agvg2IBfA2IhfA3g");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-5.5,9.5,11.1);


(lib.hero3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.hero3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero3_1, new cjs.Rectangle(0,0,224,304), null);


(lib.hero2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.hero2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero2_1, new cjs.Rectangle(0,0,184,303), null);


(lib.hero1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Warstwa_1
	this.instance = new lib.hero1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hero1_1, new cjs.Rectangle(0,0,217,302), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.Klatkapośrednia1("synched",0);
	this.instance.setTransform(80.9,13.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAvIAghLIgdAAIAAgSIA4AAIghBMIAfAAIAAARg");
	this.shape.setTransform(69.4,13.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaAvIgHgTIglAAIgIATIgSAAIAkhdIARAAIAkBdgAgLAKIAYAAIgNgfg");
	this.shape_1.setTransform(61.35,13.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKAvIgTgoIgCAAIAAAoIgSAAIAAhdIATAAQAOAAAHADQAHADAEAGQAEAHAAAIQAAAKgFAGQgEAFgJADIAWAqgAgLgJIAFAAQAIAAADgCQADgDAAgFQAAgDgBgCQgCgCgDgBIgIgBIgFAAg");
	this.shape_2.setTransform(53.175,13.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAvIAAhdIAzAAIAAASIghAAIAAARIAhAAIAAAQIghAAIAAAYIAhAAIAAASg");
	this.shape_3.setTransform(45.85,13.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIAvIAAhLIgRAAIAAgSIAzAAIAAASIgRAAIAABLg");
	this.shape_4.setTransform(39.525,13.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbAvIAAhdIATAAQAPAAAGADQAHADAEAGQAEAHAAAIQAAAKgFAHQgFAFgJADQgFABgNAAIAAAogAgJgJIAGAAIAIgBIAEgDQACgCAAgEQAAgFgFgCQgDgCgHAAIgFAAg");
	this.shape_5.setTransform(29.675,13.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRArQgHgEgDgIQgEgHAAgQIAAg3IASAAIAAA7QAAAJACACQABAEADABQADACAEAAQAEAAAEgCQADgCABgDQACgDAAgKIAAg5IASAAIAAA3QAAAOgCAGQgCAFgEAFQgFAFgFADQgGACgIAAQgJAAgIgFg");
	this.shape_6.setTransform(21.725,13.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AANAvIgcgqIAAAqIgSAAIAAhdIASAAIAAAhIAYghIAWAAIggAqIAjAzg");
	this.shape_7.setTransform(13.975,13.225);

	this.instance_1 = new lib.Klatkapośrednia1("synched",0);
	this.instance_1.setTransform(156.15,376.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgcAvIAfhLIgdAAIAAgSIA3AAIgfBMIAdAAIAAARg");
	this.shape_8.setTransform(143.6,376.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAbAvIgHgTIgmAAIgHATIgTAAIAkhdIARAAIAkBdgAgMAKIAZAAIgMgfg");
	this.shape_9.setTransform(135.55,376.475);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAKAvIgTgoIgCAAIAAAoIgSAAIAAhdIATAAQAOAAAHADQAHADAEAGQAEAHAAAIQAAAKgFAGQgEAFgJADIAWAqgAgLgJIAFAAQAIAAADgCQADgDAAgFQAAgDgBgCQgCgCgDgBIgIgBIgFAAg");
	this.shape_10.setTransform(127.375,376.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYAvIAAhdIAxAAIAAASIgfAAIAAARIAfAAIAAAQIgfAAIAAAYIAfAAIAAASg");
	this.shape_11.setTransform(120.05,376.475);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgIAvIAAhLIgRAAIAAgSIAzAAIAAASIgRAAIAABLg");
	this.shape_12.setTransform(113.725,376.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbAvIAAhdIATAAQAPAAAGADQAHADAEAGQAEAHAAAIQAAAKgFAHQgFAFgJADQgFABgNAAIAAAogAgJgJIAGAAIAIgBIAEgDQACgCAAgEQAAgFgFgCQgDgCgHAAIgFAAg");
	this.shape_13.setTransform(103.875,376.475);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRArQgHgEgDgIQgEgGAAgRIAAg3IASAAIAAA7QAAAIACAEQABADADABQADACAEAAQAEAAAEgCQADgCABgDQACgDAAgKIAAg5IASAAIAAA3QAAAOgCAGQgCAFgEAFQgFAFgFACQgGADgIAAQgJAAgIgFg");
	this.shape_14.setTransform(95.925,376.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AANAvIgcgqIAAAqIgSAAIAAhdIASAAIAAAhIAYghIAWAAIggAqIAjAzg");
	this.shape_15.setTransform(88.175,376.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:80.9}}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:82.9}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:82.9}}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_1},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{x:82.9}}]},1).wait(1));

	// bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(150,24,62,0.8)").s().p("AnRCAIAAj/IOjAAIAAD/g");
	this.shape_16.setTransform(46.575,12.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160.9,386);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var logo = this.logo;
		var hero1 = this.hero1;
		var hero2 = this.hero2;
		var hero3 = this.hero3;
		var text = this.text;
		var btn = this.btn;
			
		var tl = new TimelineMax({onComplete:getTime});
		
		var h = lib.properties.height;
		var w = lib.properties.width;
		
		var tl = new TimelineMax({onStart:getTime});
		
		init();
		function getTime(){
			
			console.log(tl.duration());
		}
		
		function init()
		{
			tl
			
			.set([logo, text, hero1, hero2, hero3, btn], {alpha:1},0)
					
			.add("frame1")
		
				.from(hero1, 1,{x:-123, ease:Power4.easeOut}, "frame1")
				.from(text, 1,{alpha:0, scale:.01, ease:Power4.easeOut}, "frame1")
				
			.add("frame2",2)	
		
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame2")
				.to(hero1, 1,{x:-123, ease:Power4.easeOut}, "frame2")	
				.from(hero2, 1,{x:363, ease:Power4.easeOut}, "frame2")
			
			.add("frame3",4)
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame3")
				.to(hero2, 1,{x:363, ease:Power4.easeOut}, "frame3")
				.from(hero3, 1,{x:-120, ease:Power4.easeOut}, "frame3")
				
			.add("frame4",6) //repeat
				
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame4")
				.to(hero3, 1,{x:363, ease:Power4.easeOut}, "frame4")
				.to(hero1, 1,{x:120, ease:Power4.easeOut}, "frame4")
		
			.add("frame5",8)	
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame5")
				.to(hero1, 1,{x:-123, ease:Power4.easeOut}, "frame5")	
				.to(hero2, 1,{x:123, ease:Power4.easeOut}, "frame5")
				
			.add("frame6",10)
				
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame6")
				.to(hero2, 1,{x:-123, ease:Power4.easeOut}, "frame6")
				.to(hero3, 1,{x:123, ease:Power4.easeOut}, "frame6")
				
			.add("frame7",12) //repeat
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame7")
				.to(hero3, 1,{x:363, ease:Power4.easeOut}, "frame7")
				.to(hero1, 1,{x:120, ease:Power4.easeOut}, "frame7")
			
			.add("frame8",14)
				
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame8")
				.to(hero1, 1,{x:363, ease:Power4.easeOut}, "frame8")
				.to(hero2, 1,{x:120, ease:Power4.easeOut}, "frame8")	
				
			.add("frame9",16)
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame9")
				.to(hero2, 1,{x:-123, ease:Power4.easeOut}, "frame9")
				.to(hero3, 1,{x:120, ease:Power4.easeOut}, "frame9")
				
			.add("frame10",18) //repeat
				
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame10")
				.to(hero3, 1,{x:-123, ease:Power4.easeOut}, "frame10")
				.to(hero1, 1,{x:120, ease:Power4.easeOut}, "frame10")
				
			.add("frame11",20)
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame11")
				.to(hero1, 1,{x:363, ease:Power4.easeOut}, "frame11")
				.to(hero2, 1,{x:120, ease:Power4.easeOut}, "frame11")			
		
			.add("frame12",22)
				
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame12")
				.to(hero2, 1,{x:363, ease:Power4.easeOut}, "frame12")
				.to(hero3, 1,{x:120, ease:Power4.easeOut}, "frame12")
			
			.add("frame13",24) //repeat
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame13")
				.to(hero3, 1,{x:-123, ease:Power4.easeOut}, "frame13")
				.to(hero1, 1,{x:120, ease:Power4.easeOut}, "frame13")	
				
			.add("frame14",26)
				
				.to(text, 1.5,{scale:.8, ease:Bounce.easeOut}, "frame14")
				.to(hero1, 1,{x:-123, ease:Power4.easeOut}, "frame14")
				.to(hero2, 1,{x:120, ease:Power4.easeOut}, "frame14")	
				
			.add("frame15",28)
				
				.to(text, 1.5,{scale:1, ease:Bounce.easeOut}, "frame15")
				.to(hero2, 1,{x:363, ease:Power4.easeOut}, "frame15")
				.to(hero3, 1,{x:120, ease:Power4.easeOut}, "frame15")
				
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// logo
	this.logo = new lib.logo();
	this.logo.name = "logo";
	this.logo.setTransform(120.05,21.35,0.897,0.897,0,0,0,92.3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));

	// top
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("A1bj1MAq3AAAIAAHrMgq3AAAg");
	this.shape.setTransform(127.5,19.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("A1bD2IAAnrMAq3AAAIAAHrg");
	this.shape_1.setTransform(127.5,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// btn
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(119.55,375.9,1,1,0,0,0,46.6,12.8);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.btn(), 3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("AhjBSIAAijABdhRIAAATIAHAAIAACNIgHAAIAAAD");
	this.shape_2.setTransform(156.1,343.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.btn}]}).wait(1));

	// text
	this.text = new lib.text();
	this.text.name = "text";
	this.text.setTransform(120,341.1,1,1,0,0,0,90.5,23.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	// bottom
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(50,50,50,0)").ss(1,1,1).p("ATqnrIAiAAAUMHrIlTAAAORHDI4QAAApXHrIq0AAIAAvWICPAA");
	this.shape_3.setTransform(114.875,365.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AyzGiIAAtDMAlmAAAIAANDg");
	this.shape_4.setTransform(120.35,358.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// hero1
	this.hero1 = new lib.hero1_1();
	this.hero1.name = "hero1";
	this.hero1.setTransform(120.05,187.15,0.8729,0.8729,0,0,0,99.7,153.6);

	this.timeline.addTween(cjs.Tween.get(this.hero1).wait(1));

	// hero2
	this.hero2 = new lib.hero2_1();
	this.hero2.name = "hero2";
	this.hero2.setTransform(120.05,181.5,0.8834,0.8834,0,0,0,92.3,149.8);

	this.timeline.addTween(cjs.Tween.get(this.hero2).wait(1));

	// hero3
	this.hero3 = new lib.hero3_1();
	this.hero3.name = "hero3";
	this.hero3.setTransform(120,172.75,0.8806,0.8806,0,0,0,102.6,140.8);

	this.timeline.addTween(cjs.Tween.get(this.hero3).wait(1));

	// bg
	this.instance = new lib.bg();
	this.instance.setTransform(-3,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(104.7,193.9,161,555.2);
// library properties:
lib.properties = {
	id: '307BCC117BF74541B2572B1781F20174',
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./bg.jpg?1610120015152", id:"bg"},
		{src:"./hero1.png?1610120015152", id:"hero1"},
		{src:"./hero2.png?1610120015152", id:"hero2"},
		{src:"./hero3.png?1610120015152", id:"hero3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['307BCC117BF74541B2572B1781F20174'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;