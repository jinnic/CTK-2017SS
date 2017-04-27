// JavaScript Document
var fadeOnScroll = function () {
    var images = [".image01",".image02",".image03",".image04",".image05"];
    
    /*
    var docWidth = $(document).width(),
        scrollPos = $(window).scrollTop(),
        docHeight = $(document).height(),
        scrollPercentage = scrollPos / docHeight,
        uniqueValue = scrollPercentage * (images.length),
        opacityValue,
        containerBG = $("#container").css("background-color");
    */

    var docWidth = $(document).width(),
        scrollDiv = $("#scrollContainer"),
        scrollPos = scrollDiv.scrollTop,
        docHeight = scrollDiv.height,
        scrollPercentage = scrollPos / docHeight,
        uniqueValue = scrollPercentage * (images.length),
        opacityValue,
        containerBG = $("#container").css("background-color");

    
    if(docWidth<=768 && containerBG === "rgb(0, 0, 0)"){
        
        uniqueValue = scrollPercentage * 1.2 * images.length;
        for (var i = 1; i <= images.length; i++) {
             opacityValue = i - uniqueValue;
            $(images[i-1]).css("opacity", opacityValue);
            console.log(containerBG);
        }
    }else{
        uniqueValue = scrollPercentage * (images.length + 1);
        for (var i = 1; i <= images.length; i++) {
             opacityValue = i - uniqueValue;
            $(images[i-1]).css("opacity", opacityValue);
            console.log('uniqueVal: ' + uniqueValue);
            console.log('scrollPos: ' + scrollPos);
            console.log('docHeight: ' + docHeight);
        }
    }
    
//    $(window).scrollTop() + $(window).height() === $(document).height() && $(window).width() > 992 && $(document).scrollTop(0);
    
};

/*

var fadeScroll = function(){
    
    $('section').each(function(){
        
    }); 
};
*/

 $(window).on("scroll", function () {
    
    fadeOnScroll();
      
     $('video').each(function(){
        if ($(this).is(':in-viewport')) {
            $(this)[0].play();
            console.log("video in viewport");
        } else {
            $(this)[0].pause();
            console.log("video NOT in viewport");
        }
    });
//     console.log($("#container").css("background-color"));
});


 
//$(document).ready( function(){
//   
//});