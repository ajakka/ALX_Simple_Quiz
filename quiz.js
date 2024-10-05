function checkAnswer() {
    // The correct answer to the quiz question
    const correctAnswer = "4";
    
    // Get the selected radio button (the user's answer)
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Ensure an answer was selected
    if (!selectedOption) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return;
    }
    
    // Get the user's answer
    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
