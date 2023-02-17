var perso = document.querySelector(".perso");

function sauter(){
    // function pour faire sauter le personnage
    if(perso.classList != "animation"){
        perso.classList.add('animation'); 
    }
    setTimeout(function(){
        perso.classList.remove('animation'); 
    },500)
}