let currentQuestion = 0; // Variable to keep track of the current question index
let score = 0; // Variable to keep track of the user's score
let timeinterval; // Variable to store the setInterval ID for the timer
 // Array to store the quiz questions
const questions = [
    {
        question: "What is the capital city of Bihar Patna?",
        answers: ["800001", "800002", "800003", "800004"],
        correctAnswer: "800001"
    },
    {
        question: "What is the capital city of Bihar Gaya?",
        answers: ["823004", "823002", "823003", "823001"],
        correctAnswer: "823001"
    },
    {
        question: "What is the capital city of Bihar Muzaffarpur?",
        answers: ["842002", "842001", "842003", "842004"],
        correctAnswer: "842001"
    },
    {
        question: "What is the capital city of Bihar Bhagalpur?",
        answers: ["812003", "812002", "812001", "812004"],
        correctAnswer: "812001"
    },
    {
        question: "What is the capital city of Bihar Darbhanga?",
        answers: ["846001", "846002", "846003", "846004"],
        correctAnswer: "846001"
    },
    {
        question: "What is the capital city of Bihar Ara?",
        answers: ["802304", "802302", "802303", "802301"],
        correctAnswer: "802301"
    },
    {
        question: "What is the capital city of Bihar Begusarai?",
        answers: ["851102", "851101", "851103", "851104"],
        correctAnswer: "851101"
    },
    {
        question: "What is the capital city of Bihar Katihar?",
        answers: ["854108", "854106", "854107", "854105"],
        correctAnswer: "854105"
    },
    {
        question: "What is the capital city of Bihar Purnia?",
        answers: ["854303", "854302", "854301", "854304"],
        correctAnswer: "854301"
    },
    {
        question: "What is the capital city of Bihar Chhapra?",
        answers: ["841102", "841101", "841103", "841104"],
        correctAnswer: "841101"
    } 
];
// Array to store the time taken for each question
const questionTimes = [];

// Function to check the selected answer and record the time taken
function checkAnswer(btn) {
    const selectedAnswer = btn.textContent;
    const correctAnswer = questions[currentQuestion].correctAnswer;
    const answerButtons = document.querySelectorAll('.btn');

    // Record the time taken for the current question
    const currentTime = 10 - parseInt(document.getElementById('timer').textContent);
    questionTimes.push(currentTime);

    // Check the selected answer
    if (selectedAnswer === correctAnswer) {
        score++;
        document.querySelector('.score').textContent = score;
        btn.style.backgroundColor = 'green';
    } else {
        for (let i = 0; i < answerButtons.length; i++) {
            if (answerButtons[i].textContent === correctAnswer) {
                answerButtons[i].style.backgroundColor = 'green';
            }
        }
        btn.style.backgroundColor = 'red';
    }

    // Disable buttons after an answer is selected
    answerButtons.forEach(button => {
        button.disabled = true;
    });

    // After processing the answer, move to the next question
    // nextQuestion();
}

// Function to move to the next question
function nextQuestion() {
    // Check if there are more questions
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        // Update question text and answer buttons
        const questionElement = document.getElementById('question');
        questionElement.textContent = `${questions[currentQuestion].question}`;
        const answerButtons = document.querySelectorAll('.btn');
        for (let i = 0; i < answerButtons.length; i++) {
            answerButtons[i].textContent = questions[currentQuestion].answers[i];
            answerButtons[i].style.backgroundColor = '';
            answerButtons[i].disabled = false;
        }
        // Update the progress
        updateProgress();
        // Reset the timer
        clearInterval(timeinterval);
        startTimer(10); // Change the timer duration here (e.g., 10 seconds)
    } else {
        // Construct the result URL with query parameters
        let resultUrl = `quizresult.html?totalQuestions=${questions.length}&attemptedQuestions=${currentQuestion + 1}&passFail=${score >= questions.length / 2 ? 'Pass' : 'Fail'}&correctAnswers=${score}&wrongAnswers=${questions.length - score}&percentage=${((score / questions.length) * 100).toFixed(2)}`;

        // Append time taken for each question to the URL
        for (let i = 0; i < questionTimes.length; i++) {
            resultUrl += `&time${i}=${questionTimes[i]}`;
        }

        // Redirect to the result page
        window.location.href = resultUrl;
    }
}

// Function to update the progress display
function updateProgress() {
    const progressElement = document.getElementById('progress');
    progressElement.textContent = `${currentQuestion + 1}/${questions.length}`;
}

// Function to start the timer
function startTimer(duration) {
    let timeleft = duration;
    const timer = document.getElementById('timer');
    timer.textContent = `${timeleft}`;
    timeleft--;
    timeinterval = setInterval(function () {
        if (timeleft > 0) {
            timer.textContent = `${timeleft}`;
            timeleft--;
        } else {
            clearInterval(timeinterval);
            timer.innerHTML = `Time's up`;
            nextQuestion();
        }
    }, 1000);
}

// Initialize the quiz
updateProgress();
startTimer(10); // Start the timer with a duration of 10 seconds