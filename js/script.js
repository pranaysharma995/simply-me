$(document).ready(function()
                 {
    $("button.nav-button").on("click",function()
                             {
    var element=$("div.mobile-menu");
        var display=$(element).css("display");
        if(display=="none")
            {
                $(element).css("display","block");
            }
        else{
            $(element).css("display","none");
        }
})
});