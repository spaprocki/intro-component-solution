const firstNameInputElement = document.getElementById('first-name');
const lastNameInputElement = document.getElementById('last-name');
const emailInputElement = document.getElementById('email-address');
const passwordInputElement = document.getElementById('password');
const submitButtonElement = document.getElementById('submit-button');

const mustBeFilled = [
  firstNameInputElement,
  lastNameInputElement,
  passwordInputElement,
];

submitButtonElement.addEventListener('click', evaluateInputs);

function evaluateInputs(event) {
  event.preventDefault();

  // Evaluating all non-email inputs
  mustBeFilled.forEach((element) => {
    if (!element.value) {
      showError(element);
    } else {
      clearError(element);
    }
  });

  // Evaluating email input
  resetEmailError(emailInputElement);
  if (!emailIsValid(emailInputElement)) {
    if (emailInputElement.value == '') {
      emailEmptyError(emailInputElement);
    }
    showError(emailInputElement);
  } else {
    clearError(emailInputElement);
  }
}

function emailIsValid(emailInput) {
  const emailInputText = emailInput.value;
  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  if (emailInputText.match(emailRegex)) {
    return true;
  } else return false;
}

function resetEmailError(emailInput) {
  emailInput.nextElementSibling.nextElementSibling.textContent =
    'Looks like this is not an email';
}

function emailEmptyError(emailInput) {
  emailInput.nextElementSibling.nextElementSibling.textContent =
    'Email Address cannot be empty';
}

function showError(inputElement) {
  inputElement.classList.add('error');
  inputElement.nextElementSibling.classList.add('visible');
  inputElement.nextElementSibling.nextElementSibling.classList.add('visible');
}

function clearError(inputElement) {
  inputElement.classList.remove('error');
  inputElement.nextElementSibling.classList.remove('visible');
  inputElement.nextElementSibling.nextElementSibling.classList.remove(
    'visible'
  );
}
