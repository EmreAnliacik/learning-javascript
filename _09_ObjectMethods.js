const person5 = {
    firstName : "Elon",
    lastName : "Musk",
    greet : function greet(){
        console.log("Hello")
    }
}

person5.greet();





// this keyword

const person6 = {
    firstName : "Elon",
    lastName : "Musk",
    greet : function greet(){
        console.log("Hello"+ this.firstName)
    }
}

person6.greet();



























