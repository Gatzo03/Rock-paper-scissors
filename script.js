let i = 0;

let vittorie = 1;
function GetComputerChoice(){
    let num_dec = Math.random()*2;
    let num_int = Math.round(num_dec);
    if(num_int===0){
        return "rock";
    }
    else if(num_int===1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function PlayRound(playerchoice, computerchoice){
    if (playerchoice==="rock"){
        if (computerchoice==="paper"){
            return "Hai perso!";
        }
        else if (computerchoice==="scissors"){
            return "Hai vinto!";
            vittorie++;
        }
        else {
            return "Pareggio!";
            
        }
    }
    else if (playerchoice==="paper"){
        if (computerchoice==="paper"){
            return "Pareggio!";
            
        }
        else if (computerchoice==="scissors"){
            return "Hai perso!";
        }
        else {
            return "Hai vinto!";
            vittorie++;
        }
    }
    else if (playerchoice==="scissors"){
        if (computerchoice==="paper"){
            return "Hai vinto!";
            vittorie++;
        }
        else if (computerchoice==="scissors"){
            return "Pareggio!";
            
        }
        else {
            return "Hai perso!";
        }
    }
    else{
        return "Opzione non valida";
        
    }
}

function game(){
    for(i=1;i<=5;i++){
        let playerchoice= prompt("Scegli rock, paper, scissors");
        let playerchoice_lower = playerchoice.toLowerCase();
        let computerchoice = GetComputerChoice();
        console.log(PlayRound(playerchoice_lower,computerchoice));
        if (playerchoice_lower===computerchoice){
            i--;
        }
        
    }
    if(vittorie>2){
        console.log("Hai vinto il game");
    }
    else{
        console.log("Hai perso il game");
    }

}

game();








