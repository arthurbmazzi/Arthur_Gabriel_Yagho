function showQuestion(number) {    
    var numberString = number.toString();

    var a = document.getElementById(numberString);
    a.style.display = "block";
}

function reviewAnswer(isCorrect, id, question) {
    if(isCorrect)
    {        
        var x = document.getElementById(id);
        x.style.backgroundColor = "#2E8B57";

        var y = document.getElementById("resumeGame" + question);
        y.style.display = "block";
    }
    else{
        var x = document.getElementById(id);
        x.style.backgroundColor = "#DC143C";   
        
        var isTrueSet = (localStorage.enableTips === 'true');
        if(isTrueSet)
        {
            var z = document.getElementById("tip"  + question);
            z.style.display = "block";
        }
    }
}

function showTip(question) {
    var isTrueSet = (localStorage.enableTips === 'true');
    if(isTrueSet)
    {
        var z = document.getElementById("tipBox" + question);
        z.style.display = "block";
    }
}
