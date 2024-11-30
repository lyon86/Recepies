// Function to calculate the adjusted ingredient amounts for Mix Recipe
function calculateProportions() {
  const servings = document.getElementById('servings').value;

  if (servings <= 0) {
    alert("Please enter a valid number of servings.");
    return;
  }

  // Base values for 1 batch of Mix Recipe
  const baseQuantities = [200, 700, 100, 30]; // buckwheat, corn starch, potato/tapioca starch, sugar

  // Update each ingredient dynamically
  baseQuantities.forEach((baseAmount, index) => {
    const adjustedAmount = baseAmount * servings;
    const ingredientElement = document.getElementById(`id_ingredient${index + 1}`);
    
    if (ingredientElement) {
      ingredientElement.innerText = adjustedAmount + "g " + ingredientElement.getAttribute('data-name');
    }
  });
}

// Function to calculate the adjusted ingredient amounts for Flat Bread Recipe
function calculateFlatBreadProportions() {
  const servings = document.getElementById('flatbread-servings').value;

  if (servings <= 0) {
    alert("Please enter a valid number of servings.");
    return;
  }

  // Base values for 1 batch of Flat Bread Recipe
  const baseQuantitiesFlatBread = [80, 100, 20, 4, 2.5, 5, 2.5, 135, 12]; // buckwheat, corn starch, etc.

  // Update each ingredient dynamically
  baseQuantitiesFlatBread.forEach((baseAmount, index) => {
    const adjustedAmount = baseAmount * servings;
    const ingredientElement = document.getElementById(`id_ingredient${index + 5}`);
    
    if (ingredientElement) {
      ingredientElement.innerText = adjustedAmount + "g " + ingredientElement.getAttribute('data-name');
    }
  });
}
