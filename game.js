const colors = ["red", "yellow", "green", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var count = 0;
var level = 1;

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

function checkAnswer(currentLevel) {
    if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
        setTimeout(() => {
            nextSequence();
        }, 1000);
        userClickedPattern = [];
        count = 0;
    }

    else if (JSON.stringify(userClickedPattern) !== JSON.stringify(gamePattern)) {
        $("#level-title").text("Game Over, Press Any Key to Restart");
        playSound("wrong");
        $("body").addClass('game-over');
        setTimeout(() => {
            $("body").removeClass('game-over');
        }, 200);
        gamePattern = [];
        userClickedPattern = [];
        level = 0;
        $(document).one('keypress', function () {
            nextSequence();
            $('#level-title').text("Level " + level);
        })
    }
}

$(".btn").on('click', function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    count++;
    if (count === gamePattern.length) {
        setTimeout(() => {
            checkAnswer(count);
        }, 200);
    }
})































