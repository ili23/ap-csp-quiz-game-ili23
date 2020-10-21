const DOMSelectors = {
    questionBox : document.querySelector(".question-section"),
    startButton: document.querySelector(".start"),
    buttonBox : document.querySelector("button-box"),
    submitButton: document.querySelector(".submit-btn")
};
const questionBank = [ 
    {
        question: "insert data", //Question 1 
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
        name: "1",
        correctAnswer: "choice3",  //when you change questions/answers just change this too
    },
    {
        question: "insert data", //Question 2
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
        name: "2",
        correctAnswer: "choice3",  //when you change questions/answers just change this too
    },
    {
        question: "insert data", //Question 3
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
        name: "3",
        correctAnswer: "choice3",  //when you change questions/answers just change this too
    },
    {
        question: "insert data", //Question 4
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
        name: "4",
        correctAnswer: "choice3",  //when you change questions/answers just change this too
    },
    {
        question: "insert data", //Question 5
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
        name: "5",
        correctAnswer: "choice3",  //when you change questions/answers just change this too
    },
];

function displayQuestions(){
    DOMSelectors.startButton.addEventListener("click", function(e){
    DOMSelectors.questionBox.innerHTML = "";
    questionBank.forEach((element) => {
        DOMSelectors.questionBox.insertAdjacentHTML(
          "afterbegin",
          `<div class="question">
          <h1>${element.question}</h1> 
          <div class="answer">
              <div class="choice">
                  <input type="radio" id="choice-1" name="${element.name}" value="${element.answerone}">
                  <label class="answer-text answerone" for="choice-1">${element.answerone}</label> 
              </div>
              <div class="choice">
                  <input type="radio" id="choice-2" name="${element.name}" value="${element.answertwo}">
                  <label class="answer-text answertwo" for="choice-2">${element.answertwo}</label> 
              </div>
              <div class="choice">
                  <input type="radio" id="choice-3" name="${element.name}" value="${element.answerthree}">
                  <label class="answer-text answerthree"  for="choice-3">${element.answerthree}</label> 
              <div class="choice">
                  <input type="radio" id="choice-4" name="${element.name}" value="${element.answerfour}">
                  <label class="answer-text answerfour" for="choice-4">${element.answerfour}</label> 
              </div>
          </div>
      </div>`
        );
        });   
    });
};
/* function displayButton(){
    DOMSelectors.startButton.addEventListener("click", function(e){
    document.getElementById("button").insertAdjacentHTML("afterend", 
    ""); 
})
}; */

function checkScore(){
    let score =0;
    questionBank.forEach((item)=> {
    let selectedAnswer = document.querySelector(
        `input[name="${item.name}"]:checked`
    );
     if (selectedAnswer === `${item.correctAnswer}`){
        score++;
        document.getElementById(`${item.question}`).style.color = "green";
     }else{
        document.getElementById(`${item.question}`).style.color = "red";
     };
     console.log(score);
});
};

DOMSelectors.submitButton.addEventListener("click", checkScore);
displayQuestions();
checkScore();