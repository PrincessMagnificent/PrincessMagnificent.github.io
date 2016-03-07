/*INPUTNOSCRIPT*/

$(document).ready(function(){
    $("#no").submit(function(){
        var result = $('input[name=numberinput]').val();
        for (var i = result; i > 0; i-=1) {
            $(".entryfield").append("<div style='margin-right:auto;display;inline-table;'></div>");
            for (var z = result; z > 0; z -=1) {
                var location = "("+z+","+i+")";
                $(".entryfield").append('<div class="item">' + location + '</div>');
            }
            $(".entryfield").append("<div style='margin-left:auto;display:inline-table;'></div>");
            $(".entryfield").append("<br>");
        }
        
        return false;
    });
});