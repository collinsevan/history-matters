document.addEventListener('DOMContentLoaded', function () {
    const instructionsButton = document.querySelector('[data-toggle="modal"]');
    const instructionsModal = document.getElementById('instructionsModal');
    const closeModalButton = document.querySelector('.close');
    const playButton = document.getElementById('playButton');
    const playIcon = document.getElementById('playIcon');
    const playContainer = document.querySelector('.play-container');
    let questions = window.questions || [];
    let currentQuestionIndex = 0;
    let selectedQuestions = [];

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
        playContainer.innerHTML = `
            <div class="question">
                <h3>Question ${index + 1}:</h3>
                <p>${question.question}</p>
                <ul>
                    ${question.options.map(option => `<li>${option}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Function to start the quiz
    function startQuiz() {
        if (questions.length === 0) {
            console.error("Questions array is empty or not defined.");
            return;
        }
        selectedQuestions = shuffleArray([...questions]).slice(0, 10);
        currentQuestionIndex = 0;
        displayQuestion(currentQuestionIndex);
    }

    // Event listeners for play buttons
    playButton.addEventListener('click', startQuiz);
    playIcon.addEventListener('click', startQuiz);
});