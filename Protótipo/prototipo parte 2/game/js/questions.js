function showQuestion(number) {    
    var numberString = number.toString();

    var a = document.getElementById(numberString);
    a.style.display = "block";
}

function reviewAnswer(isCorrect, id) {
    if(isCorrect)
    {        
        var x = document.getElementById(id);
        x.style.backgroundColor = "#2E8B57";

        var y = document.getElementById("resumeGame");
        y.style.display = "block";
    }
    else{
        var x = document.getElementById(id);
        x.style.backgroundColor = "#DC143C";   
        
        var z = document.getElementById("tip");
        z.style.display = "block";
    }
}

function showTip() {
    resume(3);   
    var z = document.getElementById("tipBox");
    z.style.display = "block";
}
