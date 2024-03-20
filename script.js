document.addEventListener("DOMContentLoaded", function() {
  const aboutText = document.getElementById("about-text");
  const text = "Aspiring Data Scientist with a passion for leveraging technology to extract insights and drive innovation...";
  const words = text.split(" ");
  let index = 0;

  function displayText() {
      if (index < words.length) {
          aboutText.innerHTML += words[index] + " "; // Add word with space
          index++;
          setTimeout(displayText, 100); // Adjust speed here (in milliseconds)
      }
  }

  aboutText.innerHTML = ""; // Clear existing text
  displayText();
});
