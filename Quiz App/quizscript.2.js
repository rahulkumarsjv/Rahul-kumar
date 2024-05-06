let currentQuestion = 0; // Variable to keep track of the current question index
let score = 0; // Variable to keep track of the user's score
let timeinterval; // Variable to store the setInterval ID for the timer
// Array to store the quiz questions
const questions = [
    {
        question: "What is the capital city of Mumbai Colaba?",
        answers: ["400001", "400005", "400007", "400021"],
        correctAnswer: "400005"
    },
    {
        question: "What is the capital city of Mumbai Bandra?",
        answers: ["400052", "400051", "400050", "400053"],
        correctAnswer: "400050"
    },
    {
        question: "What is the capital city of Mumbai Andheri?",
        answers: ["400053", "400058", "400059", "400072"],
        correctAnswer: "400058"
    },
    {
        question: "What is the capital city of Mumbai Dadar?",
        answers: ["400014", "400028", "400031", "400014"],
        correctAnswer: "400028"
    },
    {
        question: "What is the capital city of Mumbai Worli?",
        answers: ["400018", "400025", "400030", "400018"],
        correctAnswer: "400030"
    },
    {
        question: "What is the capital city of Mumbai Malad?",
        answers: ["400062", "400063", "400064", "400065"],
        correctAnswer: "400064"
    },
    {
        question: "What is the capital city of Mumbai Borivali?",
        answers: ["400091", "400092", "400093", "400094"],
        correctAnswer: "400092"
    },
    {
        question: "What is the capital city of Mumbai Kurla?",
        answers: ["400071", "400070", "400072", "400073"],
        correctAnswer: "400071"
    },
    {
        question: "What is the capital city of Mumbai Powai?",
        answers: ["400076", "400077", "400078", "400079"],
        correctAnswer: "400076"
    },
    {
        question: "What is the capital city of Mumbai Goregaon?",
        answers: ["400062", "400065", "400064", "400063"],
        correctAnswer: "400063"
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