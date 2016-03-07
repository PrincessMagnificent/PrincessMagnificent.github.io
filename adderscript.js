$(document).ready(function() {
    
    //On the ID Addbutton, store the input of the form.
    //then append a div with the class item that contains our variable
    $("#AddButton").click(function() {
        var toAdd = $("input[name=checkListItem]").val();
        $(".list").append('<div class="item">' + toAdd + '</div>');
    });

    //this is a generic thing. On a click of an item-class, do function() which is REMOVE THIS.
    /*$(document).on("click", ".item", function() {
        $(this).remove()
    });
    */
    
    //COPIED OFF THE NET
    //So this works.
    //Just gotta figure out why. 
    
    //The function here had "e" passed as an argument. Not sure why. Deleted it and it still wors.
    $('body').on('click','.item', function() {
        $(this).fadeOut(500,function(){
            $(this).css({"visibility":"hidden",display:'block'}).slideUp(function() {
                $(this).remove();
            });
        });
    });
    
    $("#DeleteButton").click(function() {
        $(".item").remove();
    });
    
});