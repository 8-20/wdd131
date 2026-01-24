// Function to calculate wind chill based on the standard formula
function calculateWindChill(tempF, speedMph) {
    // Formula only valid for temperatures <= 50°F and wind speeds >= 3 mph
    if (tempF <= 50 && speedMph >= 3) {
        const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speedMph, 0.16)) + (0.4275 * tempF * Math.pow(speedMph, 0.16));
        return windChill.toFixed(2); // Return result rounded to 2 decimal places
    } else {
        return "N/A (Formula requires Temp. <= 50°F and Wind SPeed >= 3 mph)";
    }
}

// Function to extract data, perform calculation, and embed the result
//function calculateAndDisplayWindChill() {
    // 1. Extract data from HTML input fields using document.getElementById
    const temperatureInput = document.getElementById('temperature');
    const temperatureString = temperatureInput.innerText; // find the value inside the element
    
    const windSpeedInput = document.getElementById('windSpeed');
    const windSpeedString = windSpeedInput.innerText; // find the value inside the element

    const temperature = parseFloat(temperatureString);
    const windSpeed = parseFloat(windSpeedString);

    // 2. Perform the calculation
    const windChillValue = calculateWindChill(temperature, windSpeed);

    // 3. Embed the result back into the HTML document
    const resultParagraph = document.getElementById('windChillResult');

    if (!isNaN(temperature) && !isNaN(windSpeed)) {
        resultParagraph.textContent = `${windChillValue}°F`;
    } else {
        resultParagraph.textContent = "Please enter valid numbers for both temperature and wind speed.";
    }


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