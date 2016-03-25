/*skrypt.js*/

$(document).ready(function() {
    'use strict';
    //The following is paper.js boilerplate.
    //The first line installs paper.js in the global scope
    //The second line attaches Paper.js to the canvas, and prepares Paper.js for drawing.
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    
    // TODO
    var d = Shape.Circle(200, 200, 50);
    //circle(x,y,radius)
    d.fillColor = 'white';
    var step = 60;
    var c;
    for(var x=step/2; x<400; x+=step) {
        for(var y=step/2; y<400; y+=step) {
            c = Shape.Circle(x, y, (step/2.3));
            c.fillColor = 'green';
        }
    }
    
    
    
    paper.view.draw();
    //this last line actually draws
    
    console.log('main.js loaded');
});