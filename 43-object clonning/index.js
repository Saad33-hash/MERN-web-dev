                                   //object clonning

//using JSON 
/*
let obj={
    name:"saad",
    age:22,
    classs:"a",
};
console.log(obj);
obj.height="5ft 6in";
console.log(obj);
let obj2= JSON.parse(JSON.stringify(obj));
obj.classs="c";
console.log(obj);
console.log(obj2);
*/



/*
//using assign method
let src={
    name:"saad",
    age:23,
    height:"5ft 6in"
};

//second src
let src2={
    level:"a",
    health:70,
};

let des=Object.assign({},src,src2);  // when i write src2 it will be conned in dest.
src.age=30;
console.log(src);
console.log(des);
*/


// using spread operator
/*
let src={
    name:"saad",
    age:22,
    height:"5ft 6in",
};

let des={...src};
src.age=40;
console.log(src);
console.log(des);
*/

//uisng itteration
/*
let obj={
name:"saad",
age:22,
height:"5ft 6in",
};
let dest={};
for(let key in obj){
    let newKey=key;
    let newValue=obj[key];
    dest[newKey]=newValue;
}
console.log(obj);
obj.height="6ft 6in";
console.log("again:",obj);
console.log("now:",dest);
*/