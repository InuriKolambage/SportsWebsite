//Questions and answers
const questions = [

    {
        question: "1) How many players in a cricket team?",
        answers: ["A. 11", "B. 12", "C. 9", "D. 15"],
        correctAnswer: 0, // Index of the correct answer
    },
    {
        question: "2) When was the first time the “Ashes” series of Cricket was played between Australia and England?",
        answers: ["A. 1880", "B. 1882", "C. 1884", "D. 1886"],
        correctAnswer: 1,
    },
    {
        question: "3) Who has scored the most goals ever in football history?",
        answers: ["A. Ronaldo", "B. Meradona", "C. Pele", "D. Zidane"],
        correctAnswer: 2,
    },
    {
        question: "4) Durand Cup is associated with the game of?",
        answers: ["A. Football", "B. Squash", "C. Volleyball", "D. Table Tennis"],
        correctAnswer: 0,
    },
    {
        question: "5) Which Country’s Balls were used For 2018 FIFA World Cup?",
        answers: ["A. Pakistan", "B. India", "C. Srilanka", "D. Thailand"],
        correctAnswer: 0,
    },
    {
        question: "6) Which Team got 3rd Position in FIFA World Cup 2018?",
        answers: ["A. France", "B. England", "C. Croatia", "D. Belgium"],
        correctAnswer: 3,
    },
    {
        question: "7) When was basketball made?",
        answers: ["A. 1737", "B. 1974", "C. 1891", "D. 1900"],
        correctAnswer: 2,
    },
    {
        question: "8) Which is the birthplace of boxing?",
        answers: ["A. Belgium", "B. Greece", "C. Sweden", "D. Spain"],
        correctAnswer: 1,
    },
    {
        question: "9) Who made basketball?",
        answers: ["A. James Naismith", "B. William Morgan", "C. Jim Thorpe", "D. Jack Smith"],
        correctAnswer: 0,
    },
    {
        question: "10) Kicking a basketball is what kind of foul?",
        answers: ["A. Personal foul", "B. Flagrant foul", "C. Technical foul", "4. Shooting foul"],
        correctAnswer: 2,
    }

];

let currentIndex = 0;
let correctCount = 0;
let startTime;

// Element references
const quizContainer = document.getElementById("quiz-container");
const quizHeader = document.getElementById("quiz-header");
const quizBody = document.getElementById("quiz-body");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerContainer = document.getElementById("answer-container");
const controlsContainer = document.getElementById("controls-container");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const quizSummary = document.getElementById("quiz-summary");
const correctCountElement = document.getElementById("correct-count");
const timeSpentElement = document.getElementById("time-spent");
const restartButton = document.getElementById("restart-btn");

// Event listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
submitButton.addEventListener("click", showSummary);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    startTime = new Date();
    quizHeader.style.display = "none";
    quizBody.style.display = "block";
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentIndex];
    questionElement.textContent = currentQuestion.question;

    answerContainer.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const answerBox = document.createElement("div");
        answerBox.classList.add("answer-box");
        answerBox.innerHTML = `<p class="answer">${answer}</p>`;
        answerBox.addEventListener("click", () => checkAnswer(index));
        answerContainer.appendChild(answerBox);
    });
}

function checkAnswer(answerIndex) {
    const currentQuestion = questions[currentIndex];
    const answerBoxes = answerContainer.querySelectorAll(".answer-box");
    answerBoxes.forEach((answerBox, index) => {
        if (index === currentQuestion.correctAnswer) {
            answerBox.classList.add("correct");
        } else if (index === answerIndex) {
            answerBox.classList.add("wrong");
        }
        answerBox.style.pointerEvents = "none";
    });

    if (answerIndex === currentQuestion.correctAnswer) {
        correctCount++;
    }

    nextButton.style.display = currentIndex === questions.length - 1 ? "none" : "block";
    submitButton.style.display = currentIndex === questions.length - 1 ? "block" : "none";
    controlsContainer.style.display = "block";
}

function nextQuestion() {
    currentIndex++;
    controlsContainer.style.display = "none";
    displayQuestion();
}

function showSummary() {
    quizBody.style.display = "none";
    quizSummary.style.display = "block";
    correctCountElement.textContent = correctCount;
    timeSpentElement.textContent = Math.round((new Date() - startTime) / 1000);
}

function restartQuiz() {
    currentIndex = 0;
    correctCount = 0;
    quizSummary.style.display = "none";
    quizHeader.style.display = "block";
}
