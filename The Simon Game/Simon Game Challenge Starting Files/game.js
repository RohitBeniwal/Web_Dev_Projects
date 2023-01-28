
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started=false;
var level=0;

$(document).keypress(function(){
    if(!started){
        $("#level-title").text("level "+level);
        nextSequence();
        started=true;
    }
});



$(".btn").click(function(){
    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    // console.log(userClickedPattern);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }
    }
    else{
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass("game-over");
        
        setTimeout(function(){
         $("body").removeClass("game-over");  
        },200);
        startOver();
    }

}

function nextSequence() {

    userClickedPattern=[];

    level++;

    $("#level-title").text("level "+level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  //1. Use jQuery to select the button with the same id as the randomChosenColour
  //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play(); 
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    },100);
}