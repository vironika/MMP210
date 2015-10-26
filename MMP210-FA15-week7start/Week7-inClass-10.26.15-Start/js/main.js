//global variables

function setup(){
    //create the canvas. put into a variable to associate with a element
    var cnv = createCanvas(800,3000);
    cnv.parent("windows");

    var myArray = [];
    for(var i=0; i<10000; i++){myArray[i] = i;
                           }
    console.log(myArray);

    for(var i=0; i < myArray.length; i++)
    {myArray[i] += 10;

    }
    console.log(myArray);

//    console.log(myArray[0]);
//    console.log(myArray[1]);
//    console.log(myArray[2]);
//     console.log(myArray);
//     console.log("myArray", myArray);

}//end setup

