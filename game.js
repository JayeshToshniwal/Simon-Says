const colors = ["red", "yellow", "green", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;


$(document).one('keypress', nextSequence);


function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[randomNum];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    $("h1").text("Level " + level);
    level++;
}


function playSound(name) {
    if (name === "red") {
        var redSound = new Audio('./sounds/red.mp3');
        redSound.play();
    }
    else if (name === "yellow") {
        var yellowSound = new Audio('./sounds/yellow.mp3');
        yellowSound.play();
    }
    else if (name === "green") {
        var greenSound = new Audio('./sounds/green.mp3');
        greenSound.play();
    }
    else if (name === "blue") {
        var blueSound = new Audio('./sounds/blue.mp3');
        blueSound.play();
    }
}

$(".btn").on('click', function () {
    $(this).addClass("pressed");
    setTimeout(() => {
        $(this).removeClass("pressed");
    }, 1900);

    var userChosenColor = $(this).attr('id');
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})

function animatePress(currentColor) {
    $("#" + currentColor).on('click', function () {
        $("#" + currentColor).addClass(pressed)
        setTimeout(() => {
            $("#" + currentColor).removeClass(pressed)
        }, 800);
    });
}





























