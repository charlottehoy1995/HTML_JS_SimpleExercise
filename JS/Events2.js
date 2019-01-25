//document.write(name)

let person = {
    name : "",
    age : "",
    occupation : ""
}

function createPerson(){
let inputName = document.getElementById("name").value;
let inputAge = document.getElementById("age").value;
let inputOccupation = document.getElementById("occupation").value;

person.name = inputName;
person.age = inputAge;
person.occupation = inputOccupation;

console.log(person);

}

function editPerson(){
let inputName = document.getElementById("name").value;
let inputAge = document.getElementById("age").value;
let inputOccupation = document.getElementById("occupation").value;
    
person.name = inputName;
person.age = inputAge;
person.occupation = inputOccupation;
    
    console.log(person);
    
    }



