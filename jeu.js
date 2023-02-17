var perso = document.querySelector(".perso");
var obstacles = document.querySelector(".obstacles");

function sauter(){
    // function pour faire sauter le personnage
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
}

//verifier si  l'obstacle touche le personnage

var verification = setInterval(function(){
    var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top")) ;
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ;

},1)