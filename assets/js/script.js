document.addEventListener('DOMContentLoaded', function() {
    const instructionsButton = document.querySelector('[data-toggle="modal"]');
    const instructionsModal = document.getElementById('instructionsModal');
    const closeModalButton = document.querySelector('.close');
    
    // Open the modal when the instructions button is clicked
    instructionsButton.addEventListener('click', function(e) {
        e.preventDefault();
        instructionsModal.classList.remove('hidden');
    });

    // Close the modal when the close button is clicked
    closeModalButton.addEventListener('click', function() {
        instructionsModal.classList.add('hidden');
    });

    window.addEventListener('click', function(event) {
        if (event.target === instructionsModal) {
            instructionsModal.classList.add('hidden');
        }
    });
});