//click each event
$("ul").on("click", "li", function (e) { 
    $(this).toggleClass("crossline");
});

//delete button
$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500,function(){$(this).remove();});
    e.stopPropagation();
})

//handle input
$("input[type='text'").keypress(function(e){
    if(e.which == 13){
        var content = $(this).val();
        if(content.length == 0) return;
        //creat new li to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+content+"</li>");
        $(this).val("");
    }
})

//plus button
$(".fa-plus").on("click", function(){
    $("input[type='text'").fadeToggle();
})