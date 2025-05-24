document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll("button.subButton").forEach(button => {
        button.addEventListener("click", function () {
            alert("An error has occurred. Please contact support@adelaiderentalbikes.com");
            fetch("/track-attempt", { method: "POST" })
        }), { once: true }
    });


});


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(this); // Collect the form data
  
    // Send the data using Fetch API (AJAX)
    fetch("/submit-form", {
      method: "POST",
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        // Show success message in the pop-up
        showPopup("Form submitted successfully!");
      })
      .catch(error => {
        // Show error message in the pop-up
        showPopup("An error occurred while submitting the form.");
      });
  });
  
  // Function to display the popup notification
  function showPopup(message) {
    const popupModal = document.getElementById("popupModal");
    const popupMessage = document.getElementById("popupMessage");
    const popupCloseBtn = document.getElementById("popupCloseBtn");
  
    popupMessage.textContent = message; // Set the message
    popupModal.style.display = "flex"; // Show the popup modal
  
    // Close the popup when the close button is clicked
    popupCloseBtn.onclick = function () {
      popupModal.style.display = "none";
    };
  
    // Close the popup if the user clicks anywhere outside the modal
    window.onclick = function (event) {
      if (event.target === popupModal) {
        popupModal.style.display = "none";
      }
    };
  }
  