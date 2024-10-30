//JavaScript Object Notation(JSON):-
// text format
// to send and receive data in many programming languages...

/* const myObj ={
    name : "Raghulkumar",
    content : ["Earn","Grow","Give"],
    sub: function(){
        console.log("Thank You...!!")
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.sub();

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
 */
//Errors and Error handling....

"use strict";

const makeError = () => {
    try{
        const name = "Raghul";
        name = "Kumar";

    }catch(err){
        console.error(err);
        console.warn(err);
        console.table(err);
    }
};

makeError();

