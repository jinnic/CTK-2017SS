
var scrollContainer_totalHeight = 0;



$(document).ready(function() {

	/*
		set video volume
	*/

	$("video").prop("volume", 0.2);

	// $('video').each(function(){
			       
	// 		           $(this).volume = 0.4;
	// 		           console.log("video volume : "+$(this).volume);

	// });

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
		// console.log("Total height of all divs: "+scrollContainer_totalHeight);
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
			           // $(".trans-image:first").css("top",0 + "vh");
			       }
			  	});

			  	if ($('#about').is(':in-viewport')) {
			  		console.log("about in viewport");
			  	}else{
			  		console.log("about NOT in viewport");
			  		$(".trans-image:first").css("top",0 + "vh");
			  	}

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
	           // console.log("fast scroll");

	           // console.log('uniqueVal: ' + uniqueValue);
	           // console.log('scrollPos: ' + scrollPos);
	           // console.log('scrollPercentage: ' + scrollPercentage);
	           console.log("opacity of image 4 "+$(images[3]).css("opacity"));
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
	           // console.log("SLOW scroll");
	       }
	   }
	    
	    
	            // console.log('scrollPos: ' + scrollPos);
	            // console.log('docHeight: ' + docHeight);
	    
	//    $(window).scrollTop() + $(window).height() === $(document).height() && $(window).width() > 992 && $(document).scrollTop(0);
	    
	};

	// Scroll down to ABOUT page

	$(".about").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#about").offset().top},
	        'slow');
	});

	// Scroll back to TOP
	$(".back").click(function() {
	    $('html,body').animate({
	        scrollTop: $("#container").offset().top},
	        'slow');
	});

	/*
		when trans-image is clicked add video modal and hide carousel
	*/
	$(".trans-image").click(function(){
		$("#carouselEx").hide();
		$(".album").hide()

        $('.modal-body').append('<div id="videoFull"> <video src="video.mp4" controls autoplay> Sorry, your browser doesnt support embedded videos, but dont worry, you can <a href="videofile.webm">download it</a> and watch it with your favorite video player!</video> </div>');
     	/*
		set video volume
		*/
     	$("video").prop("volume", 0.2);
     });

	/*
		when  video modal is closed remove video and show carousel
	*/

	$('#modal-fullscreen').on('hidden.bs.modal', function (e) {
		if($("#videoFull")){
			$("#videoFull").remove();
			$(".carousel-item").remove();
			$(".cards").remove();
		}
		 
		 
		 $(".album").hide();
		 $("#carouselEx").show();
		 $("#modal-fullscreen").css({
			"background-image": "url(image/SlideBG.svg)"
		});
	});


	// $(".collection").click(function(){ 

	// });


	var collectionImg = ['image/ctk_01_C.jpg','image/ctk_01_C.jpg','image/ctk_01_C.jpg','image/ctk_02_C.jpg','image/ctk_02_C.jpg','image/ctk_02_C.jpg','image/ctk_03_C.jpg','image/ctk_03_C.jpg','image/ctk_03_C.jpg'];

	$(".collection").click(function(){ 
		$("#modal-fullscreen").css({
			"background-image": "none"
		});

		$("#carouselEx").hide();
		$(".album").show();

	  for(var i=0 ; i< collectionImg.length ; i++) {
	    // $('<div class="card" style="background: url('+collectionImg[i]+'); background-size: 100% 100%; background-repeat: no-repeat;"></div>').appendTo('.row');
	    $('<div class="cards" ><img src="'+collectionImg[i]+'"></div>').appendTo('.row');
	  }



	  $(".cards").click(function(){ 
		// console.log($(this).children().attr("src")+" image CLICK");
		// var imageSrc = $(this).children().attr("src");
		// var res;
		// res = imageSrc.slice(0,-2);
		// console.log(res);
		// $(this).children().attr('src',res);
		$(this).children().toggleClass('transition-active');
		// var a = $('<div class="transition"><img src="'+collectionImg[0]+'"></div>').appendTo('.row')
		// $(a).toggleClass('transition-active');

		});


	});

	
	


	/*
		when sImage is clicked append carousel-item by click event id
	*/


	$(".sImage").click(function(){ 
		console.log(this.class + "image CLICK");
		$(".album").hide()
	// console.log(this.id);
		switch(this.id){
			case "sImage01":
			var imgData = ['image/ctk_01.jpg','image/ctk_01.jpg','image/ctk_01.jpg'];
			break;

			case "sImage02":
			var imgData = ['image/ctk_02.jpg','image/ctk_02.jpg','image/ctk_02.jpg'];
			break;

			case "sImage03":
			var imgData = ['image/ctk_03.jpg','image/ctk_03.jpg','image/ctk_03.jpg'];
			break;

			case "sImage04":
			var imgData = ['image/ctk_01.jpg','image/ctk_01.jpg','image/ctk_01.jpg'];
			break;

			case "sImage05":
			var imgData = ['image/ctk_02.jpg','image/ctk_02.jpg','image/ctk_02.jpg'];
			break;
		}


	  for(var i=0 ; i< imgData.length ; i++) {
	    $('<div class="carousel-item"><img class="d-block img-fluid" src="'+imgData[i]+'"></div>').appendTo('.carousel-inner');

	  }
	  $('.carousel-item').first().addClass('active');
	  $('#carouselEx').carousel({
	    interval: 2500
	  });
	});
	

	/*
		when ca is clicked add video modal and hide carousel
	*/

	// $('#modal-fullscreen').on('hidden.bs.modal', function (e) {
	//      $(".carousel-item").remove();
	//      $(".card").remove();
	//   });
});

