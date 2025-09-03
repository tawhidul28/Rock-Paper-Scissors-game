let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const comScorePara = document.querySelector("#com-score");

const genComChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const drowGame =()=>{
    msg.innerText ="Game was Drow.Play again.";
    msg.style.backgroundColor = "#222831";
};

const showWinner =(userWin,userChoice,comChoice)=>{
    if(userWin===true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText =`You Win.Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor ="green";
        
    } else{
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText =`You Loss.${comChoice} brats your ${userChoice}`;
        msg.style.backgroundColor ="Red";
    }
};

const playGame = (userChoice)=>{
    const comChoice = genComChoice();
    if(userChoice === comChoice){
        drowGame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            userWin = comChoice==="paper"?false:true;
        } else if(userChoice==="paper"){
            userWin = comChoice==="rock"?true:false;
        } else if(userChoice==="scissors"){
            userWin = comChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,comChoice);
    }
        };
    
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

