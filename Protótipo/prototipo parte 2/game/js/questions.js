function showQuestion(number) {    
    var x = document.getElementById("questions");
    var y = x.contentDocument;
    
    var numberString = number.toString();

    var a = y.getElementById(numberString);
    
    x.style.display = "block"
    a.style.display = "block";
}

function reviewAnswer(isCorrect, id) {
    if(isCorrect)
    {
        var x = document.getElementById("answerButton1");
        x.style.backgroundColor = "";

        var x = document.getElementById("answerButton2");
        x.style.backgroundColor = "";

        var x = document.getElementById("answerButton4");
        x.style.backgroundColor = "";
        
        var x = document.getElementById(id);
        x.style.backgroundColor = "#2E8B57";

        var y = document.getElementById("resumeGame");
        y.style.display = "block";
    }
    else{
        var x = document.getElementById(id);
        x.style.backgroundColor = "#DC143C";        
    }
}

function resumeGame() {
    var y = document.getElementsByClassName("question");
    y[0].style.display = "none";

    var a = window.frameElement;
    a.style.display = "none";        

    var x = document.getElementById("answerButton1");
    x.style.backgroundColor = "";

    var x = document.getElementById("answerButton2");
    x.style.backgroundColor = "";
    
    var x = document.getElementById("answerButton3");
    x.style.backgroundColor = "";

    var x = document.getElementById("answerButton4");
    x.style.backgroundColor = "";   
    
    window.frameElement.parentElement.getElementsByClassName("hint")[0].style.display = "none";
}