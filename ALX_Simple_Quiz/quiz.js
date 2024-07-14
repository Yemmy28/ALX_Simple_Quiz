// Function to check the answer
function checkAnswer() {
    // Correct answer
    let correctAnswer = "4";

    // Retrieve the user's answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Get feedback element
    let feedback = document.getElementById("feedback");

    // Compare userAnswer with correctAnswer and give feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
