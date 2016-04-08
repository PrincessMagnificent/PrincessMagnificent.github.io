/*datingscript.js for datingSkillFeed.html*/

console.log("begin RUNNING\n.\n.\n.");

/*This function is what happens h+when the Search button is clicked, it is attached to the actual button at the bottom of the file*/
function butonKlikd() {
    console.log("Butn wuz klikd.");
    
    var hobbyField = document.getElementById("hobby");
    var hobby = hobbyField.value;
    console.log(hobby);
    
    //get GENDER, but this one is a LIST OF OPTIONs
    var genderField = document.getElementById("gender");
    /*the .selectedIndex is just numbered. The first one on the list is 0, then 1, then 2, etc going on forever*/
    var s = genderField.selectedIndex;
    console.log(s);
    var gender = genderField.options[s].value;
    var genderOption = genderField.option[s];
    /*option[s] gives us the entire html of the option, if we go .value it only gives us the value defined IN the HTML*/
    console.log("genderOption ",genderOption);
    console.log("gender ",gender);
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