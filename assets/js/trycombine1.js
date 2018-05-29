// P_4_1_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * image feedback process.
 *
 * KEYS
 * del, backspace      : clear screen
 * s                   : save png
 */
'use strict';

var img;

function preload() {
  img = loadImage('assets/images/original.png');
}

function setup() {
	//createCanvas(1024, 780);
  createCanvas(1024, 880); // even when changing the height, the margin of unfracted imagery stays at the bottom and top. so. we know it's taking it's margins from the total height. 
  image(img, 0, 100);
	
}

function draw() {
  var x1 = floor(random(width/2));
	
	//>>> var x1 = 10;  when i changed this amount to simply '10' it no longer travelled the entire width and got stuck in a single bar onthe far left. BUT this is potentially interesting for having a little poltergeist or ghosting of a coding runnin over a small section of an image.....
	
	// original code was >>> var x1 = 10;
	
	
  var y1 = 10; // this changes the top y axis margin of where it starts to repeat the image. if you don't want a bar of the normal image, you make this number smaller. 500, causes it to change the image much lower down. 

  var x2 = round(x1 + random(-20, 5)); // you can bias it to move more left then right, but not having these numbers equal -aka -25, 5
  var y2 = round(y1 + random(-2, 2));
	
	 //var x2 = round(x1 + random(5, 25)); >>not as interesting bc the source image pulls more of the shadow wall then the color
	// var x2 = round(x1 + random(25, 25)); not as interesting bc it expands drom the middle -- but also depends on the source image
	//var x2 = round(x1 + random(-7, 7)); - original numbers
  //var y2 = round(y1 + random(-5, 5));

	
  var w = floor(random(10, 40));
  var h = height-10; //this is the bottom margin of the image that won't be repeated/displaced. -300 is a lot. -10 will be next to none. I changed it to divided by 2, to try and get it to do something proportional to whatever the height of the canvas is, so i can change the height and the margin will shift in relation. 

  set(x2, y2, get(x1, y1, w, h));
}




function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (keyCode == DELETE || keyCode == BACKSPACE) {
    clear();
    image(img, 0, 100);
  }
}

//pasting in code from the kaliedescope drangndrop  -- just as a start, to try and integrate // 
DragDrop = class DragDrop {
    constructor(callback, context = document, filter = /^image/i) {
      var disable;
      this.onDrop = this.onDrop.bind(this);
      this.callback = callback;
      this.context = context;
      this.filter = filter;
      disable = function(event) {
        event.stopPropagation();
        return event.preventDefault();
      };
      this.context.addEventListener('dragleave', disable);
      this.context.addEventListener('dragenter', disable);
      this.context.addEventListener('dragover', disable);
      this.context.addEventListener('drop', this.onDrop, false);
    }

    onDrop(event) {
      var file, reader;
      event.stopPropagation();
      event.preventDefault();
      file = event.dataTransfer.files[0];
      if (this.filter.test(file.type)) {
        reader = new FileReader;
        reader.onload = (event) => {
          return typeof this.callback === "function" ? this.callback(event.target.result) : void 0;
        };
        return reader.readAsDataURL(file);
      }
    }

  };