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