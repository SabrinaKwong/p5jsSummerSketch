let img;
let myFont;
var acceleration = 0.0099;
var nDrops = 1200;
var drops = [];

function preload() {
  img = loadImage('assets/plant.png'); //plant image
  img2 = loadImage('assets/waterstout.png'); //waterstout
  myFont = loadFont('assets/font/ChocoLetter.otf');

}

function setup() {
  createCanvas(670, 750);

  for (i = 0; i < nDrops; i++) {
    drops.push(new Drop());
  }
  capture = createCapture(VIDEO);
  capture.hide();

}

function draw() {

  background(45, 95, 200);
  drops.forEach(function(d) {
    d.drawAndDrop();
  });
  plant();
  plant2();
  strokeWeight(2);
  image(img, 150, 280);
  image(img2, 0, 0);


  fill('#FFFFF');
  textFont('Georgia');
  textSize(1 + (mouseX / width) * 22);
  text("Dear Self,", 50, 200);

  text('I am strong, smart, and sucessful.', 100, 250);

  text('I am climbing onward and upward.', 100, 300);

  text('I stand strong in my beliefs and dreams.', 100, 350);

  text('I am up for the challenge.', 100, 400);

  text('I believe in myself.', 100, 450);

  fill('#ED225D');

  textFont(myFont);
  textSize(36);
  text('Affirmations for Growth', 50, 50);

  var aspectRatio = capture.height / capture.width;
  var h = width * aspectRatio;
  image(capture, 170, 530, width / 2.5, 170);

  //Click for rain and Growth
  if (mouseIsPressed) {
    stroke(255);
  } else {
    noStroke();
  }

}

function plant() {
  //drawplant();
  //plant

  for (var r11 = 0; r11 < 10; r11++) {
    stroke(45, 87, 47, 20);
    strokeWeight(2);
    if (frameCount <= 600) {
      triangle(30, 55, 58, 20, 86, 75);
    }
    if (frameCount > 700) {
      triangle(30, 55, 58, 20, 86, 75);
    }
    noStroke();
  }

  push();
  fill(245, 187, 87);
  translate(480, 400);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 600) {
      ellipse(0, 20 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 500) {
      triangle(50, 95, 78, 30, 90, 80);
    }
    rotate(PI / 3);
  }
  pop();
}



function plant2() {
  //drawplant();

  //plant
  for (var r11 = 0; r11 < 10; r11++) {
    stroke(45, 87, 47, 20);
    strokeWeight(1);
    if (frameCount <= 500) {
      triangle(30, 55, 58, 20, 86, 75);
    }
    if (frameCount > 700) {
      triangle(30, 55, 58, 20, 86, 75);
    }
    noStroke();
  }

  push();
  fill(245, 187, 87);
  translate(120, 400);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    if (frameCount <= 500) {
      ellipse(0, 20 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      triangle(50, 95, 78, 30, 90, 80);
    }
    rotate(PI / 3);
  }
  pop();
}


//Raindrops
function Drop() {
  this.initX = function() {
    this.x = random() * width;
  };
  this.initY = function() {
    this.y = -random() * height / 3; // Initialise rain somewhat off the screen
  };

  this.initX();
  this.y = random() * height;

  this.length = random() * 9;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
  };
}
