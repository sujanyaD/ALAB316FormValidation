
function validateForm() {
  // e.preventDefault();
  // Get the values of the form fields
 let name1 = document.getElementById("usernm").value;
  let email = document.getElementById('emailReg').value;
  let password = document.getElementById('pwd').value;
  let passwordCheck = document.getElementById('pwdchk').value;


  //Create a variable to track the validation status
  let isValid = true;
  // Validate the name field
  if (name1 === '') {
    isValid = false;
    window.alert("Please enter your name.");

}
if (email === '') {
  isValid = false;
  alert('Please enter your email address.');
} else if (!isValidEmail(email)) {
  isValid = false;
  window.alert('Please enter a valid email address.');
}

// Validate the password field
if (password === '') {
  isValid = false;
  alert('Please enter your password.');
} else if (password.length < 6) {
  isValid = false;
  Window.alert('Password should be at least 6 characters long.');
}

// Return the validation status
// return isValid;
return;
}

// Helper function to validate email using regular expression
function isValidEmail(emailReg) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailReg);
}


