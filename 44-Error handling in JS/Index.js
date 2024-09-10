//types of error
//complie time
/*
let a:12;  at the time of writting code i get it there is an error so they are compile time errors. I should write let a=12;
 */


/* run time error */
/*

console.log(x);
 theses are runtime error at the time of running i get to know i have to decalare x first not equal to.
 */ 

                           /* try catch and finally */
                           /*
try{
    console.log("you are inside try");
    console.log(x);
    console.log("try ends here");
}
catch(e){
console.log("first declare x");
}
*/

// example 2   
  /*    try catch finally   */
/*
let obj={
    name:"saad",
    age:22,
};
try{
console.log("you are inside try");
obj.weight=noreference;
console.log("try ends here");
}
catch(e){
    console.log("no such thing defien here");
}
finally{
    console.log("finally does not depend upon errors");
}

*/


// throw
/*
let age = 5;
if(age < 18){
    throw new Error("you are under age");
}
*/


// handling error insetad of letting the program crash
/*
let age=5;
try{
    if(age<18){
        throw new Error("you are under age");
    }
}
catch(e){
    console.log(e.message);
}
*/