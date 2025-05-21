function greet(){
    console.log("Hello")
}
greet();

// PARAMETERS AND ARGUEMENTS

function greet1(firstName, lastName){
    console.log("Hello "+firstName+" "+lastName)
}

greet1("Emre","Anli")

// DEFAULT PARAMETERS

function sum(x,y = 3){
    console.log(x+y);
}

sum(1);


// FUNCTION RETURN

function add(a,b){
    return a+ b;
}

console.log(add(10,30));















