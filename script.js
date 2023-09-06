const contentDiv = document.querySelector('.contentDiv');



const newQuestionQuiz = [
    {
        question: 'Which tower is located in France',
        firstAnswer: 'Aiphel',
        secondAnswer: 'Pisa Tower',
        thirdAnswer: 'Big Ben',
        correctAnswer: 'Aiphel',
        objectId: 1
    },
    {
        question: 'Which model does BMW produces',
        firstAnswer: 'A7',
        secondAnswer: 'CrossLand X',
        thirdAnswer: '520d',
        correctAnswer: '520d',
        objectId: 2
    },
    {
        question: 'How much does Disel costs?',
        firstAnswer: '205',
        secondAnswer: '210',
        thirdAnswer: '202',
        correctAnswer: '202',
        objectId: 3
    },
    {
        question: 'How much does milk costs?',
        firstAnswer: '150',
        secondAnswer: '160',
        thirdAnswer: '145',
        correctAnswer: '145',
        objectId: 4
    },
    {
        question: 'Which of the following cars is the fastest?',
        firstAnswer: 'Opel Corsa D OPC',
        secondAnswer: 'Bugatti Veyron',
        thirdAnswer: 'Ford Mustang GT',
        correctAnswer: 'Bugatti Veyron',
        objectId: 5
    },
    {
        question: 'What does the industrial boiler produces',
        firstAnswer: 'Cold water',
        secondAnswer: 'Gasoline',
        thirdAnswer: 'Steam',
        correctAnswer: 'steam',
        objectId: 6
    },
]

newQuestionQuiz.forEach((element)=>{
    const displayQuestions = `
    <div class="justInCase">
    <div class='quizContent'>
        <div class='question'>
        <h1>${element.question}</h1>
        </div>
        <div class='questionAnswer'>
            <input type='radio' data-questionid="${element.objectId}" value='${element.firstAnswer}'>
            <h3>${element.firstAnswer}</h3>
        </div>
        <div class='questionAnswer'>
            <input type='radio' data-questionid="${element.objectId}" value='${element.secondAnswer}'>
            <h3>${element.secondAnswer}</h3>
        </div>
        
        <div class='questionAnswer'>
            <input type='radio' data-questionid="${element.objectId}" value='${element.thirdAnswer}'>
            <h3>${element.thirdAnswer}</h3>
        </div>
    </div>
    </div>
    <div class="score"><h3> Score: 0</h3></div>
    `
    contentDiv.innerHTML += displayQuestions;
})

const score = document.querySelectorAll('.score h3');
const allInputsNewQuiz = document.querySelectorAll('.contentDiv input');
let currentScore = 0;
console.log(allInputsNewQuiz);
allInputsNewQuiz.forEach((input)=>{
    input.addEventListener('click', (el)=>{
        const answer = el.target.value.toLowerCase();
        const questionId = Number(el.target.dataset.questionid);
        const parentElementDiv = el.target.parentElement;
        
        newQuestionQuiz.forEach((question)=>{
            if(questionId === question.objectId){
                if(answer === question.correctAnswer.toLowerCase()){
                    parentElementDiv.style.color = 'green';
                    currentScore += 1;
                    updateScoreDisplay()
                    playSoundWin();
                }else{
                    parentElementDiv.style.color = 'red';
                    currentScore -= 1;
                    updateScoreDisplay()
                    playSoundLose();
                 
                }
            }
        })
    })
})

function updateScoreDisplay() {
    score.forEach((scoreElement) => {
        scoreElement.textContent = `Score: ${currentScore}`;
    });
}


function playSoundWin() {
    const sound = new Audio('sounds/win1.mp3'); // Kreirajte novi Audio objekat sa putanjom do zvuka
    sound.play(); // Reprodukujte zvuk
}
function playSoundLose(){
    const sound = new Audio('sounds/lose1.mp3');
    sound.play();
}

function startSound(){
    const sound = new Audio ('sounds/start.mp3');

}
const playButton = document.querySelector(".btn");
const myVideo = document.getElementById("myVideo");
const vide = document.querySelector('.vide')
playButton.addEventListener("click", function() {
  myVideo.play();
  vide.classList.remove('hidden')
});

const closeBtn = document.querySelector('.close');

function closing(){
    vide.classList.add('hidden')
    
}
closeBtn.addEventListener('click',closing);