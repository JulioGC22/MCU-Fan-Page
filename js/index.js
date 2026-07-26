

// ARRAY contiaing MCU facts

let mcuFacts = ['Marvel was originally owned by Paramount.', 
    'Black Panther is the only MCU film with a Academy Award wins.',
    'Guardians of the Galaxy is the first MCU film to drop an F bomb',
    'Thor states he is 1,500 years old in Infinity War.',
    'Andrew Garfield was supposed to be the Spider-Man for the MCU.',
    'The last Stan Lee Cameo was in Avengers: Endgame'];

// Creating a FUNCTION that picks a random fact and updates the Paragraph

function randFacts(facts) { 
    return facts[Math.floor(Math.random() * facts.length)];
}

// EVENTHANDLER this will trigger the function when button is pressed
document.getElementById('clickBtn').addEventListener("click", function() {
    document.getElementById('factMsg').textContent = randFacts(mcuFacts);
});