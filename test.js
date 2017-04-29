
var scrollContainer_totalHeight = 0;

$(document).ready(function() {

	var totalScrollImageHeight =function(){
		scrollContainer_totalHeight = 0;
		$("#scrollContainer > div.scroll-image").each(function(){
			scrollContainer_totalHeight += $(this).height();
		});
		console.log("Total height of all divs: "+scrollContainer_totalHeight);
	}


	$(window).scroll(function() {
    //         	var video = $('video');
    //         	var videoY = video.offset();
    			
    			fadeOnScroll();

				// $( "#demo2" ).html( "Vertically: " + LBy.top + "px" );
				// console.log("#myDiv scrolling!!!");

			      $('video').each(function(){
			       if ($(this).is(':in-viewport')) {
			           $(this)[0].play();
			           console.log("video in viewport");
			       } else {
			           $(this)[0].pause();
			           console.log("video NOT in viewport");
			       }
			  	});

			    // console.log("WINDOW scrolling!!!");
			    // checkScroll();
			});

	var fadeOnScroll = function () {
	    var images = [".image01",".image02",".image03",".image04",".image05"];
	    
	    totalScrollImageHeight();
	    
	    var docWidth = $(document).width(),
	        scrollPos = $(window).scrollTop(),
	        docHeight = $(document).height(),
	        scrollPercentage = scrollPos / scrollContainer_totalHeight,
	        uniqueValue = scrollPercentage * (images.length),
	        opacityValue,
	        containerBG = $("#container").css("background-color");
	    

	    
	   if(docWidth<=768 && containerBG === "rgb(0, 0, 0)"){
	       $("#scrollContainer").css("min-height",50*images.length+"vh");
	       for (var i = 1; i <= images.length; i++) {
	            opacityValue = i - uniqueValue;
	           $(images[i-1]).css("opacity", opacityValue);
	           // console.log(containerBG);
	           console.log("fast scroll");
	       }
	   }else{

	       for (var i = 1; i <= images.length; i++) {
	            opacityValue = i - uniqueValue;
	           $(images[i-1]).css("opacity", opacityValue);
	           // console.log('uniqueVal: ' + uniqueValue);
	           // console.log('scrollPos: ' + scrollPos);
	           // console.log('docHeight: ' + docHeight);
	           console.log("SLOW scroll");
	       }
	   }
	    
	    
	            // console.log('scrollPos: ' + scrollPos);
	            // console.log('docHeight: ' + docHeight);
	    
	//    $(window).scrollTop() + $(window).height() === $(document).height() && $(window).width() > 992 && $(document).scrollTop(0);
	    
	};
});

