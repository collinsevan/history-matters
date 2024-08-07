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
    const exitButton = document.getElementById('exitButton');
    const exitConfirmationModal = document.getElementById('exitConfirmationModal');
    const confirmExitButton = document.getElementById('confirmExitButton');
    const cancelExitButton = document.getElementById('cancelExitButton');
    let questions = [];
    let currentQuestionIndex = 0;
    let selectedQuestions = [];
    let score = 0;
    let timerInterval;
    let timeRemaining;

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

    // Function to start the timer
    function startTimer() {
        timeRemaining = 10;
        const timerDisplay = document.getElementById('timer');
        timerDisplay.textContent = timeRemaining;

        if (timerInterval) {
            clearInterval(timerInterval);
        }

        timerInterval = setInterval(() => {
            timeRemaining--;
            timerDisplay.textContent = timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                handleTimeout();
            }
        }, 1000);
    }

    // Function to handle timeout
    function handleTimeout() {
        checkAnswer(null, selectedQuestions[currentQuestionIndex].answer);
    }

    // Function to display a question
    function displayQuestion(index) {
        if (index < 0 || index >= selectedQuestions.length) return;

        const question = selectedQuestions[index];
        playContainer.innerHTML = `
            <div class="question">
                <h3>
                    Question ${index + 1}: <span id="timer">10</span>
                </h3>
                <p>${question.question}</p>
                <div class="options-container">
                    ${shuffleArray([...question.options]).map((option, optionIndex) => 
                        `<div class="option" data-index="${optionIndex}">
                            <span class="option-text">${option}</span>
                            <span class="icon-check hidden">&#10003;</span>
                            <span class="icon-cross hidden">&#10007;</span>
                        </div>`
                    ).join('')}
                </div>
            </div>
        `;

        startTimer();

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
        if (selectedOption) {
            const selectedText = selectedOption.querySelector('.option-text').textContent.trim();
            const checkIcon = selectedOption.querySelector('.icon-check');
            const crossIcon = selectedOption.querySelector('.icon-cross');

            if (selectedText === correctAnswer) {
                selectedOption.style.backgroundColor = '#4CAF50'; // Green
                checkIcon.classList.remove('hidden');
            } else {
                selectedOption.style.backgroundColor = '#F44336'; // Red
                crossIcon.classList.remove('hidden');
            }
        } else {
            // Handle timeout as incorrect
            const options = document.querySelectorAll('.option');
            options.forEach(option => {
                if (option.querySelector('.option-text').textContent.trim() === correctAnswer) {
                    option.style.backgroundColor = '#4CAF50';
                    option.querySelector('.icon-check').classList.remove('hidden');
                }
            });
        }

        // Disable all options after selection or timeout
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

    // Function to handle exit button click
    function handleExit() {
        exitConfirmationModal.classList.remove('hidden');
    }

    // Function to confirm exit
    function confirmExit() {
        exitConfirmationModal.classList.add('hidden');
        window.close(); 
    }

    // Function to cancel exit
    function cancelExit() {
        exitConfirmationModal.classList.add('hidden');
    }

    // Event listeners for play buttons
    playButton.addEventListener('click', startQuiz);
    playIcon.addEventListener('click', startQuiz);

    // Event listener for exit button
    if (exitButton) {
        exitButton.addEventListener('click', handleExit);
    }

    if (confirmExitButton) {
        confirmExitButton.addEventListener('click', confirmExit);
    }

    if (cancelExitButton) {
        cancelExitButton.addEventListener('click', cancelExit);
    }

    questions = window.questions || [];
});