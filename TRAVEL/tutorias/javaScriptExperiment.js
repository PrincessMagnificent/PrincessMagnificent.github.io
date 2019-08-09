console.log("JAVASCRIPT ONLINE");

var access = document.getElementById("call");

var code = access.innerHTML;

console.log(code);

code = "";

for (var x = 0; x < 20; ++x) {
    code = code + makePhrases() + " | ";
}

console.log(code);

access.innerHTML = code;
access.setAttribute("class", "font-weight-bold"); //successfully added the font weight bold class

/*we solved the problem of the DOM not existing yet by simply moving the script to the bottom of the page
but there is another path

do window.onload = theWholeFunction;

and then function theWholeFuncton() {}*/







var test10 = null;
var test11 = undefined;
console.log(typeof test10);
console.log(typeof test11);













/*
// just having fun with javascript

var x = 10;
var y = 10;
alert("x + y");

alert(makePhrases());

console.log("true && true");
console.log(true && true);
console.log("true || false");
console.log(true || false);
console.log("true || true");
console.log(true || true);
console.log("false || false");
console.log(false || false);

*/function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];
    
    //some adding to an array
    words1.push("immersive");
    words1.push("social");
    words2.push("market-related");
    words2.push("instaced");
    words3.push("operation");
    words3.push("challenge");
    
    
    var rand1 = Math.floor(Math.random() * words1.length);
    var rand2 = Math.floor(Math.random() * words2.length);
    var rand3 = Math.floor(Math.random() * words3.length);
    var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
    
    return phrase;
}
/*
for (var x = 20; x > 0; x--) {
    console.log(makePhrases());
}

// object

var ThisObjectHere = {
    name: "Johnson",
    race: "human",
    age: 13,
    face: "long"
};

console.log(ThisObjectHere.age + ThisObjectHere.race);
console.log(ThisObjectHere);  */