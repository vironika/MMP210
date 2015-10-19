function setup() {


    createCanvas(windowWidth, windowHeight);
    background(50,56,59);




 var x = 0;
 var y = 0;
var gridWidth = width - 100;
for (var i = 0; i < 100; i++) {
    console.log(i);


 drawWindow(x,y);


    x += 120;
    if (x > gridWidth)
    {
        x = 0;
         y+=270;}
}



function drawWindow(startX, startY){
    fill("peru");
    rect(startX, startY, 100, 250);
}}
//    fill('blue')
//    rect(startX, startY, 100,250)
//    }



//     strokeWeight(10);
//  stroke('black');
//  fill('');
//  rect(x-30,y-30,360,460);
//
//    var x = 200;
//    var y =100;
//
//
//fanction draw (){}
//  //inside box
//
//    function drawWindow(x, y){}
//
//  strokeWeight(10);
//  stroke('white');
//  fill('blue');
//  rect(x,y,300,400);
//
//    strokeWeight(20);
//    stroke('white')
//    line(x+150, y, x+150, y+400);
//    line(x, y+200, x+300, y+200);
//
//



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


