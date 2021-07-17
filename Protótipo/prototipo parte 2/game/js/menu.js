function resume()
{
    var x = document.getElementById("pauseMenu");
    var y = document.getElementById("screen");
    x.style.display = "none";
    y.style.opacity = 1;
}

function reset()
{
    var x = document.getElementById("pauseMenu");
    var y = document.getElementById("screen");
    x.style.display = "none";
    y.style.opacity = 1;
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