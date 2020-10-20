const DOMSelectors = {
    questionBox : document.querySelector(".question-section"),
    startButton: document.querySelector(".start"),
    buttonBox : document.querySelector("button-box")
};
const questionBank = [ 
    {
        question: "insert data", //Question 1 
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
    },
    {
        question: "insert data", //Question 2
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
    },
    {
        question: "insert data", //Question 3
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
    },
    {
        question: "insert data", //Question 4
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
    },
    {
        question: "insert data", //Question 5
        answerone: "choice1 ",
        answertwo: "choice2 ",
        answerthree: "choice3 ",
        answerfour: "choice4 ",
    },
];

function init(){
    DOMSelectors.startButton.addEventListener("click", function(e){
    questionBank.forEach((element) => {
        DOMSelectors.questionBox.insertAdjacentHTML(
          "afterbegin",
          `<div class="question">
          <h1>${element.question}</h1> 
          <div class="answer">
              <div class="choice">
                  <input type="button" id="choice-1" value="A">
                  <label class="answer-text answerone" for="choice-1">${element.answerone}</label> 
              </div>
              <div class="choice">
                  <input type="button" id="choice-2" value="B">
                  <label class="answer-text answertwo" for="choice-2">${element.answertwo}</label> 
              </div>
              <div class="choice">
                  <input type="button" id="choice-3" value="C">
                  <label class="answer-text answerthree" for="choice-3">${element.answerthree}</label> 
              <div class="choice">
                  <input type="button" id="choice-4" value="D">
                  <label class="answer-text answerfour" for="choice-4">${element.answerfour}</label> 
              </div>
          </div>
      </div>`
        );
        });   
        DOMSelectors.buttonBox.insertAdjacentHTML(
            "afterbegin"
            `<button class="submit-btn button">Submit</button>`
        )   
    });
};

init();