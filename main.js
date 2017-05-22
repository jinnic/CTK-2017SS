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
        scrollPos = scrollDiv.scrollTop(),
        docHeight = scrollDiv.height(),
        scrollPercentage = scrollPos / docHeight;
//        uniqueValue = scrollPercentage * (images.length),
//        opacityValue,
//        containerBG = $("#container").css("background-color");

    
//    if(docWidth<=768 && containerBG === "rgb(0, 0, 0)"){
//        
//        uniqueValue = scrollPercentage * 1.2 * images.length;
//        for (var i = 1; i <= images.length; i++) {
//             opacityValue = i - uniqueValue;
//            $(images[i-1]).css("opacity", opacityValue);
//            console.log(containerBG);
//        }
//    }else{
//        uniqueValue = scrollPercentage * (images.length + 1);
//        for (var i = 1; i <= images.length; i++) {
//             opacityValue = i - uniqueValue;
//            $(images[i-1]).css("opacity", opacityValue);
//            console.log('uniqueVal: ' + uniqueValue);
//            console.log('scrollPos: ' + scrollPos);
//            console.log('docHeight: ' + docHeight);
//        }
//    }
    
    
            console.log('scrollPos: ' + scrollPos);
            console.log('docHeight: ' + docHeight);
    
//    $(window).scrollTop() + $(window).height() === $(document).height() && $(window).width() > 992 && $(document).scrollTop(0);
    
};

/*

var fadeScroll = function(){
    
    $('section').each(function(){
        
    }); 
};
*/






$(document).ready(function(){
    $("#scrollContainer").scroll(function(){
        fadeOnScroll();
        var p = $(".scroll-image:first").position();
        console.log("first scroll-image is at : " + p.top);
        
    });

    $(".trans-image").click(function(){




        $('.modal-body').append('<div id="video"> <video src="video.mp4" controls> Sorry, your browser doesnt support embedded videos, but dont worry, you can <a href="videofile.webm">download it</a> and watch it with your favorite video player!</video> </div>');
     
     });

      $(".close").click(function() {
        $("#video").remove();
      });
});

// $("#scrollContainer").on("scroll", function () {
//    
//    fadeOnScroll();
//      
//     $('video').each(function(){
//        if ($(this).is(':in-viewport')) {
//            $(this)[0].play();
//            console.log("video in viewport");
//        } else {
//            $(this)[0].pause();
//            console.log("video NOT in viewport");
//        }
//    });
////     console.log($("#container").css("background-color"));
//});


 
//$(document).ready( function(){
//   
//});