// Detecting button press

var numberofbuttons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberofbuttons ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;

       makeSound(buttonInnerHTML);

    });
}

// Detecting Key Press

document.addEventListener("keypress",function(event){
    makeSound(event.key);
});

// function(event) then console.log(event) to get status of what happened

function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
        audio.play();
        break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
        case "l": 
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play(); 
        break;  
        default:
            break;
       } 
}