function calculateProportions() {
  const servingsInput = document.getElementById('servings');
  const servingBaseAmounts = [200, 700, 100, 30]; // Base amounts for 1 serving

  const ingredients = [
    document.getElementById('id_ingredient1'),
    document.getElementById('id_ingredient2'),
    document.getElementById('id_ingredient3'),
    document.getElementById('id_ingredient4'),
  ];

  // Adjust all inputs proportionally when any ingredient changes
  ingredients.forEach((input, index) => {
    input.oninput = () => {
      const newAmount = parseFloat(input.value) || 0;

      // Calculate new servings based on changed ingredient
      const newServings = newAmount / servingBaseAmounts[index];
      servingsInput.value = newServings.toFixed(1);

      // Update all other ingredients proportionally
      ingredients.forEach((otherInput, otherIndex) => {
        if (index !== otherIndex) {
          otherInput.value = (servingBaseAmounts[otherIndex] * newServings).toFixed(1);
        }
      });
    };
  });

  // Update ingredients when servings input changes
  servingsInput.oninput = () => {
    const newServings = parseFloat(servingsInput.value) || 1;

    ingredients.forEach((input, index) => {
      input.value = (servingBaseAmounts[index] * newServings).toFixed(1);
    });
  };
}

function calculateFlatBreadProportions() {
  const flatbreadCountInput = document.getElementById('flatbread-count');
  const flatbreadBaseAmounts = [80, 100, 20, 4, 2.5, 5, 2.5, 135, 12]; // Base amounts for 10 flatbreads
  const baseFlatbreads = 10;

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

  // Adjust all inputs proportionally when any ingredient changes
  ingredients.forEach((input, index) => {
    input.oninput = () => {
      const newAmount = parseFloat(input.value) || 0;

      // Calculate new flatbread count based on changed ingredient
      const newFlatbreadCount = (newAmount * baseFlatbreads) / flatbreadBaseAmounts[index];
      flatbreadCountInput.value = newFlatbreadCount.toFixed(1);

      // Update all other ingredients proportionally
      ingredients.forEach((otherInput, otherIndex) => {
        if (index !== otherIndex) {
          otherInput.value = ((flatbreadBaseAmounts[otherIndex] / baseFlatbreads) * newFlatbreadCount).toFixed(1);
        }
      });
    };
  });

  // Update ingredients when flatbread count changes
  flatbreadCountInput.oninput = () => {
    const newFlatbreadCount = parseFloat(flatbreadCountInput.value) || 1;

    ingredients.forEach((input, index) => {
      input.value = ((flatbreadBaseAmounts[index] / baseFlatbreads) * newFlatbreadCount).toFixed(1);
    });
  };
}
