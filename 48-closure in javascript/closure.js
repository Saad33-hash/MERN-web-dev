/* variable scoping to understand closure

let name="tariq";
function biggerFunction(){
let name="saad"; // this variable has scope within biggerFunction paranthesis
function smallerFunction() {
    let name="rida" // this variable has scope btw 2 paranthesis of smallerfunction
    console.log(name);
}
smallerFunction();
}
biggerFunction();
*/

// code2
/*
function printOuter(){
    {
        let name="saad tariq";
    }
    function printInner(){
        console.log(name);
    }
    printOuter();  // it will print nithing on screen because name has scope only in two blocks.
}
    */


// working with closure
/*
function outerData(){
    let name="tariq";
    function innerData(){
        console.log(name);
    }
    return innerData;
}

let inner=outerData();
inner();
*/