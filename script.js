const message =
  "Thank you for submitting your message. We will respond in 48 hours max.";

document
  .getElementById("contact-form")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });
