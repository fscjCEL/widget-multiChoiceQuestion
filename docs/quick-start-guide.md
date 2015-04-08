#FSCJ Learning Object Boilerplate
##Quick Start Guide

###Introduction

This boilerplate is intended for use by front end web developers who work in education and need a platform to deliver accessible content that is device agnostic, standards compliant, and well tested. 

In order to use this template effectively, you should be proficient enough in HTML, CSS and Javascript to read and modify what is already in place. 

NOTE: All the elements seen in the quick start guide have been put together as an example for you to use in the Learning Object Demo Located [HERE...](http://cel.fscj.edu/LO-dev/CEL-LO-mark2-demo-SME/index.html) So feel free to check it out, and don't forget to *view source*.

###Overall Structure
When you download the full framework you will find that it is one Learning Object filled with 30 slides. The NAV elements are all located at the top inside the "**CEL-navElements-container**."

Below that are TWO audio player elements listed one after the other as "**mediaGroup**"(s.)
Next is the Help Panel. Customize it to your heart's content.

Under that you will find each of 30 slides.

We preloaded the Learning Object with 30 slide because it is faster and less error prone, when authoring, to delete extra slides than it is to create them when you start. 

Keep in mind that if you fill 16 slides with content, you need to delete the remaining blank slides, AND delete the same amount of the corresponding nav elements.  **The Nav elements must match the slides.** 

####- The Audio Player

Instructors may want to include an audio file to accompany the content of some, or all, of the slides. The Learning object senses if there is a media player for that slide, and only displays it of one exists. 

Take a look at the media player elements. They are all grouped after the nav elements in the nav element container. 

Here is an example...

	<!-- ============================================= Slide 1 Media Player ============================= -->
	<div class="mediaGroup clearfix">
		<p class="CEL-mediaTitle">Audio</p>
		<audio id="slide1Media" class="hidden" title="CEL-audioFile">
			<!-- These sources have to point to the separate files.  -->
			<source src="media/testAudio-1.mp3" type="audio/mp3">
			<source src="media/testAudio-1.ogg" type="audio/ogg">
			<embed src="media/testAudio-1.mp3">
		</audio>
		<div  class="CEL-mediaButton play"><img src="img/playButton.png" alt="play audio button"></div>
		<div  class="CEL-mediaButton pause"><img src="img/pauseButton.png" alt="pause audio button"></div>
	</div><!-- end mediaGroup --> 
	
This is the media player for slide 1. To make a media player for slide 7, copy/paste this bit of code after the other media player elements, and change the ID of the audio element to "slide7Media". Next, make sure your audio files are in the media folder, and that the names of the files match the src attribute (path) located in the  source element.

If your audio files are named slide7MP3File.mp3 and slide7OGGfile.ogg your media player would look like this...  

	<!-- ============================================= Slide 7 Media Player ============================= -->
	<div class="mediaGroup clearfix">
		<p class="CEL-mediaTitle">Audio</p>
		<audio id="slide7Media" class="hidden" title="CEL-audioFile">
			<!-- These sources have to point to the separate files.  -->
			<source src="media/slide7MP3File.mp3" type="audio/mp3">
			<source src="media/slide7OGGfile.ogg" type="audio/ogg">
			<embed src="media/slide7MP3File.mp3">
		</audio>
		<div  class="CEL-mediaButton play"><img src="img/playButton.png" alt="play audio button"></div>
		<div  class="CEL-mediaButton pause"><img src="img/pauseButton.png" alt="pause audio button"></div>
	</div><!-- end mediaGroup -->

**WARNING/Caveat**: This Learning Object loads all the audio when the page is initially loaded. Filling your Learning Object with an audio file per slide WILL EFFECT THE LOADING SPEED IN A NEGATIVE WAY. 

We are working on a progressive loading audio player in [the next version of the learning object](https://github.com/fscjCEL/mark3LO). Until then, adding audio is a give and take situation between performance, and features. 
 
###Layout Tools

There are many different ways in which you can layout content in an attractive way. If you are a front end web designer you are probably familiar with the various flavors of grid systems, and bootstraps that utilize grid systems for layout. 

We chose not to use any of those grid systems because they require a level of design knowledge that is often beyond the skill-set of the person who is inserting content. 

In other words, we made a layout system for people who have no idea about design principles, and who understand code just enough to "make it work." 

####Let's get down to it...

**NOTE:** Feel free to copy/paste these code snippets to use in your own LO.

#####- To make ONE row that spans the whole content area (100%)

	<div class="CEL-1col-100">
		<h3>One Hundreds</h3>
		<p>This content spans all the way across the page.</p>
	</div><!-- end 100 -->

#####- To make a row with *two columns* (Left 50% | Right 50%)
	<div class="CEL-2col-50-a">
		<h3>Fifty</h3>
		<p>This is the LEFT Column that spans halfway across the content area</p>
	</div> <!--end 50-a -->
	
	<div class="CEL-2col-50-b">
		<h3>Fifty</h3>
		<p>This is the RIGHT Column that spans halfway across the content area</p>
	</div><!--end 50-b -->
	
#####- To make a row with *two columns* using the golden ratio (Left ~60% | Right ~40%)
	<div class="CEL-2col-60-a">
		<h3>Sixty</h3>
		<p>This is the LEFT Column that spans approximately 60% across the content area</p>
	</div> <!--end 60-a -->
	
	<div class="CEL-2col-40-b">
		<h3>Forty</h3>
		<p>This is the RIGHT Column that spans approximately 40% across the content area</p>
	</div><!--end 40-b -->
	
#####- To make a row with *two columns* using the golden ratio *reversed* (Left ~40% | Right ~60%)
	<div class="CEL-2col-40-a">
		<h3>Forty</h3>
		<p>This is the LEFT Column that spans approximately 40% across the content area</p>
	</div> <!--end 40-a -->
	
	<div class="CEL-2col-60-b">
		<h3>Sixty</h3>
		<p>This is the RIGHT Column that spans approximately 60% across the content area</p>
	</div><!--end 60-b -->

####- To make a row that has *3 columns* (Left 33% | Middle 33% | Right 33%)

	<div class="CEL-3col-30-a">
		<h3>Thirty</h3>
		<p>Three Columns each of which is 33% wide.</p>
	</div> <!-- end 30-a -->
	
	<div class="CEL-3col-30-b">
		<h3>Thirty</h3>
		<p>Each Column can hold text, images, lists...</p>
	</div> <!-- end 30-b -->
	
	<div class="CEL-3col-30-c">
		<h3>Thirty</h3>
		<p>The Columns will hold as much content as you wish.</p>
	</div> <!-- end 30-c -->
####- To make a row that has *4 columns* (Left 25% | Middle Left 25% | Middle Right 25% | Right 25%)

	<div class="CEL-4col-25-a">
		<h3>Twenty Five</h3>
		<p>Four Columns each of which is 25% wide.</p>
	</div><!-- end 25-a -->
	
	<div class="CEL-4col-25-b">
		<h3>Twenty Five</h3>
		<p>Each Column can hold text or images.</p>
	</div><!-- end 25-b -->
	
	<div class="CEL-4col-25-c">
		<h3>Twenty Five</h3>
		<p>The Columns will hold as much content as you wish.</p>
	</div><!-- end 25-c -->
	
	<div class="CEL-4col-25-d">
		<h3>Twenty Five</h3>
		<p>This is the last Column.</p>
	</div><!-- end 25-d -->
	
####- The Divider (*if your boxes are acting funny*)

One of our main goals was to incorporate each HTML element's natural behavior. That is why we created the divider element. Sometimes rows break when you start mixing and matching containers. If your rows are bleeding into each other, put this element in between them to keep things tidy. 

	<div class="CEL-divider"></div><!-- end divider -->
####- The Print Header

The print header is a styled header you may optionally include at the top of the slide.

	<div class="CEL-printHeader clearfix">
		<img class="printHeaderColorBar" src="img/CEL-coloredBar.jpg"  alt="Slide print header color bar">
		<img class="printHeaderImage" src="img/CEL-header-background.jpg"  alt="Slide print header image">
		<h1 class="printHeaderHeader">Content Layout Options</h1>
	</div><!-- end printHeader --> 

You will need to provide two additional graphics for the print header. One is the color bar, and the other is an accent graphic.

To change the background color of the print header, go to the second setting in the Color Controls section in the CSS. 

###Changing Colors/Branding

Since we needed to use this learning object in many different courses, we chose to make it easily brand-able. To achieve this we added the relevant styles to the top of the CSS. 

	/* ==================== Color Controls.  */
	
	/* Changes the color of the main header, and the color of the text */ 
	.CEL-LO-Page-header{background-color: #000000;color: #FFFFFF;}
	
	/* changes the color of the print header if there is any  */
	.CEL-printHeader{background-color: #333;}
	
	/* change out the main background graphic  */
	body{background-image: url(../img/CEL-mainBackground.png);}
	
	/* change the navigation button default color */
	.CEL-navElement{background-color: #ededed;}
	
	/* change the navigation button's hover state color */
	.CEL-navElement:hover{background-color: #fdfdfd;}
	
	/* change the navigation button's visited slide color */
	.CEL-pastSlide{background-color: #777;}
	
	/* change the navigation button's current slide state color */
	.CEL-currentSlide{background-color: #FF0201;}
	
	/* Fill in the blank quesiton styles. */ 
	.CEL-questionBlank{background-color: #bbcff6;}
	.CEL-questionBlank:hover{background-color: #bbcff6;}
	


###Adding Widgets

You will find an example of each widget in the [Demo](http://cel.fscj.edu/LO-dev/CEL-LO-mark2-demo-SME/index.html) on slides 3-7. 

I will be expanding this explanation more in the future, but for now suffice it to say most components have an HTML element, with CSS attached, and JS controlling it's behavior. 

Examine the HTML code carefully, follow the class names to the CSS class, then check the main JS script for the named JS functions to include. As a general rule you will find that most of these require a unique ID to function. 

Each component, be it HTML, CSS or Javascript, is well documented within the code so you can follow along easily enough. 


## Example Workflow

This Learning Object template has been used in over 75 online courses so far, and we have tweaked our workflow for speed. 

Our team is made of Instructional Designers who feed us content from Subject Matter Experts. We then take that content and put each module into distinct learning objects. On the multimedia side of the CEL we have a graphic artist/designer, a web developer, and multimedia professional. All of which help during this process. You may have your own team members, or you may be alone, but either way this process should scale to whatever size team you have. 

1. Choose your colors. We use the [Adobe Kuler Website](https://kuler.adobe.com/create/color-wheel/) so all we have to do is choose a primary color that represents the course content best, then work off of that.

2. Tweak the graphics to match the color scheme. 

3. Go into the CSS file (css/style.css) Color Controls Section, and change the color to reflect your chosen color palette. 

4. Go into the main HTML file(index.html) and change the Title Element to reflect the name of your course. (or anything you might want to title it.)

5. In the HTML file go to CEL-LO-Page-header. Change the Course Number and Course Name. This is your main header so you are open to follow any convention you want. It's just the main Module header, and you want to keep in mind that it disappears after you leave slide one. 

6. Save everything, and put is aside to use as your course branded learning object template. 

7. Duplicate the template. Name it according to your naming convention of choice. We use Course#-Module#. (ex. MAR3803-M1)

8. Prepare any slide/content level graphics you may have. Copy them into that module's img folder. 

9. Prepare any audio files you may have recorded. Make both an MP3 file, and an OGG file, and copy those into that module's media/ folder. 

10. Now open the index.html file. Add any media players you would like to include. 

11. Begin adding content. Start with slide one. We add a print header first, then we add our paired row containers (cel-2col-60-a and cel-2col-40-b). Add content to the containers. 

12. Keep going until you have no more content. 

13. Delete whatever remaining empty slides you may have.

14. Delete the same amount of Nav Elements to match how many slides you have. 

15. Save and Repeat. 