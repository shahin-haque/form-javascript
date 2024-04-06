const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const myName = document.querySelector("#name").value;
  const myEmail = document.querySelector("#email").value;
  const myPhone = document.querySelector("#phone").value;
  const myMessage = document.querySelector("#message").value;
  // Validate email
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(myEmail)) {
    document.getElementById("response").innerHTML =
      '<div id="error">Invalid email address.</div>';
    return;
  }

  // Validate phone number
  let phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(myPhone)) {
    document.getElementById("response").innerHTML =
      '<div id="error">Invalid phone number. Please enter 10 digits.</div>';
    return;
  }
  // If all validations pass, send the data to the server (this is a dummy example, no actual server communication here)
  document.getElementById("response").innerHTML =
    '<div id="success">Form submitted successfully!</div>';
  // You can add an AJAX request here to send form data to the server

  console.log(`
Name:${myName}, Email: ${myEmail}, Phone: ${myPhone}, Message : ${myMessage}
`);
  document.getElementById("contactForm").reset();
});

// This is a JavaScript code snippet that validates a contact form before submitting it.
