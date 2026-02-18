// **************VIEW NUMBER OF VISITS IN LOCAL STORAGE******************
// Initialize display element variable
const visitsDisplay = document.querySelector(".visits");

//Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
//if (numVisits !== 0) {
//    visitsDisplay.textContent = numVisits;
//} else {
//    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
//}

if (numVisits !== null && numVisits !== 0 && numVisits !== undefined) {
    visitsDisplay.textContent = numVisits;
} else {
    // Handles cases where it is 0 or explicitly null
    visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

// increment the number of visits by one.
numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

// 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.


// **************MY TRADITIONAL FOOTER CODE******************
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
