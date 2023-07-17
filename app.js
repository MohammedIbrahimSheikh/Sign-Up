let signUpForm = document.getElementById("signup-form");
signUpForm.addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
  });
  
  function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
  
    var errorElement = document.getElementById("error-message");
    errorElement.innerHTML = "";

    if (name.trim() === "") {
      displayError("Please enter your name");
      return false;
    }
  
    if (email.trim() === "") {
      displayError("Please enter your email");
      return false;
    }
  
    if (!isValidEmail(email)) {
      displayError("Please enter a valid email address");
      return false;
    }
  
    if (password.trim() === "") {
      displayError("Please enter a password");
      return false;
    }
  
    if (password !== confirmPassword) {
      displayError("Passwords did not match !");
      return false;
    }
    resettingInputField();
    // Form is valid, you can proceed with submitting the form
    // document.getElementById("signup-form").submit();
}
  
  function isValidEmail(email) {
    // Basic email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function displayError(errorMessage) {
    var errorElement = document.getElementById("error-message");
    errorElement.innerHTML = errorMessage;
  }
  function resettingInputField(){
    inputs = document.getElementsByTagName("input");
    for (let i=0;i<inputs.length;i++){
      inputs[i].value = "";
    }
  }