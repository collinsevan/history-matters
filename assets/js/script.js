document.addEventListener('DOMContentLoaded', function() {
    const instructionsButton = document.querySelector('[data-toggle="modal"]');
    const instructionsModal = document.getElementById('instructionsModal');
    const closeModalButton = document.querySelector('.close');
    const playButton = document.getElementById('playButton');
    const playIcon = document.getElementById('playIcon');
    const playContainer = document.querySelector('.play-container');

    // Open the modal when the instructions button is clicked
    instructionsButton.addEventListener('click', function(e) {
        e.preventDefault();
        instructionsModal.classList.remove('hidden');
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function() {
        instructionsModal.classList.add('hidden');
    });

    // Close the modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === instructionsModal) {
            instructionsModal.classList.add('hidden');
        }
    });

    // Function to load questions from the JSON file
    async function loadQuestions() {
        try {
            const response = await fetch('assets/data/questions.json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Failed to load questions:', error);
            return [];
        }
    }

    // Function to shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to display questions inside the play-container
    function displayQuestions(questions) {
        playContainer.innerHTML = ''; // Clear existing content
        
        questions.forEach((question, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            questionElement.innerHTML = `
                <h3>Question ${index + 1}:</h3>
                <p>${question.question}</p>
                <ul>
                    ${question.options.map(option => `<li>${option}</li>`).join('')}
                </ul>
            `;
            playContainer.appendChild(questionElement);
        });
    }

    // Function to start the quiz
    async function startQuiz() {
        const allQuestions = await loadQuestions();
        const shuffledQuestions = shuffleArray(allQuestions);
        const selectedQuestions = shuffledQuestions.slice(0, 10);
        displayQuestions(selectedQuestions);
    }

    // Event listeners for play button and play icon
    playButton.addEventListener('click', function() {
        startQuiz();
    });

    playIcon.addEventListener('click', function() {
        startQuiz();
    });
});