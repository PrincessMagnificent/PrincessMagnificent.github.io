/*pakManScript.js

from HTML5 Game from scratch step by step learning JavaScript - Shortcut*/

/*
var canvas = document.getElementById("canvasSpace");
var ctx = canvas.getContext("2d");*/
/*ctx will let us interact with canvas*/

/*This method is for adding the canvas TO the html with js. So we know it's in there because we created it IN our script, you see?*/
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.height = 480;
canvas.width = 640;
document.body.appendChild(canvas);

ctx.fillText("CLOSEtheWORLD\nOPENtheNEXT",30,150);

console.log("javascript executed.");