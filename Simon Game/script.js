let gameSeq = [];
let userSeq = [];

let btns = ['yellow','green','red', "purple"]

let gameStart = false;
let level = 0;

let h2 = document.querySelector("h2");
let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0; // Get high score from localStorage, default to 0 if not found

// Display the high score on the page
let highScoreDisplay = document.createElement("span");
highScoreDisplay.innerText = `High Score: ${highScore}`;
document.body.appendChild(highScoreDisplay);

document.addEventListener("keypress", function () {
    if(gameStart == false) {
        console.log("game is started");
        gameStart = true;
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    let randBtn = document.querySelector(`.${randColor}`)
    btnFlash(randBtn);
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b> ${level}</b> Press any key to start new game.`;
        document.querySelector("body").style.background = "red";
        setTimeout(function(){
            document.querySelector("body").style.background = "white";
        },200)
        // Check if the current score is a new high score
          if (level > highScore) {
            highScore = level;
            localStorage.setItem("highScore", highScore); // Save the new high score in localStorage
            highScoreDisplay.innerText = `High Score: ${highScore}`; // Update the displayed high score
        }
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    // checkAns();
}

let colorBtns = document.querySelectorAll(".btn");
for(let btn of colorBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    gameStart = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

