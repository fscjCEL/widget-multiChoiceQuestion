// This file should be used to insert any custum javascript into the page.
var clickRevealMethod = {
    revealHandler:function(){
    var getThisElement,theElementIWantTOReveal;
    getThisElement = this.getAttribute("data-reveal-ID");
    //grab that matching element
    theElementIWantTOReveal = document.getElementById(getThisElement);
    //if it's visible (show), if not then (hide).
    if(theElementIWantTOReveal.className === "theReveal is-invisible"){
        theElementIWantTOReveal.className = "theReveal";
    }else{
        theElementIWantTOReveal.className = "theReveal is-invisible";
    }
    //end if
}//end function
};//end click reveal method

var clickRevealHeaders = document.getElementsByClassName("clickButton");
for(var xz=0;xz<clickRevealHeaders.length;xz++){
    clickRevealHeaders[xz].addEventListener("click",clickRevealMethod.revealHandler,"false");
}//end for
var multiChoiceMethod = {
    revealAnswer:function(){
        //the element variable represents the element that was clicked on.
        var element = this;

        if (element.classList.contains("correct")){
            var theFeedback = document.getElementById("feedbackReveal-1");
            if (theFeedback.classList.contains("is-invisible")){
                theFeedback.classList.remove("is-invisible");
            }//endif'
            element.classList.remove("cel-answer");
            element.classList.add("cel-answer-is-correct");
        }else{
            element.classList.remove("cel-answer");
            element.classList.add("cel-answer-is-incorrect");
            alert("That answer was not correct, please try again...");
            element.removeEventListener("click",multiChoiceMethod.revealAnswer,false);
        }//endifThenElse


    } //end function
}; //end method
var multiChoiceQuestion = document.getElementsByClassName("cel-answer");
for(var zz=0;zz<multiChoiceQuestion.length;zz++){
    multiChoiceQuestion[zz].addEventListener("click",multiChoiceMethod.revealAnswer,"false");
}//end for