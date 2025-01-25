let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newgamebtn = document.querySelector("#renew-game");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container")

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7], 
    [2,5,8], 
    [2,4,6],
    [3,4,5], 
    [6,7,8]  
];

const resgame = () => {
    turnO = true;
    enableBosxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turnO == true){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwinner(); 
    });
});

const disableBosxes = () => {
    for(let box of boxes) {
        box.disabled = true;
        // box.innerText = "";
    }
}
const enableBosxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showwinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableBosxes();
}
const checkwinner = () => {
    for(let pattern of winpatterns){
           let pos1val= boxes[pattern[0]].innerText;
           let pos2val= boxes[pattern[1]].innerText;
           let pos3val= boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);

                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click", resgame);
resetbtn.addEventListener("click", resgame);