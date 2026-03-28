//FOR LOOPS
for(i=10;i>0;i--)
{
console.log(i);
}

var j;
for (j=1; j<=20;j++){
  if (j%2){
    console.log(j+"Odd");
  }
  else{
    console.log(j+"Even");
  }
} 

//ARRAYS AND WHILE LOOPS
var myArray = ["Apple", "Orange", "Grape", "Lemon"];
var k = 0;
while(k<myArray.length){
console. log(myArray[k])
k++;
}

//DO WHILE LOOPS
do{
alert("You must be at least 1.2 meters in height to join this ride.");
var userHeight = prompt("Please enter your height.");
}
while(userHeight<1.2)
alert("Enjoy the ride!");