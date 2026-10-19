// Select the HTML elements
const minutesInput = document.querySelector("#minutesInput");
const checkBtn = document.querySelector("#checkBtn");
const result = document.querySelector("#result");

// Respond to the button click
checkBtn.addEventListener("click", function () {
  const rawValue = minutesInput.value;   // text the user typed
  const minutes = Number(rawValue);      // convert it to a number

  // Blank or negative values produce an error
  if (rawValue.trim() === "" || isNaN(minutes)) {
    result.textContent = "Error: Please enter the number of minutes you've studied.";
    result.style.color = "red";
  } else if (minutes < 0) {
    result.textContent = "Error: Minutes cannot be negative.";
    result.style.color = "red";
  } else if (minutes < 25) {
    result.textContent = "Keep going!";
    result.style.color = "green";
  } else if (minutes < 50) {
    result.textContent = "Take a 5-minute break.";
    result.style.color = "#0b2a5b";
  } else if (minutes < 90) {
    result.textContent = "Take a 10-minute break.";
    result.style.color = "#0b2a5b";
  } else {
    result.textContent = "Take a longer break and recharge.";
    result.style.color = "darkorange";
  }
});
