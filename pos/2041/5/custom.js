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
        var element = this, theFeedback;
        var parentList = element.parentNode;

        if (element.classList.contains("correct")){
            theFeedback = element.getElementsByClassName("feedback-multi")[0];
            if (theFeedback.classList.contains("feedback-is-closed")){
                theFeedback.classList.remove("feedback-is-closed");
                theFeedback.classList.add("feedback-is-open");
                theFeedback.style.height = "auto";
            }//endif
            element.classList.remove("multi-answer");
            element.classList.add("multi-answer-is-correct");
            element.classList.add("is-cleared");
            for (var m = 0; m <= parentList.length; m++){
                console.log(parentList[m].innerHTML);
                parentList[m].removeEventListener("click",multiChoiceMethod.revealAnswer,false);
            }

        }else{
            theFeedback = element.getElementsByClassName("feedback-multi")[0];
            if (theFeedback.classList.contains("feedback-is-closed")){
                theFeedback.classList.remove("feedback-is-closed");
                theFeedback.classList.add("feedback-is-open");
                theFeedback.style.height = "auto";
            }//endif
            element.classList.remove("multi-answer");
            element.classList.add("multi-answer-is-incorrect");
        }//endifThenElse


    } //end function
}; //end method
var multiChoiceQuestion = document.getElementsByClassName("multi-answer");
for(var zz=0;zz<multiChoiceQuestion.length;zz++){
    multiChoiceQuestion[zz].addEventListener("click",multiChoiceMethod.revealAnswer,"false");
}//end for