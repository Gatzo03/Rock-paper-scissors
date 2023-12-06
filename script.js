let vittorie=0;
let sconfitte=0;
let token=0;
const giocatore = document.querySelector(".GiocatoreScelta");
const botScelta = document.querySelector(".botScelta");
function GetComputerChoice(){
   
    let num_dec = Math.random()*2;
    let num_int = Math.round(num_dec);
    if(num_int===0){
        botScelta.textContent = "rock";
        return "rock";
        
    }
    else if(num_int===1){
        botScelta.textContent = "paper";
        return "paper";
    }
    else{
        botScelta.textContent = "scissors";
        return "scissors";
    }
}

function PlayRound(playerchoice, computerchoice){
    if (playerchoice==="rock"){
        giocatore.textContent = "rock";
        if (computerchoice==="paper"){

            sconfitte++;
            sconfitta();
            return "Hai perso!";
            
        }
        else if (computerchoice==="scissors"){
            vittorie++;
            vittoria();
            return "Hai vinto!";
            
            
        }
        else {
            return "Pareggio!";
            
        }
    }
    else if (playerchoice==="paper"){
        giocatore.textContent = "paper";
        if (computerchoice==="paper"){
            return "Pareggio!";
            
        }
        else if (computerchoice==="scissors"){
            sconfitte++;
            sconfitta();
            return "Hai perso!";

            
        }
        else {
            vittorie++;
            vittoria();
            return "Hai vinto!";
            
            
        }
    }
    else if (playerchoice==="scissors"){
        giocatore.textContent = "scissors";
        if (computerchoice==="paper"){
            vittorie++;
            vittoria();
            return "Hai vinto!";
           
           
        }
        else if (computerchoice==="scissors"){
            return "Pareggio!";
            
        }
        else {
            sconfitte++
            sconfitta();
            return "Hai perso!";
           
        }
    }
    else{
        return "Opzione non valida";
        
    }
}

/*function game(){
  
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
    
}*/



let result = " ";
let i=0;
console.log(vittorie);
console.log(sconfitte);

const rockButton = document.querySelector(".rock");
const scissorsButton = document.querySelector(".scissors");
const paperButton = document.querySelector(".paper");

rockButton.addEventListener('click', ()=>{
    finale.textContent = " ";
    i++;
    let computer = GetComputerChoice();
     result = PlayRound("rock",computer);
     displayResult();
     
}) 

scissorsButton.addEventListener('click', ()=>{
    finale.textContent = " ";
    i++;
    let computer = GetComputerChoice();
     result=PlayRound("scissors",computer);
     displayResult();
    
})

paperButton.addEventListener('click', ()=>{
    finale.textContent = " ";
    i++;
    let computer = GetComputerChoice();
    result = PlayRound("paper",computer);
    if(token===1){
        resultContainer.removeChild(para);
    }
    displayResult();
    
})
const resultContainer = document.querySelector(".resultContainer")
const para = document.createElement("p");

const body = document.querySelector("body");
function displayResult(){
    resultContainer.appendChild(para);
    
    token=1;
   
    para.textContent = "(" + i + ") " + result;
    if (vittorie===5 || sconfitte===5){
        i=0;
        messaggio_finale();
        
    }
}

function vittoria(){
    const tu = document.querySelector(".tu");
    tu.textContent = vittorie;
}

function sconfitta(){
    const bot = document.querySelector(".bot");
    bot.textContent = sconfitte;
}

function messaggio_finale(){
    console.log("Vittorie: " + vittorie);
    console.log("Sconfitte: " + sconfitte);
    
    vittoria();
    sconfitta();
    
    if(vittorie>sconfitte){
        finale.textContent = "Hai vinto il game";
    }
    else{
        finale.textContent = "hai perso il game";
    }


    vittorie=0;
    sconfitte=0;

    vittoria();
    sconfitta();
}
const finale = document.querySelector(".finale");
const button = document.querySelector("button");















