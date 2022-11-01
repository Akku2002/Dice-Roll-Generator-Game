function original(){
    document.querySelector("h1").innerText = "Click Me!";
    var path = "images/dice6.png";
    document.querySelector(".img1").setAttribute("src",path);
    document.querySelector(".img2").setAttribute("src",path);
}

function roll(){

    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var path1 = "images/dice" + randomNumber1 + ".png";
    var path2 = "images/dice" + randomNumber2 + ".png";
    var result;
    if(randomNumber1 > randomNumber2){
        result = "Player 1 Wins!";
    }
    else if(randomNumber1 === randomNumber2){
        result = "Draw!";
    }
    else{
        result = "Player 2 Wins!";
    }
    document.querySelector("h1").innerText = result;
    console.log(result);
    console.log(path1);
    console.log(path2);
    document.querySelector(".img1").setAttribute("src",path1);
    document.querySelector(".img2").setAttribute("src",path2);
    
    setTimeout(function(){original()}
    ,1000);
}
