let currentQuestion = 0; // Variable to keep track of the current question index
let score = 0; // Variable to keep track of the user's score
let timeinterval; // Variable to store the setInterval ID for the timer

// Array to store the quiz questions
const questions = [
    {
        question: "What is the capital city of delhi Narela?",
        answers: ["110040", "110006", "110001", "110085"],
        correctAnswer: "110040"
    },
    {
        question: "What is the capital city of delhi Chandni Chowk?",
        answers: ["110040", "110091", "110075", "110006"],
        correctAnswer: "110006"
    },
    {
        question: "What is the capital city of delhi rohini?",
        answers: ["110017", "110024", "110024", "110085"],
        correctAnswer: "110085"
    },
    {
        question: "What is the capital city of delhi Connaught Place?",
        answers: ["110091", "110005", "110001", "110091"],
        correctAnswer: "110001"
    },
    {
        question: "What is the capital city of delhi Dwarka?",
        answers: ["110075", "110017", "110005", "110040"],
        correctAnswer: "110075"
    },
    {
        question: "What is the capital city of delhi Saket?",
        answers: ["11091", "110017", "110085", "110001"],
        correctAnswer: "110017"
    },
    {
        question: "What is the capital city of delhi Karol Bagh?",
        answers: ["110085", "110040", "110005", "110024"],
        correctAnswer: "110005"
    },
    {
        question: "What is the capital city of delhi Mayur Vihar?",
        answers: ["110091", "110017", "110024", "110085"],
        correctAnswer: "110091"
    },
    {
        question: "What is the capital city of delhi Vasant Kunj?",
        answers: ["110040", "110024", "110070", "110091"],
        correctAnswer: "110070"
    },
    {
        question: "What is the capital city of delhi Lajpat Nagar?",
        answers: ["110024", "110017", "110070", "110005"],
        correctAnswer: "110024"
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