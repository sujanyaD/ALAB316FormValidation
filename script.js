
//document.addEventListener("DOMContentLoaded", function() {
// const registrationForm = document.getElementById("registration");
registration.addEventListener("submit",  (event) => {
   event.preventDefault();
   validateForm();
 });

function validateForm() {

  // Get the values of the form fields
  let username = document.getElementById("usernm").value.trim();
  let email = document.getElementById("emailReg").value.trim();
  let password = document.getElementById("pwd").value.trim();
  let passwordCheck = document.getElementById("pwdchk").value.trim();
  let termsAccepted = document.querySelector('input[name="terms"]').checked;
  let error= document.getElementById('errorDisplay');

  // Validate username
  if (username === "") {
      // alert("Please enter a username.");
      error.innerHTML="Please enter a username.";
      error.style.display="block";
      
     return ;
  } else if (username.length < 4) {
    error.innerHTML="Username must be at least 4 characters long.";
      error.style.display="block";
      return false;
  } else if (!/^\w{4,}$/.test(username)) {
      error.innerHTML="Username cannot contain special characters or whitespace.";
      error.style.display="block";
      return false;
  }

  // Validate email
  if (email === "") {
    error.innerHTML="Please enter an email address.";
    error.style.display="block";
      return false;
  } else if (!isValidEmail(email)) {
      error.innerHTML="Please enter a valid email address.";
      error.style.display="block";
      return false;
  } else if (email.endsWith("@example.com")) {
     error.innerHTML="Email domain 'example.com' is not allowed.";
     error.style.display="block";
      return false;
  }

  // Validate password
  if (password === "") {
    error.innerHTML="Please enter a password.";
    error.style.display="block";
      return false;
  } else if (password.length < 12) {
    error.innerHTML="Password must be at least 12 characters long.";
    error.style.display="block";
      return false;
  } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
    error.innerHTML="Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
    error.style.display="block";
      return false;
  } else if (/password/i.test(password)) {
    error.innerHTML="Password cannot contain the word 'password'.";
    error.style.display="block";
      return false;
  }

  // Validate password match
  if (password !== passwordCheck) {
    error.innerHTML="Passwords do not match.";
    error.style.display="block";
      return false;
  }

  // Validate terms acceptance
  if (!termsAccepted) {
      alert("Please accept the terms of use.");
      return false;
  }

  // If all validations pass, the form is valid
  alert("Registration successful!");
  //localStorage.setItem("username",username)
  addUsernamestolocalstorage("username",username)
  // localStorage.setItem("email",email)
  // localStorage.setItem("password",password)


  return true;
}

function isValidEmail(email) {
  // Regular expression for email validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function loginform()
{
  let usernm = document.getElementById("loginusername").value.trim();
  if (usernm === "") {
    alert("Please enter username.");
    return false;
  }
  let existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if(!existingEntries.includes(usernm))
  alert("username does not exist in localstorage");
  return false;

}
function addUsernamestolocalstorage(storagename,storageval) {
  // Parse any JSON previously stored in allEntries
  var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
  if(existingEntries == null) existingEntries = [];
  var entry = {
    storagename: storageval,
  };
  //localStorage.setItem("entry", JSON.stringify(entry));
  // Save allEntries back to local storage
  existingEntries.push(entry);
  localStorage.setItem("allEntries", JSON.stringify(existingEntries));
};