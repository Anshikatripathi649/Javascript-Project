const questions = [
{
    'que' : "Inside which HTML element do we put the JavaScript?",
    'a' : "<scripting>",
    'b' : "<javascript>",
    'c' : "<script>",
    'd' : "<js>",
    'correct' : "c"
},
{
    'que' : "Where is the correct place to insert a JavaScript?",
    'a' : "<head>",
    'b' : "<body>",
    'c' : "<head> and <body>",
    'd' : "non of them",
    'correct' : "b"
},
{
    'que' : "What year was JavaScript launched?",
    'a' : "1996",
    'b' : "1995",
    'c' : "1994",
    'd' : "non of them",
    'correct' : "b"
},
{
    'que' : "Which event occurs when the user clicks on an HTML element?",
    'a' : "onchange",
    'b' : "onmouseclick",
    'c' : "onclick",
    'd' : "onmouseover",
    'correct' : "c"
}

];

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
let allInputs =  document.querySelectorAll("input");
let heading = document.querySelector("h3");
const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    heading.innerText = `${index+1})  ${data.que}`;
    allInputs[0].nextElementSibling.innerText = data.a;
    allInputs[1].nextElementSibling.innerText = data.b;
    allInputs[2].nextElementSibling.innerText = data.c;
    allInputs[3].nextElementSibling.innerText = data.d;

}

document.querySelector("#submit").addEventListener( "click",
    function() {
        const data = questions[index];
        const userAns = getAns();
        if(userAns == data.correct){
            right++;
        }else {
            wrong++;
        }
        index++;
        loadQuestion();
    }
);

const getAns = () => {
    allInputs.forEach(
        (input) => {
            if(input.checked){
                answer= input.value;
            }
        }
    )
    return answer;
};

const reset = () => {
    allInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
};

const endQuiz = () =>{
    // document.getElementById("box").style.background = "white";
    document.getElementById("box").innerHTML = `
    <h3>Thankyou for playing the quiz</h3>
    <h2>${right}/${total} are correct.</h2>`
}
// initial call of function
loadQuestion();