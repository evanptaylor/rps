function computerPlay(){
    let randomNum = (Math.random()*3);
    if(randomNum<1){
        return "rock";
    }else if (randomNum>1 && randomNum<=2){
        return "paper";
    }else{
        return "scissors";
    }
}

function play(computer, user){
    if(user==computer){
        return "Tie!";
    }
    if(user=='rock'){
        if(computer == 'paper'){
            return "you lose!";
        }else{
            return "you win!";
        }
    }else if(user=='paper'){
        if(computer == "scissors"){
            return "you lose!";
        }else{
            return "you win!";
        }
    }else{
        if(computer == "rock"){
            return "you lose!";
        }else{
            return "you win!";
        }
    }
}
function playGame(){

    let userPick;
    let score;
    let win = 0;
    let lose = 0; 
    for(let i=0; i<5; i++){
        userPick = prompt("pick rps");
        score = play(computerPlay(), userPick)
        console.log(score);
        if(score=="you win!"){
            win++;
        }
        if (score=="you lose!"){
            lose++;
        }
    }
    if(win<lose){
        console.log("You lost the series!");
    }
    if (win>lose){
        console.log("You won the series!");
    }else{
        console.log("You tied the computer in 5 games");
    }
}

playGame();