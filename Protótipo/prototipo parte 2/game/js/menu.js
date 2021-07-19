function resume(number)
{
    if(number == 3)
    {
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
        
        document.getElementById("hint").style.display = "none";   
    }
    else if(number == 2)
    {
        var y = document.getElementById("tipBox");
        y.style.display = "none";
    }
    else {
        var x = document.getElementById("pauseMenu");
        var y = document.getElementById("screen");
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
    var x = document.getElementById("initialScreen");
    x.style.display = "block";
    var y = document.getElementById("screen");
    y.style.display = "none";
    y.style.opacity = 1;
    var z = document.getElementById("pauseMenu");
    z.style.display = "none";

}