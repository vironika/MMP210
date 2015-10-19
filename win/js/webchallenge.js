function setup() {
    //create the Canvas

    createCanvas(windowWidth, windowHeight);
    background(50,56,59);

  //top box
  strokeWeight(2);
  stroke('black');
  fill('blue');
  rect(200-30,100-40,260,40);

    strokeWeight(6);
  stroke('darkblue');
  fill('blue');
  rect(200-20,100-30,240,20);

  //inside box
  strokeWeight(1);
  stroke('black');
  fill('darkblue');
  rect(200,100,200,200);

  //bottom box
  strokeWeight(2);
  stroke('darkblue');
  fill('blue');
  rect(200-20,100+200,240,40);

      strokeWeight(6);
  stroke('darkblue');
  fill('blue');
  rect(200-10,100+210,220,20);


  fill('yellow');
    rect(210, 110, 85, 85, 30);
    rect(210+100, 110, 85, 85, 30);
    rect(210, 110+100, 85, 85, 30);
    rect(210+100, 110+100, 85, 85, 30);

   //left door
  strokeWeight(2);
  stroke('black');
  fill('blue');
  rect(200-100,100,100,200);

     strokeWeight(10);
  stroke('darkblue');
  fill('blue');
  rect(200-80,100+25,60, 65);
      strokeWeight(10);
  stroke('darkblue');
  fill('blue');
  rect(200-80,100+115,60, 65);


   //right door
  strokeWeight(2);
  stroke('black');
  fill('blue');
  rect(200+200,100,100,200);

     strokeWeight(10);
  stroke('darkblue');
  fill('blue');
  rect(200+220,100+25,60, 65);
      strokeWeight(10);
  stroke('darkblue');
  fill('blue');
  rect(200+220,100+115,60, 65);



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


