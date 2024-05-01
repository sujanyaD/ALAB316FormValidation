
  function validateForm() {
    // Get the values of the form fields
    let username = document.getElementById("usernm").value.trim();
    let email = document.getElementById("emailReg").value.trim();
    let password = document.getElementById("pwd").value.trim();
    let passwordCheck = document.getElementById("pwdchk").value.trim();
    let submitFrm = document.getElementById("submitForm")
    let termsAccepted = document.querySelector('input[name="terms"]').checked;

    // Validate username
    if (username === "") {
      alert("Please enter a username.");
      return false;
    } else if (username.length < 4) {
      alert("Username must be at least 4 characters long.");
      return false;
    } else if (!/^\w{4,}$/.test(username)) {
      alert("Username cannot contain special characters or whitespace.");
      return false;
    }

    // Validate email
    if (email === "") {
      alert("Please enter an email address.");
      return false;
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return false;
    } else if (email.endsWith("@example.com")) {
      alert("Email domain 'example.com' is not allowed.");
      return false;
    }

    // Validate password
    if (password === "") {
      alert("Please enter a password.");
      return false;
    } else if (password.length < 12) {
      alert("Password must be at least 12 characters long.");
      return false;
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
      alert("Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.");
      return false;
    } else if (/password/i.test(password)) {
      alert("Password cannot contain the word 'password'.");
      return false;
    }

    // Validate password match
    if (password !== passwordCheck) {
      alert("Passwords do not match.");
      return false;
    }

    // Validate terms acceptance
    if (!termsAccepted) {
      alert("Please accept the terms of use.");
      return false;
    }

    // If all validations pass, the form is valid
    alert("Registration successful!");
    return true;
  }


  function isValidEmail(email) {
    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }




