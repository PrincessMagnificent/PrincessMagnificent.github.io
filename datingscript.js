/*datingscript.js for datingSkillFeed.html*/

console.log("begin RUNNING\n.\n.\n.");
function butonKlikd() {
    console.log("Butn wuz klikd.");
    console.log(results.innerHTML);
}

/*Add an event listener waiting for the WINDOW to LOAD, and when that happens, it triggers our function*/
window.addEventListener("load", function() {
    
    console.log("the PAGE has been LOADED");
    var results = document.getElementById("results");
    var searchBtn = document.getElementById("searchBtn");
    console.log(searchBtn);
     /*And now we listen for the CLICK event by attaching an EventListener to our SearchBtn variable*/
    searchBtn.addEventListener("click", butonKlikd);
  
});