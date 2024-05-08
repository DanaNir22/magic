//The setup function only happens once
var salut=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
   //an RGB color for the canvas' background
  //circle
  stroke(255,150,150);// an RGB color for the circle's border
  strokeWeight(2);
  fill(mouseX,255,130,200); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),30,30); // center of canvas, 20px dia
  fill(93,173,226);
  strokeWeight(3);
  rect(mouseX-20,mouseY-20,45,45);
  fill(70);
  stroke(25,170,200);
  textSize(salut);
  textFont('Garamond');
  text('Welcome:)',200,250);
  stroke(243,156,18)
  line(40,salut,450,salut)
}

function mousePressed(){

  if (salut>=100){
    salut=0;
}else{
  salut=salut+5;
}
}