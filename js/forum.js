
/* 
Julio Gamez & Jul2193731
5/15/2026
*/


// Grabing  the form element
const form = document.getElementById('myForm');

// Creating a listening event for the form submission
form.addEventListener('submit', function(event) {

    // Prevent the page from submitting
    event.preventDefault();

    // Grabs the values from each input field
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const character = document.getElementById('userCharacter').value.trim();
    const message = document.getElementById('userMessage').value.trim();

    // Grab the error and success 
    const errorDiv = document.getElementById('formError');
    const successDiv = document.getElementById('formMessage');

    // Clears any previous messages
    errorDiv.textContent = '';
    successDiv.textContent = '';

    // Validate each field using if/else
    if (name === '') {
        errorDiv.textContent = 'Please enter your name.';
    } else if (email === '') {
        errorDiv.textContent = 'Please enter your email.';
    } else if (!email.includes('@') || !email.includes('.')) {
        errorDiv.textContent = 'Please enter a valid email address.';
    } else if (character === '') {
        errorDiv.textContent = 'Please enter your favorite MCU character.';
    } else if (message === '') {
        errorDiv.textContent = 'Please enter a message.';
    } else if (message.length < 10) {
        errorDiv.textContent = 'Your message must be at least 10 characters long.';
    } else {
        // All fields passed validation
        successDiv.textContent = 'Thank you ' + name + '! Your message has been submitted!';
        form.reset();
    }

});