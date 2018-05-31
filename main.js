document.getElementById("start_game_button").onclick = rungame;

function rungame(){

 var userChoice = prompt("Do you choose rock, paper or scissors?");
  var currentUserChoice = userChoice;
  document.getElementById("users_choice_text").innerHTML = currentUserChoice;
// }

var computerChoice = Math.random();

if (computerChoice <0.34){
    computerChoice = "rock";
   var currentComputerChoice = computerChoice;

}else if(computerChoice <=0.67){
    computerChoice = "paper";
   var currentComputerChoice = computerChoice;

}
else{
    computerChoice = "scissors";
   var currentComputerChoice = computerChoice;

}
 document.getElementById("computer_choice_text").innerHTML = currentComputerChoice;


var compare = function(choice1,choice2){
    if(choice1===choice2){
      document.getElementById("result_text").innerHTML = "Tie";
        
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
          document.getElementById("result_text").innerHTML = "rock wins";
        }
      
        else{
          document.getElementById("result_text").innerHTML = "paper wins";
        }
    }
    if(choice1==="paper"){
        if(choice2==="rock"){
            document.getElementById("result_text").innerHTML = "paper wins";
        }
        else{
           document.getElementById("result_text").innerHTML = "scissors wins";
        }
    }
    if(choice1==="scissors"){
        if(choice2==="rock"){
           document.getElementById("result_text").innerHTML = "rock wins";
        }
        else{
            document.getElementById("result_text").innerHTML = "scissors wins";
        }
    }
};

compare(currentUserChoice,currentComputerChoice);
}
