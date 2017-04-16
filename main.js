// JavaScript Document
var fadeOnScroll = function () {
    var images = [".image01",".image02",".image03",".image04",".image05"];
    
    
    var docWidth = $(document).width(),
        scrollPos = $(window).scrollTop(),
        docHeight = $(document).height(),
        scrollPercentage = scrollPos / docHeight,
        uniqueValue = scrollPercentage * images.length,
        containerBG = $("#container").css("background-color");

    
    if(docWidth<=768 && containerBG == "rgb(0, 0, 0)"){
        
        uniqueValue = scrollPercentage * 1.2 * images.length;
        for (var i = 1; i <= images.length; i++) {
            var opacityValue = i - uniqueValue;
            $(images[i-1]).css("opacity", opacityValue);
            console.log(containerBG);
        }
    }else{
        uniqueValue = scrollPercentage * images.length;
        for (var i = 1; i <= images.length; i++) {
            var opacityValue = i - uniqueValue;
            $(images[i-1]).css("opacity", opacityValue);
            console.log(scrollPercentage);
        }
    }
    
//    $(window).scrollTop() + $(window).height() === $(document).height() && $(window).width() > 992 && $(document).scrollTop(0);
    
};

 $(window).on("scroll", function () {
    fadeOnScroll();
//     console.log($("#container").css("background-color"));
});

