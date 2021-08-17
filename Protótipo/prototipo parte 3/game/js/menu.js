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
    me.input.unbindKey(me.input.KEY.I);
    me.input.unbindKey(me.input.KEY.P);

    var y = document.getElementById("emailBox");
    y.style.display = "block";
}

function resumeFromEmail()
{ 
    var y = document.getElementById("emailBox");
    y.style.display = "none";

    me.input.bindKey(me.input.KEY.P,  "pause", true);
    me.input.bindKey(me.input.KEY.I, "interact");
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
    me.input.bindKey(me.input.KEY.P,  "pause", true);
    me.input.bindKey(me.input.KEY.I, "interact");

    var y = document.getElementById("emailBox");
    y.style.display = "none";

    var inputName = document.querySelector("#playerName");
    var inputQuestion = document.querySelector("#playerQuestion");
    window.open(`mailto:jogoOODevs@hotmail.com?subject=${"Dúvida no jogo - " + inputName.value}&body=${inputQuestion.value}`);
}

function EscolherDificuldade()
{
    var y = document.getElementById("escolheDificuldade");
    y.style.display = "block";
}

function setDif(number)
{
    if(number === 1)
        localStorage.setItem("dificuldade", "Fácil")
    if(number === 3)
        localStorage.setItem("dificuldade", "Difícil")

    var y = document.getElementById("escolheDificuldade");
    y.style.display = "none";

    localStorage.setItem("tipsLeft", getDicas(number));
}

function getDicas(number)
{
    if(number === 1)
        return 5;
    else if(number === 2)
        return 3;
    else
        return 1;
}

function ShowStats()
{
    var x = document.getElementById("pauseMenu");
    x.style.display = "none";

    var y = document.getElementById("stats");
    y.style.display = "block";

    document.getElementById("stats").innerText += " " + localStorage.getItem("dificuldade") + "\n\n" + 
    "Total de dicas: " + localStorage.getItem("tipsLeft")
    
    document.getElementById('stats').innerHTML += '<button id="resumeFromBox" onclick="resumeFromBox()">Retomar</button>';
}

function resumeFromBox()
{
    var y = document.getElementById("stats");
    y.style.display = "none";
}