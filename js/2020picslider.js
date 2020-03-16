checkvalue=false;
$(document).ready(function(){
    $(window).scroll(function(){
        scrollAnimation();//To animate heading Bar on scroll
        checkScrollLayer7();
});
})

// List of Functions Only
function scrollAnimation(){//For sticky header Scrolling
    var pagePosition=window.pageYOffset;
    if(pagePosition>0){
        $('.outer-cover').addClass('scrollAnimation');//BGcolor =white like
        $('.outer-cover').removeClass('removeScroll');//Rmv Bgcolor transparebt
    }else{
        $('.outer-cover').addClass('removeScroll');//Add Bgcolor transparent
    }
}