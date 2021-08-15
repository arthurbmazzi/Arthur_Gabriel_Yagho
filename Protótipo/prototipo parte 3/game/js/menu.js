function resume(number, questionNumber)
{
    if (number == 3)
    {
        var numberString = questionNumber.toString();

        var y = document.getElementById(numberString);
        y.style.display = "none";

        document.getElementById("hint").style.display = "none";
        document.getElementById("resumeGame" + questionNumber).style.display = "none";
        document.getElementById("tip" + questionNumber).style.display = "none";

        for (var i = 1; i < 21; i++)
        {
            document.getElementById("answerButton" + i).style.backgroundColor = "";
        }
    }
    else if (number == 2)
    {
        var y = document.getElementById("tipBox" + questionNumber);
        y.style.display = "none";
    }
    else {
        var x = document.getElementById("pauseMenu");
        x.style.display = "none";
    }
}

function showQuestionsBox()
{    
    var x = document.getElementById("pauseMenu");
    x.style.display = "none";

    var y = document.getElementById("emailBox");
    y.style.display = "block";
}

function disableTips()
{
    if (localStorage.enableTips === "true")
    {
        localStorage.setItem("enableTips", false);
    }
    else {
        localStorage.setItem("enableTips", true);
    }
    resume();
}

function sendEmail()
{
    var inputName = document.querySelector("#playerName");
    var inputQuestion = document.querySelector("#playerQuestion");
    window.open(`mailto:teste@hotmail.com?subject=${"Dúvida no jogo - " + inputName.value}&body=${inputQuestion.value}`);
}