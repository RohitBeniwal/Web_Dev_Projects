var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice"+ randomNumber1 +".png";

var randomImageSource = "images/"+randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice"+ randomNumber2 +".png";

var randomImageSource = "images/"+randomDiceImage;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource);

var ch = document.querySelector("h1");
if(randomNumber1>randomNumber2)
ch.innerHTML="Player1 Wins!";
if(randomNumber2>randomNumber1)
ch.innerHTML="Player2 Wins!";
if(randomNumber1==randomNumber2)
ch.innerHTML="Draw!";