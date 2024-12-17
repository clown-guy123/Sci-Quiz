// script.js
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;

const questions = [
    {
        question: "What is transpiration?",
        options: {
            A: "Transpiration is the process of water movement through a plant and its evaporation from aerial parts, primarily from the leaves.",
            B: "Transpiration is the process of photosynthesis in plants.",
            C: "Transpiration refers to the absorption of nutrients by plant roots.",
            D: "Transpiration is the movement of water from the soil to the roots."
        },
        correctAnswer: "A"
    },
    {
        question: "What do stomata allow to enter the plant?",
        options: {
            A: "Water",
            B: "Nutrients",
            C: "Carbon dioxide",
            D: "Oxygen"
        },
        correctAnswer: "C"
    },
    {
        question: "What is the main function of xylem?",
        options: {
            A: "The main function of xylem is to transport water and minerals.",
            B: "To provide structural support to the plant.",
            C: "To store food for the plant.",
            D: "To facilitate photosynthesis in leaves."
        },
        correctAnswer: "A"
    },
    {
        question: "Can stomata close? Why is this important?",
        options: {
            A: "Stomata only close at night for photosynthesis.",
            B: "Yes, stomata can close, and this is important for conserving water and regulating gas exchange.",
            C: "Stomata cannot close under any circumstances.",
            D: "Closing stomata increases water loss."
        },
        correctAnswer: "B"
    },
    {
        question: "What do phloem tissues transport?",
        options: {
            A: "Sugars and other organic nutrients",
            B: "Oxygen and nitrogen",
            C: "Carbon dioxide",
            D: "Water and minerals"
        },
        correctAnswer: "A"
    },
    {
        question: "In which direction does xylem carry water?",
        options: {
            A: "Upward, from roots to leaves",
            B: "Horizontally, between branches",
            C: "Inward, from the atmosphere to the roots",
            D: "Downward, from leaves to roots"
        },
        correctAnswer: "A"
    },
    {
        question: "How does transpiration benefit a plant?",
        options: {
            A: "Transpiration helps plants absorb carbon dioxide for photosynthesis.",
            B: "Transpiration increases soil nutrient levels directly.",
            C: "Transpiration benefits a plant by facilitating water and nutrient uptake, cooling the plant, and maintaining turgor pressure.",
            D: "Transpiration prevents plants from losing water during drought."
        },
        correctAnswer: "C"
    },
    {
        question: "What happens to water absorbed by the roots?",
        options: {
            A: "Water is only used for photosynthesis.",
            B: "Water absorbed by the roots is transported through the plant for various functions and may be lost through transpiration.",
            C: "Water is stored in the roots indefinitely.",
            D: "Water is converted into glucose immediately."
        },
        correctAnswer: "B"
    },
    {
        question: "Why is carbon dioxide important for plants?",
        options: {
            A: "Carbon dioxide is harmful to plants and inhibits their growth.",
            B: "Plants do not require carbon dioxide for photosynthesis.",
            C: "Carbon dioxide is primarily used by animals for respiration.",
            D: "Carbon dioxide is important for plants because it is a key ingredient in photosynthesis, enabling them to produce energy and oxygen."
        },
        correctAnswer: "D"
    },
    {
        question: "How do phloem and xylem work together in a plant?",
        options: {
            A: "Phloem absorbs sunlight while xylem stores carbon dioxide.",
            B: "Phloem transports nutrients and sugars, while xylem transports water and minerals, working together to support plant growth.",
            C: "Phloem transports water and minerals, while xylem transports nutrients and sugars.",
            D: "Phloem and xylem are both responsible for photosynthesis in plants."
        },
        correctAnswer: "B"
    }
];

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").textContent = currentQuestion.question;
        const options = currentQuestion.options;
        document.querySelectorAll(".answer-btn").forEach((button, index) => {
            const optionKey = Object.keys(options)[index];
            button.textContent = `${optionKey}. ${options[optionKey]}`;
        });

        // Reset the timer for each question
        timeLeft = 30;
        document.getElementById("timer").textContent = timeLeft;
        clearInterval(timer);
        timer = setInterval(updateTimer, 1000);
    } else {
        showResult();
    }
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;
    } else {
        clearInterval(timer);
        checkAnswer(""); // Automatically move to next question if time runs out
    }
}

function checkAnswer(answer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("final-score").textContent = `Your score: ${score}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
    loadQuestion();
}

// Start the quiz
loadQuestion();
