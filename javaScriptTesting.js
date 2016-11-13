console.log("SCRIPTLOADED");

//the remainder is within a function, specifically an "IMMEDIATE FUNCTION" to make all its variables local. So no conflict with outside variables!
//clever, no?

(function() {
   window.alert("ALART");
}());

//Note the extra () at the end there