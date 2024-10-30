/// Document object Model (DOM)
const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2")
console.log(view2);

view1.style.display = "flex";
view2.style.display="flex";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
evenDivs[4].style.backgroundColor = "purple";

for(let i=0;i<evenDivs.length;i++){
    evenDivs[i].style.width="150px";
    evenDivs[i].style.backgroundColor="Green"
}

const navText = document.querySelector("nav h1");
console.log(navText)
navText.textContent = "Hello world";

const navBar = document.querySelector("nav");
navBar.innerHTML = '<h1> Raghul </h1> <p> good morning</p>';
console.log(navBar);


//Syntax
//addEventListeners(event, function, useCapture)


/* const doSomething = () => {
    alert("doing something");
};
h2.addEventListener("click",doSomething,false);
h2.removeEventListener("click",doSomething,false); */




document.addEventListener("readystatechange",(event) => {
    if(event.target.readyState === "complete"){
        console.log("complete")
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 = div.querySelector("h2");

    view.addEventListener("click",(event) => {
        
        view.style.backgroundColor = "purple";
    })

    div.addEventListener("click",(event) => {
        
        div.style.backgroundColor ="black";
    })

    h2.addEventListener("click",(event) => {
        
        event.target.textContent ="subscribed."
    })
}

// Web storage API ==> Application Programming Interface....
//refer some websites....

//--------------------------------------------------

//Module... 