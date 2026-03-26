// script.js - JavaScript logic for form validation

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();   // Stop form from refreshing the page

    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let isValid = true;

    // Get values from form
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    // 1. Name Validation
    if (fullName.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters long";
        isValid = false;
    }

    // 2. Email Validation
    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        isValid = false;
    }

    // 3. Phone Validation (exactly 10 digits)
    if (phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits";
        isValid = false;
    }

    // 4. Password Validation
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // If everything is valid
    if (isValid) {
        const successMsg = document.getElementById("successMessage");
        successMsg.textContent = "✅ Registration Successful! Welcome, " + fullName + "!";
        successMsg.style.display = "block";

        // Reset the form after successful submission
        setTimeout(() => {
            document.getElementById("registrationForm").reset();
            successMsg.style.display = "none";
        }, 3000);
    }
});