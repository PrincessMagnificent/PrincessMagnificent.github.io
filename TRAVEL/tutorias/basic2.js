console.log("JavaScript operatonal!");

var name;
var mairu;

/*
// Store
localStorage.setItem("lastname", "Smith");
// Retrieve
document.getElementById("result").innerHTML = localStorage.getItem("lastname"); 
*/


function getMyStuff(fn, mail) {
    //obtains the First Name and Mail forms from the html
    console.log(fn);
    console.log(mail);
    
    /*var target = document.getElementById("target");
    
    var myString = "Thank you, " + fn + " whose email is " + mail;
    
    target.innerHTML = myString;*/
    
    recordMyStuff(fn,mail);
    extractMyStuff();
    
}

function recordMyStuff(fn, mail) {
    localStorage.setItem("namae",fn);
    localStorage.setItem("mairu",mail);
    
}

function extractMyStuff() {
    name = localStorage.getItem("namae");
    mairu = localStorage.getItem("mairu");
    console.log("retrieved " + name + " & " + mairu + " from localStorage");
}

function forgetMe() {
    console.log("clicked FORGET ME");
}

function init() {
    
    extractMyStuff();
    
    if (name != "null") {
        console.log(name + " already exists!")
        var myDiv = document.getElementById("target");
        myDiv.innerHTML = "Welcome back, <a href='" + mairu + "'>" + name + "</a>";
        myDiv.setAttribute("class", "targetclass");
        
        
    } else {
        console.log("I don't know your name right now.");
    }
    
    var forgetButton = document.getElementById("forgetButton"); 
    forgetButton.onclick = handleForgettButton;
}

function handleForgettButton() {
    localStorage.clear();
    console.log("localStorage.clear;");
    init();
}

window.onload = init;

el = document.querySelector("hr");
color = window.getComputedStyle(el).getPropertyValue("border-top-color");
console.log(color);