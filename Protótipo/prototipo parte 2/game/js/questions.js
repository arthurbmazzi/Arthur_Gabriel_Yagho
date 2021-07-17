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
    var y = document.getElementById("gameMenu");
    y.style.display = "none";

    var x = document.getElementById("answerButton1");
    x.style.backgroundColor = "";

    var x = document.getElementById("answerButton2");
    x.style.backgroundColor = "";
    
    var x = document.getElementById("answerButton3");
    x.style.backgroundColor = "";

    var x = document.getElementById("answerButton4");
    x.style.backgroundColor = "";
}