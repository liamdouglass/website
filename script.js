
$(document).ready(function(){
    $(window).scroll(function(event){
        var y = $(this).scrollTop();
        if(y>=700){
            $('box1').addClass('animate');
        }
    });
});