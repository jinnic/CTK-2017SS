
var scrollContainer_totalHeight = 0;



$(document).ready(function() {



	// modal

    // $(".modal-fullscreen").on('show.bs.modal', function () {
    //   setTimeout( function() {
    //     $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    //   }, 0);
    // });

    // $(".modal-fullscreen").on('hidden.bs.modal', function () {
    //   $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
    // });

    //carousel
    // $("#carouselEx").carousel();

	// finding total scroll image height

	var totalScrollImageHeight =function(){
		scrollContainer_totalHeight = 0;
		$("#scrollContainer > div.scroll-image").each(function(){
			scrollContainer_totalHeight += $(this).height();
		});
		console.log("Total height of all divs: "+scrollContainer_totalHeight);
	};


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
			           $(".menu").hide();

			       } else {
			           $(this)[0].pause();
			           console.log("video NOT in viewport");
			           $(".menu").show();
			           $(".trans-image:first").css("top",0 + "vh");
			       }
			  	});

			  	$(".left ").each(function(){
			       if ($(this).is(':in-viewport')) {
			           
			           $(".menu").hide();
			           // console.log("left in viewport");

			       } else {
			          
			           $(".menu").show();
			           // console.log("left NOT in viewport");
			           // $(".trans-image:first").css("top",0 + "vh")
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
	        //docHeight = $(document).height(),
	        scrollPercentage = scrollPos / scrollContainer_totalHeight,
	        uniqueValue = scrollPercentage * (images.length),
	        opacityValue,
	        containerBG = $("#container").css("background-color");
	    

	    
	   if(docWidth<=768 && containerBG === "rgb(0, 0, 0)"){
	       $("#scrollContainer").css("min-height",50*images.length+"vh");
	       for (var i = 1; i <= images.length -1; i++) {
	            opacityValue = i - uniqueValue;
	           $(images[i-1]).css("opacity", opacityValue);
	           // console.log(containerBG);
	           console.log("fast scroll");

	           console.log('uniqueVal: ' + uniqueValue);
	           console.log('scrollPos: ' + scrollPos);
	           console.log('scrollPercentage: ' + scrollPercentage);

	           if($(images[3]).css("opacity") <= 0){

	           	var movePos = -(uniqueValue-4)*100/2;

	           		$(".trans-image:first").css("top",movePos + "vh");
	           	console.log(movePos);
	           }
	       }
	   }else{

	       for (var j = 1; j <= images.length; j++) {
	            opacityValue = j - uniqueValue;
	           $(images[j-1]).css("opacity", opacityValue);
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

	// go to about page

	$(".about").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#about").offset().top},
	        'slow');
	});

	//back to top
	$(".back").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#container").offset().top},
	        'slow');
	});

	$(".trans-image").click(function(){
		$("#carouselEx").hide();

        $('.modal-body').append('<div id="videoFull"> <video src="video.mp4" controls autoplay> Sorry, your browser doesnt support embedded videos, but dont worry, you can <a href="videofile.webm">download it</a> and watch it with your favorite video player!</video> </div>');
     
     });

	$('#modal-fullscreen').on('hidden.bs.modal', function (e) {
		 $("#videoFull").remove();
		 $("#carouselEx").show();
	});

});

