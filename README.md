# MMP210
var  redX = 55,
 redY = 75;

var  greenX = 55,
  greenY = 175;

var blueX = 55,
 blueY = 275;

var linecolor;

var sY1 = 420; 
var sY2= 440;
var sY3 = 470;
var sX = 20;
var X = 80;


function setup() {
  createCanvas(windowWidth,windowHeight)
 fill(255,0,0);   
ellipse(redX, redY, 50, 50);
    
 fill(0,255,0);   
ellipse(greenX, greenY, 50, 50);
    
    
     fill(0,0,255);   
ellipse(blueX, blueY, 50, 50);
    
    strokeWeight(1);  
line(sX, sY1, X , sY1);
strokeWeight(4);  
line(sX, sY2, X , sY2);
strokeWeight(10); 
line(sX, sY3, X , sY3);

    noStroke();
 strokeWeight(1);
}
    

    
function draw() {
  if (mouseIsPressed && mouseX > 150) {
     // alert(linecolor);
      if (linecolor == "red")
          {
            stroke(255, 0, 0);
            }
    else if (linecolor == "green")
    {
        stroke(0, 255, 0);
    }
       else if (linecolor == "blue")
    {
        stroke(0, 0, 255);}
      
  } else {
   noStroke();
  }
   line(mouseX, mouseY, pmouseX, pmouseY);
} 

function mousePressed(){
var dred = dist(mouseX, mouseY, redX, redY);
var dgreen= dist(mouseX, mouseY, greenX ,greenY); 
    var dblue= dist(mouseX, mouseY, blueX ,blueY);

    
    if (dred < 25 ) {
        linecolor= "red";
    }
        
        else if (dgreen < 25)
            
        {
            linecolor= "green";
    }
     else if (dblue < 25)
            
        {
            linecolor= "blue";
    }
    
    if (mouseX > sX && mouseX < X && mouseY > sY1-10 && mouseY < sY1+ 10 ){strokeWeight(1)}
    else if (mouseX > sX && mouseX < X && mouseY > sY2-10 && mouseY < sY2+ 10 ){strokeWeight(4)}
     else if (mouseX > sX && mouseX < X&& mouseY > sY3-10 && mouseY < sY3 + 10 ){strokeWeight(10)}
    
   
}


