//global variables

 var myArray = [];
 this.r = 20;

    this.d = this.r*2;


function Bubble(){


    this.x = random(width);
    this.y = random(height);
    this.r = 20;

    this.d = this.r*2;
    this.drawBubble = function(){

    ellipse(this.x, this.y, this.d, this.d );}

}


this.changeColor = function(){

    fill ("orange");
    this.drawBubble();
}

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,500);
    cnv.parent("windows");
//


    for(var i=0; i < 100; i++)
    {

        myArray[i] = new Bubble();
        myArray[i] .drawBubble();
         }
//    console.log(myArray);
//
//    for(var i=0; i < myArray.length; i++)
//    {myArray[i] += 10;}
//
//    }
//    console.log(myArray);

//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//     console.log(myArray);
//     console.log("myArray", myArray);

}//end setup

function mousePressed(){
     var d;
    for(var i=0; i < myArray.length; i++){
    d = dist(mouseX, mouseY, myArray[i].x, myArray[i].y);
     if(d < myArray[i].r) {
//     r = random(255);
//     g = random(255);
//     b = random(255);

   myArray[i].changeColor();

    console.log("mouse Pressed");
      console.log(myArray);
}
}}
