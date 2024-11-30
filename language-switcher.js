function changeLanguage() {
  const selectedLanguage = document.getElementById('language-select').value;

  // Update text for each element with data attributes for languages
  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${selectedLanguage}`);
  });
}
