let currentQuestion = 0; // Variable to keep track of the current question index
let score = 0; // Variable to keep track of the user's score
let timeinterval; // Variable to store the setInterval ID for the timer
 // Array to store the quiz questions
const questions = [
    {
        question: "What is the capital city of Uttar Pradesh Lucknow?",
        answers: ["226001", "226002", "226003", "226004"],
        correctAnswer: "226001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Kanpur?",
        answers: ["208004", "208002", "208003", "208001"],
        correctAnswer: "208001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Varanasi?",
        answers: ["221002", "221001", "221003", "221004"],
        correctAnswer: "221001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Allahabad?",
        answers: ["211003", "211002", "211001", "211004"],
        correctAnswer: "211001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Agra?",
        answers: ["202004", "282002", "282003", "282001"],
        correctAnswer: "282001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Meerut?",
        answers: ["250002", "250001", "250003", "250004"],
        correctAnswer: "250001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Ghaziabad?",
        answers: ["201001", "201002", "201003", "201004"],
        correctAnswer: "201001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Bareilly?",
        answers: ["243003", "243002", "243001", "243004"],
        correctAnswer: "243001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Aligarh?",
        answers: ["202001", "202002", "202003", "202004"],
        correctAnswer: "202001"
    },
    {
        question: "What is the capital city of Uttar Pradesh Moradabad?",
        answers: ["244001", "244002", "244003", "244004"],
        correctAnswer: "244001"
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