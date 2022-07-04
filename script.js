let rock=document.getElementById('rock');
let paper=document.getElementById('paper');
let scissor=document.getElementById('scissor');
let objects=['rock','paper','scisssor'];


let computerScore=0;
let yourScore=0;
let cs=document.querySelector('.scoreComputer');
let ys=document.querySelector('.scoreYou');
let informationResult=document.querySelector('.info');
 let rockElement=document.getElementById('rock');
    let paperElement=document.getElementById('paper');
    let scissorElement=document.getElementById('scissor');
let game=[
    {
        'paper':"You Lost",
        'scissor':"You Won",
        'rock':"Match Tied"
    },
    {
        'rock':"You Won",
        'scissor':"You Lost",
        'paper':"Match Tied",
    },
    {
        'rock':"You Lost",
        'paper':"You Won",
        'scissor':"Match Tied"
    }
];

let play=document.querySelectorAll('.image');

const randomChoice=()=>{
    return Math.floor(Math.random()*3);
}

play.forEach((element)=>{
    
 element.onclick=()=>{
    
    rockElement.style.backgroundColor='white';
    paperElement.style.backgroundColor='white';
    scissorElement.style.backgroundColor='white';
     operationRPS(element.value)
 }
})

const operationRPS=(user)=>{
    



    let x=randomChoice();
    let computer=objects[x];
    
    let result=game[x][user];
    
     

    
    

    informationResult.innerHTML=`<h1>${result}</h1>`;
    if(result==="You Won")
    {
        informationResult.style.color='green'
         yourScore++;
    }
    else if(result==="You Lost")
    {
        informationResult.style.color="red";
          computerScore++;
    }
    else{
        informationResult.style.color="black"
         computerScore++;
    yourScore++;
    }


     let computerBackground=document.getElementById(computer);
      let userBackground=document.getElementById(user);

    if(result!=="Match Tied")
    {
        
    computerBackground.style.backgroundColor='blue';
    userBackground.style.backgroundColor='yellow';
    
    

    }
    else{
        userBackground.style.backgroundColor='yellow';
       
    }

    
    cs.innerHTML=`<h3>${computerScore}</h3>`
    
    ys.innerHTML=`<h3>${yourScore}</h3>`
}
let stopit=document.querySelector('.stop');

stopit.onclick=()=>{

computerScore=0;
 yourScore=0;
 
    cs.innerHTML=`<h3>${computerScore}</h3>`
   
    ys.innerHTML=`<h3>${yourScore}</h3>`
    informationResult.innerHTML=`<h3>Waiting for the play</h3>`
    informationResult.style.color='black'
     rockElement.style.backgroundColor='white';
    paperElement.style.backgroundColor='white';
    scissorElement.style.backgroundColor='white';

}