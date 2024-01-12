// script.js

function appendToDisplay(value) {
    // Get the display element
    var displayElement = document.getElementById("searchbar");

    // Append the clicked value to the display
    displayElement.value += value;
}

function clearDisplay() {
    // Get the display element and clear its value
    document.getElementById("searchbar").value = '';
}

function removeFirstDigit() {
    var currentDisplay = document.getElementById('searchbar').value;
    document.getElementById('searchbar').value = currentDisplay.slice(1);
}

function calculateResult() {
    // Get the display element and evaluate its content
    var displayElement = document.getElementById("searchbar");
    try {
        // Use eval() with caution; make sure the input is safe
        displayElement.value = eval(displayElement.value);
    } catch (error) {
        // Handle potential errors, e.g., if the input is not a valid expression
        displayElement.value = 'Error';
    }
}
