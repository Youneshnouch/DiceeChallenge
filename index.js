var play= document.querySelector(".play");
var img1= document.querySelector(".img1");
var img2= document.querySelector(".img2");
var h1= document.querySelector(".title");

play.addEventListener("click", function(){
    var randomNumber1 = Math.round((Math.random()*5)+1);
    var randomNumber2 = Math.round((Math.random()*5)+1);

    if(randomNumber1===1){
        img1.src = "images/dice1.png";

    }
    else if(randomNumber1===2){
        img1.src = "images/dice2.png";

    }
    else if(randomNumber1===3){
        img1.src = "images/dice3.png";

    }
    else if(randomNumber1===4){
        img1.src = "images/dice4.png";

    }
    else if(randomNumber1===5){
        img1.src = "images/dice5.png";

    }
    else if(randomNumber1===6){
        img1.src = "images/dice6.png";

    }

    if(randomNumber2===1){
        img2.src = "images/dice1.png";

    }
    else if(randomNumber2===2){
        img2.src = "images/dice2.png";

    }
    else if(randomNumber2===3){
        img2.src = "images/dice3.png";

    }
    else if(randomNumber2===4){
        img2.src = "images/dice4.png";

    }
    else if(randomNumber2===5){
        img2.src = "images/dice5.png";

    }
    else if(randomNumber2===6){
        img2.src = "images/dice6.png";

    }
    if (randomNumber1 > randomNumber2){
        h1.innerText= "🏁 Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2){
        h1.innerText= "Player 2 Wins! 🏁";
    }
    else if (randomNumber1 === randomNumber2){
        h1.innerText= "Tie!";

    }
});
  
