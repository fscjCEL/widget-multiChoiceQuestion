#FSCJ Learning Object Boilerplate 

##(Mark 2 Final)

This is the latest stable/tested version of the FSCJ Learning Object. 

##Our Mission

Here at the Center for eLearning we are in the business of making courses for the Web. We have a team of instructional designers that work with subject matter experts to build the content for each course. Understandably, content is often delivered to us in a format that cannot be rendered using a web browser. For example, Powerpoint files, Word files, photoshop files, and such.

As a reaction to that we put all of our content into our web based learning object. This ensures all of our content complies with existing web standards, is accessible, 508 compliant, and is as future proof as we can make it. To make the production workflow run smooth, our development team has made the learning object into template form. We built in design features, and various plug-ins that assist with teaching each lesson.

##Responsive Design

We do our best here at the Center for eLearning to make sure that our content is consumable by each student who experiences our courses. We also want to make sure that it looks good, and is as future proof as possible. With that in mind, our goal for the learning object was a lofty one…device agnosticism.

To achieve our goal we turned to a responsive design development pattern. With a little forethought this has allowed us to deliver to our core audience, remain device agnostic, and retain all of our accessibility all in one fell swoop. Now, the same bit of code works across most devices, both mobile and desktop, and is resolution independent.Try it…take your browser window and resize it. Our design adapts & adjusts based on the width of your browser window. During the design process with make little tweaks to the typography, and sizes of things so the content looks good, and is consumable, at any device resolution.

##The Plug-ins

While working with the ID's and SME's we found that many of the requests for features started to form a pattern. Things like multiple choice, and true false questions started popping up everywhere. Tabbed interfaces, and styled tables were the norm. We analyzed the patterns and came up with plug-ins that we can implement in the template very quickly.

##Accessibility Features

- All of our content can be viewed even with no javascript or CSS attached.

- Applied WAI-ARIA roles to elements suggested in the standard.

- Hidden "skip navigation" link for use with screen reader.

- Liberal use of the alt tag on each img elements

- All Content is section 501/508, ARIA approved standard HTML

- No use of structural elements to contain content.

- We use semantic HTML(not semantic CSS Classes)

- All video's contain downloadable transcripts.

- Standard navigation scheme on each slide.

- Hidden links in each Nav element that lead to the main content area of the slide

##Note to Developers

This Learning Object is presented on an "as is" basis. If you "stay within the lines" then you are taking advantage of all of our testing. 

We tested this code on as many devices as we could get our hands on...Mobile, Tablet, and Desktop. PC, Mac, Linux, iOS, and Android. I suggest you use our CSS classes, HTML structures, and JS because we did everything for a reason. The code might not be the most elegant, or the more beautiful, but it has been tested, and WORKS. 

Local copies of Normalizer, Modernizer, and jQuery are included, but feel free to replace them with the most current version.

Link to the Google font I used in the demo...[Lato](http://www.google.com/fonts/specimen/Lato) 

###We Used [HTML5 Boilerplate](http://html5boilerplate.com/)
This Learning Object was made on top of the [HTML5 Boilerplate](http://html5boilerplate.com/). 

Much credit goes to the HTML5 Boilerplate developers for providing a solid base upon which to work, BUT keep in mind that **you should review your code before deployment to make sure you DELETE all the "Extra" CSS classes that are included in this template**.
We chose to leave all the extra CSS classes in the code because we chose not to assume any use case scenarios. Just remember to audit your css before you deploy to avoid CSS Bloat. 

##Docs

We are working right now to provide good Docs for this, but they are not complete. We are working feverishly to complete the developer documentation as soon as possible. 

###Until Then...

You have two resources available to you. 

1. [The Quick Start Guide wiki page](https://github.com/fscjCEL/learningObjectFinal/wiki). A copy of the file is also included with each download. (Look for the "quick-start-guide.md" located in the root directory.)

2. The [Learning Object Demo](http://cel.fscj.edu/LO-dev/CEL-LO-mark2-demo-SME/index.html) -   All of the tested features, and layout examples are located inside the demo. Examine the page's source for any examples you might need. 

Cheers.

Ian Vanhoof
Lead Developer
FSCJ Center for eLearning
ian@fscj.edu 
