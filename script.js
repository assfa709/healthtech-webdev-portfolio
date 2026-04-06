// 1. Grab the element from HTML using their IDs
const button = document.getElementById("action-btn")
const textElement = document.getElementById("dynamic-text")

// 2. Add an 'event listener' to the button. It waits for a click.
//button.addEventListener("click", function(event){
    // Prevent the link from jumping to the top of the page
    //event.preventDefault();

    // 3. Change the dynamicaly
    //textElement.textContent = "Data loaded successfully! Welcome to my digital health portfolio"
    //textElement.style.color = "#E67E22"; // Change tect color to orange
    //textElement.style.fontWeight = "bold"; // Make it bold 
})

// Grab the new calculator elments
const clacButton = document.getElementById("calc-btn")
const weightInput = document.getElementById("weight")
const heightInput = document.getElementById("height")
const resultDisplay = document.getElementById("bmi-result")

// Add an event listener to calculate button
clacButton.addEventListener("click", function() {

    // 1. Get the number typed by the user
    let weight = parseFloat(weightInput.value);
    let heightCm = parseFloat(heightInput.value);

    // 2. Data validation (make sure they actualy typed number)
    if (isNaN(weight) || isNaN(heightCm) || weight <=0 || heightCm <= 0) {
        resultDisplay.textContent = "please enter valid positive numbers.";
        resultDisplay.style.color = "red";
         return; // Stop the function here
    }

    // 3. Perform the math: BMI = kg/(m * m)
    let heightM = heightCm/100; // Convert cm to meter
    let bmi = weight/(heightM * heightM);
    bmi = bmi.toFixed(1); //Round to 1 decimal place

    // 4. Determin the public health category (if / Else Logic)
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // 5. Display the result on the screen
    resultDisplay.textContent = `Your BMI is ${bmi} (${category})`;
    resultDisplay.style.color = "#1a3a5f"; // Change back to navy blue
});