const colors = ["red", "yellow", "green", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var count = 0;
var level = 0;


$(document).one('keypress', function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});


function nextSequence() {
    var randomNum = Math.floor(Math.random() * 4);
    var randomChosenColor = colors[randomNum];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

    $("#level-title").text("Level " + level);
    level++;
}


function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 800);
}

function checkAnswer() {
    if (JSON.stringify(userClickedPattern) == JSON.stringify(gamePattern)) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
        userClickedPattern = [];
    }
    else {
        playSound(wrong);
        $(body).addClass('game-over');
        setInterval(() => {
            $(body).removeClass('game-over');
        }, 200);
        $(h1).
    }
}

$(".btn").on('click', function () {
    var userChosenColor = $(this).attr('id');
    playSound(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    animatePress(userChosenColor);
    setTimeout(() => {
        checkAnswer();
    }, 1000);
})































