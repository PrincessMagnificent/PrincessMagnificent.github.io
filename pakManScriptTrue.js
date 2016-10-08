/*pakManScript.js

from HTML5 Game from scratch step by step learning JavaScript - Shortcut*/


/*This method is for adding the canvas TO the html with js. So we know it's in there because we created it IN our script, you see?*/
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
canvas.height = 480;
canvas.width = 640;

/*We will now load the image with all our sprites*/
mainImage = new Image();
mainImage.ready = false; /*Gonna change this to true once it's loaded, and on load it will run the function checkReady to check...if it's ready*/
mainImage.onload = checkReady();
mainImage.src = "pac.png";

function checkReady() {
    this.ready = true;
    playgame();
}

/*This will be the game loop*/
function playgame() {
    render();
}

/*here we output the content onto the canvas*/
function render() {
    context.fillStyle = "blue";
    context.fillRect = (0, 0, context.width, context.height);
    console.log("renderFunctionRan");
}

document.body.appendChild(canvas);

/*context.fillText("CLOSEtheWORLD\nOPENtheNEXT",30,150);*/

console.log("javascript executed.");