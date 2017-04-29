
/*
    function myFunction() {
    var elmnt = document.getElementById("myDIV");
    // var p = document.getElementById("demo");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
    //var windowY = document.window.scroll;
    // var py = p.scrollTop
    document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
    // document.getElementById ("demo2").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + py + "px";

}
*/


function noscroll() {
  $('#myDIV')[0].scrollTo(0,0);
  console.log("back to 0,0");
}


// Remove listener to disable scroll
//window.removeEventListener('scroll', noscroll);

function checkScroll(){
	var myDiv = $("#myDIV"),
		myDivScrolled;


	myDivScrolled = myDiv.scrollHeight - myDiv.scrollTop === myDiv.clientHeight;
	console.log(myDivScrolled);
}


(function($) {
         $(document).ready(function() {

         	

         	$(function(){
			    var totalHeight = 0;
			    $("#myDIV > div").each(function(){
			        totalHeight += $(this).height();
			    });
			    console.log("Total height of all divs: "+totalHeight);
			});


			$('#myDIV').bind('scroll', function(){

				$('video').each(function(){
			       if ($(this).is(':in-viewport')) {
			           $(this)[0].play();
			           console.log("video in viewport");
			       } else {
			           $(this)[0].pause();
			           console.log("video NOT in viewport");
			       }
			  	});

		    	var elmnt = $("#myDIV");
				var lastBox = $("#content2 ");
				var x = elmnt.scrollLeft();
				var y = elmnt.scrollTop();
				var LBy = lastBox.offset();

				last_known_scroll_position = elmnt.scrollTop();

				// var video = $('video');
			//         	var videoY = video.position();


				$( "#demo" ).html(  "last_known_scroll_position " + last_known_scroll_position + "px" );

				// $( "#demo2" ).html( "Vertically: " + videoY.top + "px" );
				// console.log("#myDiv scrolling!!!");	
		      if($(this).scrollTop() + $(this).innerHeight()>=$(this)[0].scrollHeight)
		      {
				 $(this).css("overflow", "hidden");
			  }
		    })

          /*
          	$( "#myDIV" ).scroll(function() {
				var elmnt = $("#myDIV");
				var lastBox = $("#content2 ");
				var x = elmnt.scrollLeft();
				var y = elmnt.scrollTop();
				var LBy = lastBox.offset();

				last_known_scroll_position = elmnt.scrollTop();

				// var video = $('video');
    //         	var videoY = video.position();


				$( "#demo" ).html(  "last_known_scroll_position " + last_known_scroll_position + "px" );

				// $( "#demo2" ).html( "Vertically: " + videoY.top + "px" );
				// console.log("#myDiv scrolling!!!");
				
				checkScroll();

			});
		*/
	
            $(window).scroll(function() {
    //         	var video = $('video');
    //         	var videoY = video.offset();


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
         });
}(jQuery));