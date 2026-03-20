//For loop
for(let i=0; i <= 10; i++){
console.log(i);
}

// while loop
let count= 0;
while (count< 10){
console.log(count);
count++;
}

// do/while loop
let count1 = 0;
do{
  count1++;
  console.log("count is "+ count1);
}while(count1<10);

//Arays
let a =[];
a[0]= "zero";
a[1]="one"
a.push("three");
a.push("four");
console.log(a)

let grbceries=["Milk", "Eggs","Butter"," Salami","Juice"];

groceries[1];

for(let i=0; i<groceries.length; i++){
console.log(groceries[i]);
}

//stack-LIFO
let colors_s = new Array(); // create an array
let count_s = colors_s.push("red", "green"); // push two items
console.log(count_s); // 2

count_s = colors_s.push("black"); // push another item on
console.log(count_s); // 3

let item_s = colors_s.pop(); // get the last item
console.log(item_s); // "black"
console.log(colors_s.length); // 2



//Queue- FIFO
/*Shift() method: removes the first item in the
array and returns it, decrementing the length of
the array by one*/
let colors_q = new Array(); // create an array
let count_q = colors_q.push("red", "green"); // push two items
console.log(count_q); // 2

count_q = colors_q.push("black"); // push another item on
console.log(count_q); // 3

let item_q = colors_q.shift(); // get the first item
console.log(item_q); // "red"
console.log(colors_q.length); // 2


/*Unshift() method: adds any number of items to the front of an
array and returns the new array length*/

let colors_qs = new Array(); // create an array
let count_qs = colors_qs.unshift("red", "green"); // push two items
console.log(count_qs); // 2

count_qs = colors_qs.unshift("black"); // push another item on
console.log(count_qs); // 3

let item_qs = colors_qs.pop(); // get the first item
console.log(item_qs); // "green"
console.log(colors_qs.length); // 2