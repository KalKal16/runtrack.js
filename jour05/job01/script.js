document.addEventListener('DOMContentLoaded', function() {
    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confPasswordInput = document.getElementById('conf-password');
    const nomLengthError = document.getElementById('nom-length-error');
    const prenomLengthError = document.getElementById('prenom-length-error');
    const emailFormatError = document.getElementById('email-format-error');
    const passwordLengthError = document.getElementById('password-length-error');
    const confPasswordError = document.getElementById('conf-password-error');
    const confPasswordMatchError = document.getElementById('conf-password-match-error');
    const form = document.getElementById('signup-form');
    const formError = document.getElementById('form-error');
  
    function checkNameLength(input) {
      const value = input.value.trim();
      return value.length >= 2;
    }
  
    function checkEmailFormat(input) {
      const value = input.value.trim();
      return value.includes('@') && value.includes('.') && value.lastIndexOf('.') > value.indexOf('@');
    }
  
    function checkPasswordLength(input) {
      const value = input.value.trim();
      return value.length >= 7;
    }
  
    function checkPasswordsMatch(password, confPassword) {
      return password.value === confPassword.value;
    }
  
    function showErrorMessage(errorElement) {
      errorElement.style.display = 'block';
    }
  
    function hideErrorMessage(errorElement) {
      errorElement.style.display = 'none';
    }
  
    function handleInput(input, errorElement, validationFunction) {
      if (!validationFunction(input)) {
        showErrorMessage(errorElement);
      } else {
        hideErrorMessage(errorElement);
      }
    }
  
    nomInput.addEventListener('input', function() {
      handleInput(nomInput, nomLengthError, checkNameLength);
    });
  
    prenomInput.addEventListener('input', function() {
      handleInput(prenomInput, prenomLengthError, checkNameLength);
    });
  
    emailInput.addEventListener('input', function() {
      handleInput(emailInput, emailFormatError, checkEmailFormat);
    });
  
    passwordInput.addEventListener('input', function() {
      handleInput(passwordInput, passwordLengthError, checkPasswordLength);
    });
  
    confPasswordInput.addEventListener('input', function() {
      if (!checkPasswordsMatch(passwordInput, confPasswordInput)) {
        showErrorMessage(confPasswordMatchError);
      } else {
        hideErrorMessage(confPasswordMatchError);
      }
    });
  
    form.addEventListener('submit', function(event) {
      const requiredInputs = form.querySelectorAll('[required]');
      let formValid = true;
  
      requiredInputs.forEach(function(input) {
        if (!input.value.trim()) {
          formValid = false;
          const inputLabel = input.getAttribute('name');
          formError.textContent = inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1) + ' est requis.';
          formError.style.display = 'block';
          event.preventDefault();
        }
      });
  
      if (!checkPasswordsMatch(passwordInput, confPasswordInput)) {
        formValid = false;
        showErrorMessage(confPasswordMatchError);
        event.preventDefault();
      }
  
      if (formValid) {
        formError.style.display = 'none';
      }
    });
  });
  