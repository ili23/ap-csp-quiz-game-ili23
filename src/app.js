const DOMSelectors = {
    questionBox : document.querySelector(".question-section"),
    startButton: document.querySelector(".start"),
    buttonBox : document.querySelector("button-box"),
    submitButton: document.querySelector(".submit-btn"),
    scoreBox: document.querySelector(".score"),
    resetButton: document.querySelector(".reset-btn"),
    scoreBoard: document.querySelector(".score-board")
};
const questionBank = [ 
    {
        question: "In which game did Mario first get to ride on Yoshi?", //Question 1 
        answerone: "Super Mario World",
        answertwo: "Super Mario Bros",
        answerthree: "Super Mario Bros 3",
        answerfour: "Super Mario 64",
        name: "1",
        correctAnswer: "Super Mario World",  
    },
    {
        question: "Which insect transformation can Mario power-up with in the super mario galaxy game?", //Question 2
        answerone: "Lady Bug",
        answertwo: "Ant",
        answerthree: "Bee",
        answerfour: "Stink Bug",
        name: "2",
        correctAnswer: "Stink Bug",  
    },
    {
        question: "Which one is not a power up for Mario?", //Question 3
        answerone: "Fire Flower",
        answertwo: " 1-up Mushroom",
        answerthree: "Magic Hot Dog",
        answerfour: "Super Star",
        name: "3",
        correctAnswer: "Magic Hot Dog",  
    },
    {
        question: "What is the name of Mario’s racoon-like suit that gives him the ability to glide through the air?", //Question 4
        answerone: "Tanooki suit",
        answertwo: "Super suit",
        answerthree: "Law suit",
        answerfour: "Bee suit",
        name: "4",
        correctAnswer: "Tanooki Suit", 
    },
    {
        question: "Luigi is Mario’s...?", //Question 5
        answerone: "dad ",
        answertwo: "brother",
        answerthree: "cousin",
        answerfour: "boyfriend ",
        name: "5",
        correctAnswer: "brother",  //when you change questions/answers just change this too
    },
];

function init(){
const displayQuestions = function () {
    DOMSelectors.questionBox.innerHTML = "";
    questionBank.forEach((element) => {
        DOMSelectors.questionBox.insertAdjacentHTML(
          "afterbegin",
          `<div class="question">
          <h1 id="${element.name}">${element.question}</h1> 
          <div class="answer">
              <div class="choice">
                  <input type="radio" id="choice-1" name="${element.name}" value="${element.answerone}">
                  <label class="answer-text answerone" for="choice-1">${element.answerone}</label> 
              </div>
              <div class="choice">
              <input type="radio" id="choice-2" name="${element.name}" value="${element.answertwo}">
              <label class="answer-text answertwo" for="choice-2"> 
                  ${element.answertwo}</label> 
              </div>
              <div class="choice">
              <input type="radio" id="choice-3" name="${element.name}" value="${element.answerthree}">
              <label class="answer-text answerthree"  for="choice-3">
                  ${element.answerthree}</label> 
              <div class="choice">
              <input type="radio" id="choice-4" name="${element.name}" value="${element.answerfour}">
              <label class="answer-text answerfour" for="choice-4">
                  ${element.answerfour}</label> 
              </div>
          </div>
      </div>`
        );
    }); 
};
DOMSelectors.startButton.addEventListener("click", displayQuestions);  

const checkScore = function (){
    let score = 0;
    questionBank.forEach((element)=> {
    const selectedAnswer = document.querySelector(
        `input[name="${element.name}"]:checked`
        ).value;
     if (selectedAnswer === `${element.correctAnswer}`){
        score++;
        document.getElementById(`${element.name}`).style.backgroundColor = "green";
     }else{
        document.getElementById(`${element.name}`).style.backgroundColor = "red";
     };
     console.log(score);
});
DOMSelectors.scoreBox.insertAdjacentHTML("afterbegin", `<h1 class="score-board">You got ${score} correct!!</h1>`);
};
DOMSelectors.submitButton.addEventListener("click", checkScore);
}

init();