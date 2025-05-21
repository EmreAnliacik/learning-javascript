//     CONDITIONAL STATEMENTS

let age = 19;
let country = "Poland"

if (age > 18 && country == "Poland"){
    console.log("You are an adult")
}
else if (age >= 16){
    console.log("You are a teenager")
}
else{
    console.log("You are Minor")
}



// SWITCH

let value1 = 42;

switch (typeof value1) {
    case "number":
        console.log("This is a number")
        break;

    case "string":
        console.log("string")
        break;

    default:
        console.log("other")
        break;
}






















