function setup() {
    //create the Canvas

    createCanvas(windowWidth, windowHeight);
    background(50,56,59);
var x = 200;
    var y =100;

drawWindow(){}
     strokeWeight(10);
  stroke('black');
  fill('');
  rect(x-30,y-30,360,460);


  //inside box
  strokeWeight(10);
  stroke('white');
  fill('blue');
  rect(x,y,300,400);

    strokeWeight(20);
    stroke('white')
    line(x+150, y, x+150, y+400);
    line(x, y+200, x+300, y+200);



}

//  strokeWeight(4);
//  stroke('peru');
//  line(65,70,65,70+150);
//  var x = 65+(125-30)/2;
//  line(x,70,x,70+150);
//  x = 65+(125-30);
//  line(x,70,x,70+150);
//
//  line(65,70,x,70);
//  line(65,70+150/2,x,70+150/2);
//  line(65,70+150,x,70+150);


