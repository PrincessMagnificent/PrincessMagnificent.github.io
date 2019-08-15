/*view is our object for displaying the state of the game on the screen
view doesn't need to know anything about what the state of the game is, just displayit

*/

var view = {
    //methods of the object 'view'

    //msg is the string of the message we want to display in the message area
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};


var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    //an array of three ships (objects), each of which IS AN OBJECT with both location and a check for whther that location has been gehitted
    ships: [{
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        },
        {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        },
        {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }],

    fire: function (guess) {
        //check each of the three ships with the for loop
        for (var i = 0; i < this.numShips; i++) {
            var currentShip = this.ships[i];
            var currentLocations = currentShip.locations;
            //indexOf() returns the index of a match in the array if it exists, or it returns -1 if no match is found
            var index = currentLocations.indexOf(guess);
            if (index >= 0) {
                currentShip.hits[index] = "hit";
                view.displayHit(guess);
                if (this.isSunk(currentShip)) {
                    this.shipsSunk++;
                    view.displayMessage("YOU SUNK MY BATTLESHIP!! (" + this.shipsSunk + ")");

                }
                return true;
            }

        }
        view.displayMessage("YOU MISS");
        view.displayMiss(guess);
        return false;

    },

    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false;
            }
            //f there's a location that doesn't have a hit, then the ship is stil floating, so return false.
        }
        return true;
    }
};


var controller = {
    guesses: 0,
    processGuess: function (guess) {
        var location = controller.parseGuess(guess);
        if (location) {
            this.guesses++;
            var hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    },

    parseGuess: function (guess) {
        // this gets a guess from the player in a certain format (like A2) and transltes t into a guess we can work with, like 02, and makes sure it's valid at all
        var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

        if (guess === null || guess.length !== 2) {
            alert("Oops, please enter 1 letter and 1 number on the board.");
        } else {
            var firstChar = guess.charAt(0);
            var row = alphabet.indexOf(firstChar);
            //this translates A into 0, B into 1 and so on
            var column = guess.charAt(1);

            if (isNaN(row) || isNaN(column)) {
                alert("You have reached beyond the board.");
            } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
                alert("You have extended too far and fallen off the board.");
            } else {
                return row + column; //we have concatenated the two strings
            }
        }
        return null;
    }

};

function init() {
    var fireButton = document.getElementById("fireButton"); //id of the firebutton div
    fireButton.onclick = handleFireButton; //Then we can add a click handler function named handleFireButton to the button.
    
    var guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyButton; // now we're making a button on keyboard handler in case you push enter instead of clicking fire, so we need a handlekeyButton() function alongside our handleFireButton() function
}

function handleFireButton() {
    // code to get the value from the form
    console.log("FIREBUTTON CLICKED");
    var guessInput = document.getElementById("guessInput");
    var guess = guessInput.value;
    guess = guess.toUpperCase();
    console.log("INPUT = " + guess);
    
    controller.processGuess(guess);
    guessInput.value = "";

}



function handleKeyButton(e) {
    var fireButton = document.getElementById("fireButton");
    if (e.keyCode == 13) {
        fireButton.click();
        return false; //we don't need to do anything else
    }
} //e is the key pressed, the handler passes key press events

window.onload = init; //we want the browser to run init when the page is fully loaded



//*TESTING AREA*//

