const Person={
    name:"Ayush",
    age:20,
}
const newPerson={...Person};
const newPerson1={...Person,}
newPerson.age=35;
console.log(Person)
console.log(newPerson);


