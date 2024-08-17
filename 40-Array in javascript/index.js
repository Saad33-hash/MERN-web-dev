//creatio of object
/*
let obj = {
name:"saad",
age:22,
weight:52,
height:"5ft 6in"
};
console.log(obj);
*/

// creation of object with a function
/*
let obj={
 name:"saad",
 age:22,
 height:"5ft 6in",
 greet:function(){
    console.log("hello jee!!");
 }
};
console.log(obj);
obj.greet();
*/

// creation of arrays
/*
let arr=[1,2,3,4,5];
console.log(arr);
*/

// array constructor
/*
let brr=new Array("saad",1,true);
console.log(brr);
*/

// built in methods
/*
brr.push("ali");
console.log(brr);

brr.pop("ali");
console.log(brr);

brr.unshift("ivy");
console.log(brr);

brr.shift("ivy");
console.log(brr);

// pushing further values
brr.push("a");
brr.push("b");
brr.push("c");
console.log(brr);

// slice elements
console.log(brr.slice(2,4));
*/

//use of map
/*
let arr=[1,2,3,4,5];

arr.map((number) => {
    return number*number;
} );
console.log(ans);

*/
//use of filter
let arr=[10,12,40,50,30,11,13,1,0];
let evenArray=arr.filter((number) => {
    
if (number % 2 === 0){ 
    return true;
}
else{
    return false;
}
});
console.log(evenArray);


// typeof array
/* 
console.log(typeof(arr));
console.log(typeof(brr));
*/

// adding objects in array

let obj={
    name:"saad",
    age:21,
};
console.log("before modification");
console.log(obj);

obj.height="5ft 6in";
obj.class=13;
console.log("after modification");
console.log(obj);

// deleting from objects
let brr={
    name:"hamza",
    age:19,
    class1:12,
};
console.log("before deleting");
console.log(brr);
delete brr.age;
console.log("after deleting");
console.log(brr);


//changing properties of objects
let obj1={
    name:"saad",
    class1:12,
    age:22,
};
console.log(obj1);
obj1.age=19;
console.log(obj1);


//creating a shallow copy
let obj={
    name:"rida",
    age:25,
    status:"single",
    color:"dull",
};
console.log(obj);
// creating a shallow copy
let obj1=obj;
console.log(obj1);
// chnging something in obj
obj.name="saad";
// now again printing obj1
console.log(obj);
console.log(obj1);

//creating a deep copy
let obj={
    name:"saad",
    age:22,
    standard:3,
    status:"single",
};
// printing obj
console.log(obj);
// deep copy
let obj1=JSON.parse(JSON.stringify(obj));
// changing property of obj
obj.age=23;
//again printing obj
console.log(obj);
// now printing obj1
console.log(obj1);

//  use of find function
let arr=[1,4,52,3,9,0];
let num=arr.find(num => num > 100);
console.log(num);

// usuage of for each:perform operation on each value of array
// always use for each as an arrow function

let arr=[1,2,3,4,5,6];
let getmul=(arr) => {
    let mul=1;
    arr.forEach((value) => {
        mul=mul*value;
    });
    return mul;
};
console.log(getmul(arr));
// printing values of array using foreach
let brr=[1,4,6,8];
brr.forEach((value,index)=>{
    console.log("value=",value,"index=",index);
}
);