// var a=12;
// if(a>10){
//     a=30
//     b=5
//     console.log(a);

// }console.log(a);
// console.log(b);

// let block scope
// var global scope

// function hello(){
//     console.log("Heloo user");

// }
// hello();
// function sum(x,y,z){
//     return (x+y+z);
// }
// const result=sum(10,12,13);
// console.log(result);

// spreading
const Person = {
  name: "Akesh",
  age: 21,
};

// }
// const newPerson=Person;
// newPerson.age=30;
// console.log(Person);
// console.log(newPerson);

const newPerson = { ...Person, city: "gzb" };
const newPerson2 = { ...Person, name: "ayush" };
newPerson.age = 35;
console.log(Person);
console.log(newPerson);
console.log(newPerson2);

const emp = ["Def", 45, 100000];
console.log(emp);

const emp1 = [...emp];
console.log(emp1);

const emp2 = [...emp, "JKL"];
console.log(emp2);
