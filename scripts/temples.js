// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

document.addEventListener('DOMContentLoaded', function () {
    // Get the span element by its ID
    const lastModifiedSpan = document.getElementById('lastModifiedDate');

    // Get the last modified date of the document
    const lastModified = document.lastModified;

    // Create a new Date object from the last modified string
    const dateObject = new Date(lastModified);

    // Format the date for display (e.g., using toLocaleDateString and toLocaleTimeString)
    const formattedDate = dateObject.toLocaleDateString() + ' ' + dateObject.toLocaleTimeString();

    // Update the innerHTML of the span with the formatted date
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = formattedDate;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
});