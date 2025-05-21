const person = {
    firstName : "Elon",
    lastName : "Musk",
    age : 35
}

console.log(person);
console.log(person.lastName);

// update

person.firstName = "Mr. Elon"
console.log(person.firstName);
console.log(person);


// add

person.company = "Tesla";
console.log(person)


// delete

delete person.age;
console.log(person);


// Nested Object

const person1 = {
    firstName : "Elon",
    lastName : "Musk",
    age : 35,
    adress : {
        street : "Road23",
        city : "New York"
    }
}

console.log(person1.adress.city);



for (let prop in person1){
    console.log(prop);
}

for (let prop in person1){
    console.log(person1[prop]);
}

//

const person2 = new Object();

person2.firstName = "Ali";

console.log(person2.firstName);





