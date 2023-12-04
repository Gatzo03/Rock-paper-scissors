let vittorie=0;
let sconfitte=0;
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
            sconfitte++;
            return "Hai perso!";
            
        }
        else if (computerchoice==="scissors"){
            vittorie++;
            return "Hai vinto!";
            
            
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
            sconfitte++;
            return "Hai perso!";
            
        }
        else {
            vittorie++;
            return "Hai vinto!";
            
            
        }
    }
    else if (playerchoice==="scissors"){
        if (computerchoice==="paper"){
            vittorie++;
            return "Hai vinto!";
           
           
        }
        else if (computerchoice==="scissors"){
            return "Pareggio!";
            
        }
        else {
            sconfitte++
            return "Hai perso!";
           
        }
    }
    else{
        return "Opzione non valida";
        
    }
}

function game(){
  
    for(let i=1;i<=5;i++){
        
        let playerchoice= prompt("Scegli rock, paper, scissors");
        let playerchoice_lower = playerchoice.toLowerCase();
        let computerchoice = GetComputerChoice();
        
        let result = PlayRound(playerchoice_lower,computerchoice);
        console.log(result);
        if (playerchoice_lower===computerchoice || result==="Opzione non valida"){
            i--;
        }
        
    }    
    
}

function messaggio_finale(){
    console.log("Vittorie: " + vittorie);
    console.log("Sconfitte: " + sconfitte);
    if(vittorie>sconfitte){
        console.log("Hai vinto il game");
    }
    else{
        console.log("Hai perso il game");
    }
}
game();
messaggio_finale();

