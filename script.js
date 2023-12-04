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

console.log(GetComputerChoice());

