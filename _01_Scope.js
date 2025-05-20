// Global Scope:Variables and functions which is declared in the global scope are visible from anywhere


var x =  "Hello,Global Scope"

function global(){
    console.log(x);
}

global();

// Function Scope: a scope that is cretaed when a function is declared,
// variables and functions Only visible within that function

function example1(){
    var fs = "Hello,Function"
    console.log(fs);
}
example1();

// console.log(fs); Buradan fs i cagirmaayiz cunku fs function icinde tanimlandui.


// Block Scope: refers to visibility of variables and funtions within a block of code.
// And those are acceesible only from this block

function example2(){
    if(true){
        let bv = "GreatStack"
        console.log(bv)
    }
}
example2();


























