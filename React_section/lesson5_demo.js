let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";

person.sayName = function() {
  console.log(this.name);
};


//Can be rewritten using object literal notation
let person = {
name: "Nicholas",
age: 29,
job: "Software Engineer",
sayName() {
  console.log(this.name);
  }
};


/*When a property is explicitly added to an object, Configurable, Enumerable and Writable are set to true while the Value attribute is set to the assigned value.*/

// Example :

let person = {
  name: "Nicholas"
};


//Object.defineProperty() method
let person = {};
Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicholas"
});
console.log(person.name); // "Nicholas"
person.name = "Greg";
console.log(person.name); // "Nicholas"

let customer={
  first_name:"Naya",
  lasta_name:"Martin",
  phone:"0857162863"
};

//Constructor initialising three fields:

class Buffer {
constructor() {
  this.size = 0;
  this.capacity = 4096;
  this.buffer = new Uint8Array(this.capacity);
  }
}

//new instance field of syntax of new javascript
class Buffer {
size = 0;
capacity = 4096;
buffer = new Uint8Array(this.capacity);
}

// ---------------------------------------
//EMPTY OBJECT CREATION

//with object construction method
let user0=new Object();
//with object literal method
let user1={};

//adding properties
let user2={
  name:'John', //property:value,
  age:30,
  "likes birds":true
}

// console.log(user.like birds); o/p-> gives SyntaxError: missing ) after argument list = dot notaqtion doesnt work with multiword property name
console.log(user2["likes birds"]) //o/p-> true
delete user2["likes birds"]
// console.log(user2.name)
// console.log(user2.age)
user2.isAdmin-=true;
console.log(user2.isAdmin)

//deleting properties
delete user2.age
console.log(user.age) //o/p-> undefiened

//iterating through values of the object
for (let key in user2){
  // console.log(key)
  console.log(user2[key])
}

const user3={
  name:"Matt",
  sizes:{
    height:185,
    width:50,
  },
  sayHi:function(){
    console.log("Hello there!");
    console.log(this.name);
    console.log(user3.name);
  } //sayHi(){ } also works
}


user3.sayHi();
console.log(user3.sizes.height)
user3.age=25;
console.log(user3.age)