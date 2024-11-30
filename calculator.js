function calculateProportions() {
  const servings = document.getElementById('servings').value || 1;
  
  const ingredients = [
    document.getElementById('id_ingredient1'),
    document.getElementById('id_ingredient2'),
    document.getElementById('id_ingredient3'),
    document.getElementById('id_ingredient4'),
  ];

  ingredients.forEach(ingredient => {
    const baseAmount = parseFloat(ingredient.getAttribute('data-en').match(/^\d+/)); 
    ingredient.innerText = `${(baseAmount * servings).toFixed(1)}g ${ingredient.getAttribute('data-name')}`;
  });

  // Apply the stored language after the calculation
  const currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${currentLanguage}`);
  });
}

function calculateFlatBreadProportions() {
  const servings = document.getElementById('flatbread-servings').value || 1;
  
  const ingredients = [
    document.getElementById('id_ingredient5'),
    document.getElementById('id_ingredient6'),
    document.getElementById('id_ingredient7'),
    document.getElementById('id_ingredient8'),
    document.getElementById('id_ingredient9'),
    document.getElementById('id_ingredient10'),
    document.getElementById('id_ingredient11'),
    document.getElementById('id_ingredient12'),
    document.getElementById('id_ingredient13'),
  ];

  ingredients.forEach(ingredient => {
    const baseAmount = parseFloat(ingredient.getAttribute('data-en').match(/^\d+/)); 
    ingredient.innerText = `${(baseAmount * servings).toFixed(1)}g ${ingredient.getAttribute('data-name')}`;
  });

  // Apply the stored language after the calculation
  const currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${currentLanguage}`);
  });
}
