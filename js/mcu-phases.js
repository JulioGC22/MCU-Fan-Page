




//Grab all the phase headers
const phaseHeaders = document.querySelectorAll('.phaseHeader');

//Loop through each header and ass a click event listener
phaseHeaders.forEach(function(header) {
    //Hide all phase content by default on page load
    header.nextElementSibling.style.display = 'none';

    //Adding click event to each header 
    header.addEventListener('click', function(){
        // This will grab the content div directly after the clicked header
        const content = header.nextElementSibling;

        // if/else to toggle show or hide
        if (content.style.display === 'none') {
            content.style.display = 'block'; // show it
        } else {
            content.style.display = 'none'; // hide it
        }
    })
});