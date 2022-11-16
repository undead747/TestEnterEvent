// Execute a function when the user presses a key on the keyboard
document.getElementById("search").addEventListener("keydown", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      alert(document.getElementById("search").value)
    }
  });