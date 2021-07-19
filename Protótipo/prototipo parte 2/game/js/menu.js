function resume(number, questionNumber)
{
    if(number == 3)
    {
        var numberString = questionNumber.toString();

        var y = document.getElementById(numberString);
        y.style.display = "none";   

        var x = document.getElementById("answerButton1");
        x.style.backgroundColor = "";

        var x = document.getElementById("answerButton2");
        x.style.backgroundColor = "";
        
        var x = document.getElementById("answerButton3");
        x.style.backgroundColor = "";

        var x = document.getElementById("answerButton4");
        x.style.backgroundColor = "";   
        
        document.getElementById("hint").style.display = "none";
        document.getElementById("tip").style.display = "none";   
        document.getElementById("resumeGame").style.display = "none";   
    }
    else if(number == 2)
    {
        var y = document.getElementById("tipBox" + questionNumber);
        y.style.display = "none";
    }
    else {
        var x = document.getElementById("pauseMenu");
        x.style.display = "none";
    }   
}

function reset()
{
    var x = document.getElementById("pauseMenu");
    var y = document.getElementById("screen");
    x.style.display = "none";
}

function exit()
{
    me.state.change(me.state.MENU);
}