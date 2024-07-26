let us=0;
let cs=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const users=document.querySelector("#userso");
const compus=document.querySelector("#compso");











const compch=() =>{
      
const opn=["rock","paper","scissors"];

const inx = Math.floor(Math.random()*3);

return opn[inx];






}



const drawg=() =>{

    console.log("draww")
    msg.innerText="Game draw";
    msg.style.backgroundColor="#FF7F3E";

}



const showWinner=(userWin,userChoice,compchoice) =>{


  if(userWin){

    console.log("you win");
    msg.innerText = `User Wins!!! ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor="#90D26D";
    us++;
    users.innerText=us;


  }else{

    console.log("Computer win");
    msg.innerText = `Computer Wins!!! ${compchoice} beats ${userChoice}`;
    msg.style.backgroundColor="#C80036";

    cs++;
    compus.innerText=cs;

    



  }




};

const playgame=(userChoice) =>
    {

const compchoice=compch();
console.log(compchoice,userChoice);


    if(userChoice== compchoice)
        {

        drawg();

        }

        else{

            let userWin=true;

            if(userChoice==rock){

                userWin = compchoice === "paper" ? false : true;



            }

            else if (userChoice === "paper") {
                //rock, scissors
                userWin = compchoice === "scissors" ? false : true;
              } else {
                //rock, paper
                userWin = compchoice === "rock" ? false : true;
              }
              showWinner(userWin, userChoice, compchoice);
            }



                 

        };






choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playgame(userChoice)

});
  });
