document.addEventListener('DOMContentLoaded', function () {
    const instructionsButton = document.querySelector('[data-toggle="modal"]');
    const instructionsModal = document.getElementById('instructionsModal');
    const closeModalButton = document.querySelector('.close');
    const playButton = document.getElementById('playButton');
    const playIcon = document.getElementById('playIcon');
    const playContainer = document.querySelector('.play-container');
    const completionMessage = document.getElementById('completionMessage');
    const scoreMessage = document.getElementById('scoreMessage');
    const restartButton = document.getElementById('restartButton');
    let questions = [];
    let currentQuestionIndex = 0;
    let selectedQuestions = [];
    let score = 0;

    // Open the modal when the instructions button is clicked
    instructionsButton.addEventListener('click', function (e) {
        e.preventDefault();
        instructionsModal.classList.remove('hidden');
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function () {
        instructionsModal.classList.add('hidden');
    });

    // Close the modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === instructionsModal) {
            instructionsModal.classList.add('hidden');
        }
    });

    // Function to shuffle an array using the Fisher-Yates algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to display a question
    function displayQuestion(index) {
        if (index < 0 || index >= selectedQuestions.length) return;

        const question = selectedQuestions[index];
        const shuffledOptions = shuffleArray([...question.options]);
        playContainer.innerHTML = `
            <div class="question">
                <h3>Question ${index + 1}:</h3>
                <p>${question.question}</p>
                <br>
                <div class="options-container">
                    ${shuffledOptions.map((option, optionIndex) => `<div class="option" data-index="${optionIndex}">${option}</div><br>`).join('')}
                </div>
            </div>
        `;

        // Add click event listener to each option
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.addEventListener('click', function () {
                checkAnswer(option, question.answer);
            });
        });
    }

    // Function to check if the selected answer is correct
    function checkAnswer(selectedOption, correctAnswer) {
        const selectedText = selectedOption.textContent.trim();
        if (selectedText === correctAnswer) {
            selectedOption.style.backgroundColor = '#4CAF50'; // Green
            score++;
        } else {
            selectedOption.style.backgroundColor = '#F44336'; // Red
        }

        // Disable all options after selection
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.style.pointerEvents = 'none';
        });

        // Move to the next question
        setTimeout(function () {
            currentQuestionIndex++;
            if (currentQuestionIndex < selectedQuestions.length) {
                displayQuestion(currentQuestionIndex);
            } else {
                showCompletionMessage();
            }
        }, 1500);
    }

    // Function to display completion message
    function showCompletionMessage() {
        playContainer.innerHTML = `
            <div id="completionMessage">
                <p>Quiz completed!</p>
                <p>Your score is ${score} out of ${selectedQuestions.length}.</p>
                <button id="restartButton">
                    <span class="material-symbols-outlined">replay</span>
                    <br>Play Again
                </button>
            </div>
        `;

        // Add a delay to ensure DOM is updated
        setTimeout(() => {
            const restartButton = document.getElementById('restartButton');
            if (restartButton) {
                restartButton.addEventListener('click', function () {
                    startQuiz();
                });
            } else {
                console.error('Restart button not found');
            }
        }, 0);
    }

    // Function to start the quiz
    function startQuiz() {
        selectedQuestions = shuffleArray([...questions]).slice(0, 10);
        currentQuestionIndex = 0;
        score = 0;
        displayQuestion(currentQuestionIndex);
    }

    // Event listeners for play buttons
    playButton.addEventListener('click', startQuiz);
    playIcon.addEventListener('click', startQuiz);

    questions = window.questions || [];
});