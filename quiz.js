function submitQuiz() {
    var score = 0;
    var answers = [];
    var form = document.getElementById('quiz-form');
    var inputs = form.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
            answers.push(inputs[i].value); // Push the selected answer to the answers array
        }
    }

    // Store the answers array in localStorage
    localStorage.setItem('quizAnswers', JSON.stringify(answers));

    // Redirect to the score page
    window.location.href = "score.html";
}
