let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#again-btn");
let msgcontainer=document.querySelector(".winner-msg");
let msg= document.querySelector("#msg");

let turnO=true;
let count = 0;

const win_pattern=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
    if (turnO) {
        box.innerText="O";
        turnO=false;
    }
    else{
        box.innerText="X";
        turnO=true;
    }
       box.disabled=true;
       count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
});

});

  const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontainer.classList.remove("hide");
    disabledbtns();
};


const showWinner=(winner)=>{
   msg.innerText='Congrats, winner is ' + winner;
   msgcontainer.classList.remove("hide");
   disabledbtns();
}
const disabledbtns=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enablebtns=()=>{
    for(let box of boxes){
      box.disabled=false;
      box.innerText="";
    }
  }

const checkWinner= ()=>{
   for( let pattern of win_pattern){
       let pos1Val=  boxes[pattern[0]].innerText;
       let pos2Val= boxes[pattern[1]].innerText;
       let pos3Val= boxes[pattern[2]].innerText;

     if (pos1Val !="" && pos2Val!="" && pos3Val!="") {
        if(pos1Val===pos2Val && pos2Val===pos3Val){
         console.log("winner is "+ pos1Val);
         showWinner(pos1Val);
         return true;
     }

    }

    }
};

const resetGame=()=>{
  turnO=true;
  count=0;
  enablebtns();
  msgcontainer.classList.add("hide");
}

newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click", resetGame);