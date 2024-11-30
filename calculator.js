function calculateProportions() {
  const servings = document.getElementById('servings').value || 1;

  const ingredients = [
    document.getElementById('id_ingredient1'),
    document.getElementById('id_ingredient2'),
    document.getElementById('id_ingredient3'),
    document.getElementById('id_ingredient4'),
  ];

  const totalWeight = ingredients.reduce((sum, ingredient) => {
    const baseAmount = parseFloat(ingredient.getAttribute('data-en').match(/^\d+/));
    return sum + baseAmount;
  }, 0);

  ingredients.forEach(ingredient => {
    const baseAmount = parseFloat(ingredient.getAttribute('data-en').match(/^\d+/));
    const scaledAmount = (baseAmount * servings).toFixed(1);
    const proportion = ((baseAmount / totalWeight) * 100).toFixed(1);

    ingredient.innerHTML = `${scaledAmount}g ${ingredient.getAttribute('data-name')} <span class="proportion">(${proportion}%)</span>`;
  });

  updateLanguage();
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

  const totalWeight = ingredients.reduce((sum, ingredient) => {
    const baseAmount = parseFloat(ingredient.getAttribute('data-en').match(/^\d+/));
    return sum + baseAmount;
  }, 0);

  ingredients.forEach(ingredient => {
    const baseAmount = parseFloat(ingredient.getAttribute('data-en').match(/^\d+/));
    const scaledAmount = (baseAmount * servings).toFixed(1);
    const proportion = ((baseAmount / totalWeight) * 100).toFixed(1);

    ingredient.innerHTML = `${scaledAmount}g ${ingredient.getAttribute('data-name')} <span class="proportion">(${proportion}%)</span>`;
  });

  updateLanguage();
}

function updateLanguage() {
  const currentLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.querySelectorAll('[data-en][data-es]').forEach((el) => {
    el.innerText = el.getAttribute(`data-${currentLanguage}`);
  });
}
