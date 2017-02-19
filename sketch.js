var q = 40;
var c1 = '#875f9a';
var c2 = '#db5A6b';
var c3 = '#7a942e';
var c4 = '#48929b';
var c5 = '#ffa631';
var c6 = '#c91f37';
var c7 = '#ffb61e';

function setup() {
  createCanvas(800,800);
  frameRate(8);
}

function esagono1(x, y, raggio, npunti) {
  var angle = TWO_PI / npunti;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * raggio;
    var sy = y + sin(a) * raggio;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function esagono2(x, y, raggio, npunti) {
  var angle = TWO_PI / npunti;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + sin(a) * raggio;
    var sy = y + cos(a) * raggio;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {

 /* 
 var temp1 = frame(10);
 var temp2 = frameCount(20);
 
 var currentTime = frameCount();
  
 if (currentTime() >= temp2) {background('#875f9a');}
 else if (currentTime <= temp1) {background('#ffb61e');}
 */
 
noFill();
 
if(random()<0.5) { background('#7765E3');}            //c1
  else if(random()>0.5) { background('#ffb61e');}     //c7
  else if(random()>0.25) { background('#48929b');}    //c4
  else if(random()<0.25) { background('#7a942e');}    //c3
  else if(random()<0.75) { background('#ffa631');}    //c5
  else if(random()>0.75) { background('#db5A6b');}    //c2
  else if(random()>=0.33) { background('#c91f37');}   //c6

  //quad(x1,y1,x2,y2,x3,y3,x4,y4);

  for(var x=0; x<900; x+=40) {
    for(var y=0; y<900; y+=40) {
 
strokeWeight(1);

if (mouseIsPressed) {
  esagono2(x,y,20,6);}
  else {
    esagono1(x,y,20,6);
}
 
if(random()<=0.25) {fill(c1);}
  else if(random()<=0.33) {fill(c2);}
  else if(random() <=0.5) {fill(c3);}
  else if(random()<=0.75){fill(c4);}
  else if(random()<=1){fill(c5);} 
  else if(random()<=1.33)fill(c6);} 

  }
}