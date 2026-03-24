// Set your default PIN
const correctPin = "251019";  

// Wait for button click
document.getElementById("submit-pin").addEventListener("click", () => {
  const entered = document.getElementById("pin-input").value;

  if (entered === correctPin) {
    // PIN correct → redirect to main.html
    window.location.href = "tunandhninforeverlove.html";  
  } else {
    // PIN incorrect → show error message
    document.getElementById("error-msg").textContent = "Incorrect PIN!";
  }
});
