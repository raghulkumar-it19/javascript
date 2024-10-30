const myName = "Raghul";
console.log(myName.charAt(Math.floor(Math.random()*myName.length)));

//if statement

let viewers ="Java full stack course";
let reply;
if(viewers){
    reply = `enjoy ${viewers}`;
}

console.log(reply);

let sample = prompt("Enter your name:-");
if (sample)
{
    console.log (sample ?? "you didn't enter your name....");

}
else{
    console.log("you didn't enter your name...");
}

//console.log(sample.trim().length);


//loops
//while loop

function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("rAGHulKumaR"));

var x=10;
var x=5;
console.log(x);

//Arrays

const myArray=[];

myArray[0] ="Raghul";
myArray[1] ="Subscribe";
myArray[2] =true;
myArray[3] = 999;

myArray1 =["false",1045,187,];

console.log(myArray1);

console.log(myArray.concat(myArray1));
console.log([...myArray,...myArray1]);


//objects
const myObj = {name:"Raghul"};
console.log(myObj);
console.log(myObj.name);

const MainObj = {
    subscriber : true,
    no : 1245,
    content: {
        learn : "JS",
        grow : "Stocks"
    },
    subdivisons:["Earn","Grow","Give"],
    action : function(){
        return `Earn by learning ${this.content.learn}`;
    }
}

console.log(MainObj.subscriber);
console.log(MainObj.no);
console.log(MainObj.subdivisons);
console.log(MainObj.subdivisons[2]);
console.log(MainObj.content);
console.log(MainObj.content.learn);
console.log(MainObj.action ());

const vehicle = {
    door : 2,
    engine : function(){
        return "vruhhhhh";
    }
}
console.log(vehicle.engine());

const car = Object.create(vehicle);
console.log(car.engine());
car.wheels = 4;
car.engine = function() { return " whooshh" };

console.log(car.door);
console.log(car.wheels);
console.log(car.engine());

const tesla = Object.create(car);
tesla.mirror = 5;
tesla.engine = function(){ return " soundless"};
console.log(tesla.door);
console.log(tesla.mirror);
console.log(tesla.engine());


const movie = {
    actor : "Vijay",
    music : "GVP",
    director : "Vetrimaaran",
    producer : "Lalit"

};

console.log(Object.keys(movie));
console.log(Object.values(movie));

for(let job in movie){
    console.log(movie[job]);
}

delete movie.producer;
for(let job in movie){
    console.log(movie[job]);
} 
 const { music: myFavMusicDirector} = movie;
console.log(myFavMusicDirector);

const{actor, music, director, producer} = movie;
console.log(actor);

//Classes....

const myPizza ={
    size : "Medium",
    crust : "Original",
    bake : function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza`);
    }
};

myPizza.bake();

class Pizza
{
    crust = "Original";
    #sauce = "tomato";
    constructor(sizePizza){
        this.size = sizePizza;
    }

    getCrust(){
        return this.crust;
    }
    setCrust(crustPizza){
        this.crust = crustPizza;
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }

}

const myPizza = new Pizza("Small");
myPizza.bake()
console.log(myPizza.crust);