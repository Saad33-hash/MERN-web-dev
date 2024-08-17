/*
class Human{
    //properties
    age=10;
    height="6ft 6 in";
    #name="saad";
    color="brown";
    //behaviour
    walk(){
        console.log("i am walking");
    }
    sleep(){
        console.log("i am sleeping",this.#name);
    }

}
let h=new Human();
console.log(h.age);
h.walk();
// console.log(h.#name);
*/


/*
// use of setter and getter
class Human{
    age=12;
    name="saad";
    #height=50;

    walk(){
        console.log("i am walking");
    }
    run(){
        console.log("i am running");
    }
    get fetchheight(){
      return this.#height;
    }
    set modifyheight(val){
       this.#height=val;
    }
}

let obj=new Human();
console.log(obj.age);
obj.run();
console.log(obj.fetchheight);
obj.modifyheight=70;
console.log(obj.fetchheight);
*/


//use of constructor
/*
lass hero{

    //properties
        level;
        power;
       #name;
     // maming of constructor
     constructor(newLevel,newPower,newName){
        this.level=newLevel;
       this.power=newPower;
        this.#name=newName;
     }
    //behaviou
        // power(){
        //     console.log("hero is powerful");
        // }
        attack(){
            console.log("hero plays offensively");
        }
    // setter and getter
     get fetchname(){
       return  this.#name;
     }
     set modifyname(n){
        this.#name=n;
     }
    
    }
    
    let object=new hero(20,40,"saad");
    console.log(object);
    console.log(object.fetchname);
    */
    
    // usuage of constructor and printing the constructor
/*
class Hero{
    level;
    status;
    health;
    power;
    // making of constructor
    constructor(pLevel,pStatus,pHealth,pPower){
        this.level=pLevel;
        this.status=pStatus;
        this.health=pHealth
        this.power=pPower;
    }
    //behaviour
   range(){
    console.log("range is from 50 to 70");
   }
   movement(){
    console.log("can move in all directions");
   }
   attack(){
    console.log("he is an offensive player");
   }
   printDetails(){
    console.log("level:",this.level);
    console.log("status:",this.status);
    console.log("health:",this.health);
    console.log("power:",this.power);
   }
}

let saad=new Hero("a","alive",70,90);
saad.printDetails();
//printing functions
saad.range();
saad.movement();
saad.attack();

Note: if i make any value private i can still access it beacuse of working in a constructor
*/

// deafult parameters
//pass as a deafult value
/*
function sayMyName(fName,lName="tariq"){
    console.log(fName,lName);
}
sayMyName("saad");
*/

// set as a multiple paramter
/*
function sayMyName(fName="saad",lName="tariq"){
    console.log(fName,lName);
}
sayMyName();
// if i pass something it will run or if i donot pass anthing deafult values run if i pass one argument it will run and for the second one it will say undefine.
*/



// pass as an array
/*
function sayMyName(arr=["saad",1,true]){
    console.log(arr);
}
sayMyName();
*/



// pass as an object
/*
function sayMyName( fName={ 
    age:19,nam1:"saad",height:"5ft 6in",
}){
    console.log(fName);
}
sayMyName();
*/



//null and undefine case
/*
function sayMyName(fName="saad",lName="tariq"){
    console.log(fName,lName);
}
sayMyName("null","undefine");
*/