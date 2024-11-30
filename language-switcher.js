// Function to change language
function changeLanguage() {
  const selectedLanguage = document.getElementById('language-select').value;

  // Store the selected language in local storage
  localStorage.setItem('selectedLanguage', selectedLanguage);

  // Update text for each element with data attributes for languages
  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${selectedLanguage}`);
  });
}

// Function to load the stored language on page load
function loadLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.getElementById('language-select').value = savedLanguage;

  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${savedLanguage}`);
  });
}

// Load the language when the page is loaded
document.addEventListener('DOMContentLoaded', loadLanguage);
