let myObject = {
    name: "Name: Charlotte ", 
    Age: 23, 
    Occupation: " Occupation: Software Engineer"};

    console.log(myObject.name);
    console.log(myObject.Age);
    console.log(myObject.Occupation);

    window.alert(myFunction());
   // myFunction();

function myFunction(){
    if( 20< myObject.Age <40){
        return "Age is between 20 and 40 (true)";
    }
    else {
        return "false";
    }
}

function increaseAge(){
    console.log(myObject.Age);
    return myObject.Age++;
}