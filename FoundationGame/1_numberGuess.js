( function(){
    console.log("JAVASCRIPT INITILIZED...");
    
    var mysteryValue = 5;
    var playerGuess = 0;
    
    // input and output fields
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");
                                        
    // button behavior
    var button = document.querySelector("button");
    button.style.cursor = "crosshair";
    button.addEventListener("click", workingFunction, false);
    
    function workingFunction() {
        playGame();
    }
    
    function playGame() {
        playerGuess = parseInt(input.value);
        //notice PARSEINT. Causes the input to be interpretd as a number and not as a string or something like that, which would displease me
        console.log("Parsed guess successfully! It was " + playerGuess);
        
        if (playerGuess > mysteryValue) {
            output.innerHTML = "TOO HIGH, aim lower";
        }
        else if (playerGuess < mysteryValue) {
            output.innerHTML = "too low, AIM HIGHER";
        }
        else if (playerGuess === mysteryValue) {
            output.innerHTML = "YESSSSSSSSSS";
        }
        //This right now gives you a victory if you input a non-number such as a letter. Because it's not either higher or lower. Bummer.
    }
}());
