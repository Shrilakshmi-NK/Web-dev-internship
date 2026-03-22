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