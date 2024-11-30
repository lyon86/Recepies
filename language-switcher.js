function changeLanguage() {
  const selectedLanguage = document.getElementById('language-select').value;

  localStorage.setItem('selectedLanguage', selectedLanguage);

  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${selectedLanguage}`);
  });
}

function loadLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.getElementById('language-select').value = savedLanguage;

  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${savedLanguage}`);
  });
}

document.addEventListener('DOMContentLoaded', loadLanguage);
