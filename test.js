//document.getElementById("scrollContainer").onscroll = function() {
//    detactY();
//};


function detactY(){
    
    console.log("scrollContainer is on scroll" );

//    var elmnt = document.getElementsByClassName("scroll-image:first");
//    var x = elmnt.scrollLeft;
//    var y = elmnt.scrollTop;
//    //var windowY = document.window.scroll;
//    console.log("current y position of first croll-image" + y);

};


$(document).ready(function(){
    $("#scrollContainer").scroll(function(){
        detactY();
    });
});