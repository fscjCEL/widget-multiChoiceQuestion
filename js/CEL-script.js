/* author : Ian Vanhoof */

/* ========================================================== 
-------------------------------------------------------------Begin Supplementary Functions Section
========================================================== */


/* NOTE: ADD ANY SUPLIMENTARY FUNCTIONS HERE */
/* ANY JQUERY SHOULD RESIDE IN THE DOCUMENT.READY FUNCTION BELOW. */



/* ========================================================== 
-------------------------------------------------------------END Supplementary Functions Section
========================================================== */


/* -------------------------------------------------------------------------------------------- begin The Document.Ready function */
$(document).ready(function(){
	
	/* this addresses a Mozilla bug that does not reset values in forms upon window.reload */
	resetForm($('form'));
	//add titles and alt tags to nav elements based on their coresponding slide headers to the whole document. 
	var howManySLIDES = $(".CEL-slide").length;
	/* Loop through each slide on the page, and add the proper classes */
	// get the slide ID and match it with the nav child number
	for (var i=0;i < howManySLIDES;i++){
		//get slide ID then throw it into an object
		var addAltSlideID = "slide"+(i+1);
		var ALTMe = document.getElementById(addAltSlideID);
		//grab the slides first header element
		var theFirstHeaderOnSlide = $(ALTMe).find("h1,h2,h3").first().text();
		//put the text from the h1 on the slide into both and alt tag and a title tag
		var navIndex = i + 1;
		$(".CEL-navElement:nth-child("+navIndex+")").attr("alt"," Slide "+navIndex+" - "+theFirstHeaderOnSlide+" ");
		$(".CEL-navElement:nth-child("+navIndex+")").attr("title"," Slide "+navIndex+" - "+theFirstHeaderOnSlide+" ");
		
	}//end for
	//bring the first slide back into view
	$("#slide1").css("opacity","1");
	var theInitialCurrentSlide = 1;
	
	/* Adding ARIA roles using JS becuase this is the prefered method as specified in the ARIA standard */
	$("body").attr("role","document");
	$("form").attr("role","form");
	$("#CEL-navElements-container").attr("role","navigation");
	$(".CEL-LO-Page-header").attr("role","banner");
	$("img").attr("role","img");
	$("ol").attr("role","list");
	$("ul").attr("role","list");
	$("li").attr("role","listitem");
	/* This adds a warning for screen readers when a link navigates away from the current page.*/
	$('a[target="_blank"]').attr("title","NOTE: This is a link that leads to an external page and opens in a different window.");
	window.location = "#top";
	
	/* ========================================================== 
	-------------------------------------------------------------Begin Supplementary jQuery Section
	========================================================== */
		
	
/* ========================================================== 
	--------------------------------------------------------------END Supplementary jQuery Section
	========================================================== */
	
	
	/* -------------------------------------------------------------------------------------------- The Button Methods */
	
	/* Listener for the slide changeing method */
	/* NOTE: this only adds the interactivity, the actual slide changeing happens in the activeSlide function */
	function navClickEvent(){
		/* collect the clicked slide number and send it off to the function that actually makes the change */
			var whatHaveIclickedOne = $(this).children("p").text();
			var theREALwhatHaveICLickedOn = parseInt(whatHaveIclickedOne);
			activeSlide(theREALwhatHaveICLickedOn);
	}/* end function */
	//gather all the elements inside the nav element container element
	var theNavElements = document.getElementById("CEL-navElements-container").children;
	
	//loop through the elements inside the nav container. Add listeners to the nav elements and the audio players. 
	for(i=0 ; i<theNavElements.length ; i++){
			/* grab the classname */
			var theElementClassname = theNavElements[i].className;
			/* if it's a navelement then add the listener */
			if (theElementClassname === "CEL-navElement"){
				
				theNavElements[i].addEventListener("click", navClickEvent, false);
			}/* end if */
			/* grab the children of each evaluated element */
			var theChildrensChildrenLOL = theNavElements[i].children;
			/* if there is more than one child... it's a media player */
			if (theChildrensChildrenLOL.length > 2){
				/* Loop through the media player children element. if its a play or pause button then add the listener. */
				for(c=0 ; c<theChildrensChildrenLOL.length ; c++){
					var theChildrensChildrensClassname = theChildrensChildrenLOL[c].className;
					if (theChildrensChildrensClassname == "CEL-mediaButton play"){
						theChildrensChildrenLOL[c].addEventListener("click", playAudio, false);
					}/* end if */
					if (theChildrensChildrensClassname === "CEL-mediaButton pause"){
						theChildrensChildrenLOL[c].addEventListener("click", pauseAudio, false);
					}/* end if */
				}/* end for */
			}/* end if */
		}/* end for loop */
	/*  These functions play and pause audio */
	function playAudio(){
			var whichAudioSlideNum = getTheCurrentSlideNumber();
			var currentSlideMediaPlayer = "slide"+whichAudioSlideNum+"Media";
			var theCorrectMediaPlayer = document.getElementById(currentSlideMediaPlayer);
			theCorrectMediaPlayer.play();
	};/* end play function */
	function pauseAudio(){
			var whichAudioSlideNum = getTheCurrentSlideNumber();
			var currentSlideMediaPlayer = "slide"+whichAudioSlideNum+"Media";
			var theCorrectMediaPlayer = document.getElementById(currentSlideMediaPlayer);
			theCorrectMediaPlayer.pause();
	};/* end pause function */
	/* This shows the navigation directions panel  */
	var theHELPButton = document.getElementById("directionsButton");
	theHELPButton.addEventListener("click", showHideHelp, false);
	function showHideHelp(){
		var canISeeTheHelpButton = $( "#nav-hide-directions" ).css("opacity");
			if (canISeeTheHelpButton == "0"){
			 	$( "#nav-directions" ).removeClass('hidden').animate({opacity: 1});;
			 	$( "#nav-hide-directions" ).removeClass('hidden').animate({opacity: 1});
			 }/* end if */
			 if (canISeeTheHelpButton == "1"){
				 $("#nav-directions").animate({opacity: 0},300,function(){$("#nav-directions").addClass('hidden');})
				 $("#nav-hide-directions").animate({opacity: 0},300,function(){$("#nav-hide-directions").addClass('hidden');})
			 }/* end if */
	};/* end function */
	/* -------------------------------------------------------------------------------------------- The Initialization Methods */
	//initially set the current slide class on the nav element
	var theNavElementContainer = document.getElementById("CEL-navElements-container");
	theNavElementContainer.children[theInitialCurrentSlide-1].className += " CEL-currentSlide";
	/* this initially stops all the sound from playing */
	var theAudioFiles = document.getElementsByTagName("audio");
	var howManyAudio = theAudioFiles.length;
	for (var c=0;c < howManyAudio;c++){
		var theName = theAudioFiles[c].getAttribute("title");
		if (theName == "CEL-audioFile"){
			theAudioFiles[c].pause();
			theAudioFiles[c].parentNode.className = "";
			theAudioFiles[c].parentNode.className = "mediaGroup clearfix hidden";
			}/* end if */
	}/* end for */
	/* Initially Show the correct media player, if it exists... builds the class of the parent sans the hidden class*/
	var theCurrentSlideMediaPlayer = "slide"+theInitialCurrentSlide+"Media";
	var theCorrectMediaPlayer = document.getElementById(theCurrentSlideMediaPlayer);
	if(theCorrectMediaPlayer){
		theCorrectMediaPlayer.parentNode.className = "";
		theCorrectMediaPlayer.parentNode.className = "mediaGroup clearfix";
	};/* end if */
	/* This initially hides the navigation directions */
	$( "#nav-directions" ).addClass("hidden").css("opacity","0");
	$( "#nav-hide-directions" ).addClass("hidden").css("opacity","0");
	window.location = "#top";
});/* end document.ready function */
/* -------------------------------------------------------------------------------------------- Functions Area */
/* This function makes sure the header is hidden on anything other than slide 1.  */
function hideTheCourseHeader(whereAmI){
	/* Make sure this is not on slide one */
	var theHeaderHeight = $(".CEL-LO-Page-header").height();
	var negHeaderHeight = -theHeaderHeight;
	if (whereAmI != 1){$(".CEL-LO-Page-header").animate({"margin-top":negHeaderHeight},300,function(){$(".CEL-LO-Page-header").addClass("hidden");});//end animate
	}else{$(".CEL-LO-Page-header").removeClass("hidden");$(".CEL-LO-Page-header").animate({"margin-top":"0"},300);}/* end if */
}/* end function */
/* ---------------------------------- This function returns the current slide # */
function getTheCurrentSlideNumber(){
	var theOne = $("#CEL-navElements-container").find(".CEL-currentSlide").children("p").text();
	var theREALONE = parseInt(theOne);
	return theREALONE;
}/* end function */
/* ---------------------------------- This function Advances the slide one slide; initiated when the N button is depressed */
function nextSlide(){
	var theCurrentSlideIS = getTheCurrentSlideNumber();
	var theRealSlideForNext = theCurrentSlideIS + 1;
	var howManySlidesForNext = $(".CEL-slide").length;
	if(theCurrentSlideIS < howManySlidesForNext){
		activeSlide(theRealSlideForNext);
	}else{
		activeSlide(1);
	}/* end if */
}/* end next slide function */
/* ---------------------------------- This function depricates the slide one slide; initiated when the N button is depressed */
function previousSlide(){
	var theCurrentSlideIS = getTheCurrentSlideNumber();
	var theRealSlideForPrevious = theCurrentSlideIS - 1;
	if(theCurrentSlideIS > 1){
		activeSlide(theRealSlideForPrevious);
	}else{
		activeSlide(1);
	}/* end if */
}/* end previous slide function */
/* ---------------------------------- This function changes the slide, and all that entails, regardless of the input method */
function activeSlide(futureSlide) {
	/* Step One Stop all audio from playing */
	var theAudioFiles = document.getElementsByTagName("audio");
	var howManyAudio = $("audio").length;
	for (var c=0;c < howManyAudio;c++){
		var theName = theAudioFiles[c].getAttribute("title");
		if (theName == "CEL-audioFile"){
			theAudioFiles[c].pause();
			theAudioFiles[c].parentNode.className = "";
			theAudioFiles[c].parentNode.className = "mediaGroup clearfix hidden";
			}/* end if */
	}/* end howManyAudio for */
	/* End Stop all audio */
	//force a click event to occur
	window.location = "#top";
	
	/* Step Two - Get the current slide # */
	var theCurrentSlide = getTheCurrentSlideNumber();
	
	/* Step three - apply past slide class to clicked NAV */
	var theNavElementContainer = document.getElementById("CEL-navElements-container");
			theNavElementContainer.children[theCurrentSlide-1].className = "";
			theNavElementContainer.children[theCurrentSlide-1].className = "CEL-navElement CEL-pastSlide";
	/* Step Fpur - hide every slide on the page */
		/* How many slide do I have? */
	var howMany = $(".CEL-slide").length;
	/* Loop through each slide on the page, and add the proper classes */
	for (var i=0;i < howMany;i++){
		var HIDEslideID = "slide"+(i+1);
		var HideMe = document.getElementById(HIDEslideID);
		$( HideMe ).addClass("hidden");
		$( HideMe ).css("opacity",0);
	}//end for
	/* Step Five - show the current slide */	
	var currentSlideID = "slide"+futureSlide;
		//grab the current slide and show again.
		var currentSlide = document.getElementById(currentSlideID);
		$(currentSlide).removeClass("hidden");
		$(currentSlide).animate({opacity: 1},300);
	/* Step Six - apply the current-slide class to the slide */
	var theNEWNavElementContainer = document.getElementById("CEL-navElements-container");
		theNEWNavElementContainer.children[futureSlide-1].className = "";
		theNEWNavElementContainer.children[futureSlide-1].className = "CEL-navElement CEL-currentSlide";
	/* Step Seven - show the music player */
	/* Show the correct media player, if it exists... */
		/* grab the media player for slide 1 */
		var currentSlideMediaPlayer = "slide"+futureSlide+"Media";
		var theCorrectMediaPlayer = document.getElementById(currentSlideMediaPlayer);
		/* If the player exists */
		if(theCorrectMediaPlayer){
			/* Then...clear the visually hidden class, and add the mediagroup and clearfix classes back on */
			theCorrectMediaPlayer.parentNode.className = "";
			theCorrectMediaPlayer.parentNode.className = "mediaGroup clearfix";
		};/* end if */
	/* Step Seven point one hide the course header*/	
	hideTheCourseHeader(getTheCurrentSlideNumber());
	/* Step Eight - reset the Window focus to redraw the DOM in Jaws */
	window.focus();
			
}/*  end activeSlide function */
/* ---------------------------------- This function resets all the forms on the page */
/* NOTE: this addresses the Firefox bug that does not reset the forms upon page reload */
function resetForm($form) {
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected').removeAttr('disabled');
}/* end reset form */
function backToTOP(){
	window.location = "#top"
};	
/* This adds the Keyboard shortcut functionality */
			shortcut.add("n",function() {
					nextSlide();
				},{
					'type':'keydown',
					'propagate':true,
					'target':document
				});
			shortcut.add("p",function() {
					previousSlide();
				},{
					'type':'keydown',
					'propagate':true,
					'target':document
				});
			shortcut.add("b",function() {
					backToTOP();
				},{
					'type':'keydown',
					'propagate':true,
					'target':document
				});
		
