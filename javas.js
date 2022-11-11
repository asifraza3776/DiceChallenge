var randomnNumber1 = Math.floor(Math.random()*  6) + 1;


var randomDiceImage = "dice"   +   randomnNumber1 + ".png";


var randomImageSource = "images/"  + randomDiceImage;


var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src",randomImageSource);




var randomnNumber2 = Math.floor(Math.random()* 6) + 1;

var randomDiceImage2 = "dice"   +   randomnNumber2  + ".png";

var randomImageSource2 = "images/dice"  +  randomnNumber2  + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2)



if(randomnNumber1 > randomnNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if(randomnNumber2 > randomnNumber1){

    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "TIE";
}
