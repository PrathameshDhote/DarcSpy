document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var feedback = document.getElementById('feedback-text').value;
    // Here you can process the feedback, send it to a server, etc.
    console.log(feedback); // For demonstration, just logging the feedback to console
    alert('Thank you for your feedback!');
});