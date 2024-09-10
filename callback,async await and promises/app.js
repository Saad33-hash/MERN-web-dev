// console.log("one");
// console.log("two");
// console.log("three");

/* Asynchronous Programming */
/*
console.log("first");
console.log("second");

setTimeout(() => {
    console.log("hello");
}, 4000);
console.log("three");
console.log("four");
*/

/*                 callback          */
/*
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sum){
    console.log(a+b);
}
calculator(1,2,sum);
*/

          /*  callback in asynchronous way */
/*
let hello=()=>{
    console.log("hello");
}
setTimeout(hello,3000);
*/

                  /* nesting  */      
                  /*        
for(let a=0;a<5; a++){
    for(let b=0;b<=5;b++){
        console.log(b);
    }
    console.log(a);
}
    */

//printing the above code in a single line
/*
for(let a=0;a<5; a++){
    let str="";
    for(let b=0;b<=5;b++){
        str=str +b;
    }
    console.log(str);
}
    */
 
/* getdata */
/*
function getdata(DataID){
    console.log("data:",DataID);
}
getdata(1323);
*/

// getdata in arrow function
/*
function getdata(dataID){
  setTimeout(()=>{
    console.log("data",dataID);
  },3000);
}
getdata(12345);
*/

// if we want delays:we will use callbacks
/*
function getdata(dataid,getnextdata){
 setTimeout(()=>{
    console.log("data",dataid);
    if(getnextdata){
        getnextdata();
    }

   }  ,3000 );
}
   call backhell:nesting call backs
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4)});
    })
});
*/


/*
function getdata(dataid){
    setTimeout(()=>{
        console.log("data",dataid);
    },3000);
}
getdata(1);
getdata(2);
getdata(3);  // at the time of exceution when function is called all the detdata function starts executing
*/
  //if we want delays?will use callbacks
  /*
function getdata(dataid,getnextdata){
    setTimeout(() => {
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    }, 3000);
}
//call back hell not considered a good practise to write code so we counter them promises.
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4);
        })
    })
});

*/
// promises in Javascript
/*
let promise = new Promise((resolve,reject)=>{
    console.log("saad");
})
*/


// basics of promises
/*
function getdata(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
           resolve("success");
            if(getnextdata){
getnextdata();
            }
        },5000);
    });
}
getdata(123);

*/
//rejection of promises
/*
function getdata(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           // console.log("data",dataId); we didnt send any data
           //resolve("success");
           reject("error");
            if(getnextdata){
getnextdata();
            }
        },5000);
    });
}
getdata(123);
*/
  // promise.then() & promise.catch()
  /*
  let getpromise=()=>{
    return new Promise((resolve,reject)=>{
console.log("i am promise");
// resolve("success");
reject("promise rejected");  
})
  }
let promise=getpromise();
  promise.then((res)=>{
    console.log("promise fullfilled");
  })
  promise.catch((err)=>{
    console.log("promise rejected");
  })
    */


// promise chaning
/*
function aSync(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          console.log("saad");
          resolve("success");  
        }, 5000);
    })
}
function aSync2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
          console.log("saad");
          resolve("success");  
        }, 5000);
    })
}
let p1=aSync();
p1.then((res)=>{
console.log("pomise ok",res);
let p2=aSync2();
p2.then((res)=>{
console.log("pomise ok",res);
})
})

*/


                        /* Promise chaning on getdata function*/
                        /*
function getdata(dataID){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("hello saad");
        resolve("success");
    }, 2000);
})
}

// compare it with callback
getdata(1).then((res)=>{
   return getdata(2);
}).then((res)=>{
return getdata(3);
}).then((res)=>{
    console.log(res);
})
    */

                          /* async await  */
                          /*
async function hello(){
    console.log("hello saad");
} 
hello();
*/

/*
function api(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
        console.log("today weather is good");
        resolve(200);
       }, 3000);
    })
}

async function getweatherdata(){
   await api();
    await api();
}
    */


// using ASYNC AWAIT On getdata function
function getdata(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataID);
        resolve(200);
        }, 3000);
       
    })
}

async function gettingvalue(){
    await getdata(1);
    await getdata(2);
    await getdata(3);
    await getdata(4);
}
