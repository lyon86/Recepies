// Function to calculate the adjusted ingredient amounts dynamically
function calculateProportions() {
  const servings = document.getElementById('servings').value;

  if (servings <= 0) {
    alert("Please enter a valid number of servings.");
    return;
  }

  // Base values for 1 kilo of mixture (serves 1 batch)
  const baseQuantities = [200, 700, 100, 30]; // For buckwheat, corn starch, potato starch, sugar

  // Loop through each ingredient and update its amount dynamically
  baseQuantities.forEach((baseAmount, index) => {
    const adjustedAmount = baseAmount * servings;
    const ingredientElement = document.getElementById(`id_ingredient${index + 1}`);
    
    // Update the ingredient amount text
    if (ingredientElement) {
      ingredientElement.innerText = adjustedAmount + "g " + ingredientElement.getAttribute('data-name');
    }
  });
}
