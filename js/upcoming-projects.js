


//setting up projects properties
const projDoom = {
    title: "Avengers: Doomsday",
    releaseDate: "December 18, 2026",
    poster: "../img/avengers-doomsday.jpg"
};

const projSecretWars = {
    title: "Avengers: Secret Wars",
    releaseDate: "December 17, 2027",
    poster: "../img/secret-wars.jpg"
};

const projBlackPanther = {
    title: "Black Panther III",
    releaseDate: "December 15, 2028",
    poster: "../img/black-panther-3.jpg"
};

const projXmen = {
    title: "X-Men",
    releaseDate: "May 5, 2028",
    poster: "../img/x-men.jpg"
};

const projGhostRider = {
    title: "Ghost Rider",
    releaseDate: "July 28, 2028",
    poster: "../img/ghost-rider.jpg"
};

// projects craeted are now inside an array
const projects = [projDoom, projSecretWars, projXmen, projGhostRider, projBlackPanther];

// Release date countdown or TBD if release date not anounced 
function daysTilRelease(releaseDate){
        //TBD will be empty if unannounced release date, so no countdown math can run
        if(releaseDate === null){
            return "";
        }
        const today = new Date();
        const daysLeft = Math.floor((new Date (releaseDate) - today)/86400000);

        if (daysLeft < 0){
            return "Available to Watch";
        } else {
            return daysLeft + " Days Til Release";
        }
    };


//Displaying the upcomming prjects details
function addOneCard(project) {
    //Using the empty div id = projects container already sitting in the HTML -
    //this where the finshed card will be attched
    const container = document.getElementById('projects');

    //Creating the outer wrapper div  for this one card, and giving it class
    // so style.css can style
    const releaseDiv = document.createElement('div');
    releaseDiv.className = 'release';

    //Title element and setting its content (text between the tags) using the projects title
    const relH = document.createElement('h3');
    const dateOrNo = project.releaseDate == null ? `${project.title} (TBD)` : ` ${project.title} (${project.releaseDate})`;
    relH.textContent = dateOrNo;

    //Poster image element - images dont have text content.
    //Attribute is used instead: src (which file to load) and alt (accessibility text)
    const relIMG = document.createElement('img');
    relIMG.src = project.poster;
    relIMG.alt = project.title;

    //Countdown paragraph and its content by calling daysTilrelease() with this
    //projects releaseDate - reuses the function already created
    const relP = document.createElement('p');
    relP.textContent = daysTilRelease(project.releaseDate);

    //Nesting all the pieces INSIDE the releaseDiv, inorder to have them appear
    releaseDiv.appendChild(relH);
    releaseDiv.appendChild(relIMG);
    releaseDiv.appendChild(relP);

    //Attching all the whole finished card in the #project conatiner
    container.appendChild(releaseDiv);
};


//Calls all the upcomming projects to appear to the site
projects.forEach((upcomingProj) => {
     addOneCard(upcomingProj);
});



