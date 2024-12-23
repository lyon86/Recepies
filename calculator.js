const FLATBREAD_BASE_AMOUNT = 5; // Set the base flatbreads to 5

function calculateProportions() {
  const servings = document.getElementById('servings').value || 1;

  const ingredients = [
    document.getElementById('id_ingredient1'),
    document.getElementById('id_ingredient2'),
    document.getElementById('id_ingredient3'),
    document.getElementById('id_ingredient4'),
  ];

  const servingBaseAmounts = [200, 700, 100, 30];

  ingredients.forEach((input, index) => {
    input.value = (servingBaseAmounts[index] * servings).toFixed(1);
  });

  updatePieChart(
    '#mix-piechart',
    ingredients.map(input => parseFloat(input.value)),
    ingredients.map(input => input.nextElementSibling.innerText)
  );
}

function calculateFlatBreadProportions() {
  const flatbreadCount = document.getElementById('flatbread-count').value || 1;

  const flatbreadBaseAmounts = [80, 100, 20, 4, 2.5, 5, 2.5, 140, 12];
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

  ingredients.forEach((input, index) => {
    const adjustedValue = ((flatbreadBaseAmounts[index] / FLATBREAD_BASE_AMOUNT) * flatbreadCount).toFixed(1);
    input.value = adjustedValue;
  });

  updatePieChart(
    '#flatbread-piechart',
    ingredients.map(input => parseFloat(input.value)),
    ingredients.map(input => input.nextElementSibling.innerText)
  );
}



function updatePieChart(container, data, labels) {
  const width = 400; // Increased width for larger labels
  const height = 300; // Increased height for better spacing
  const radius = Math.min(width, height) / 3;

  const color = d3.scaleOrdinal(d3.schemeTableau10);

  // Calculate percentages
  const total = data.reduce((acc, val) => acc + val, 0);
  const dataWithPercentages = data.map((value, i) => ({
    label: labels[i],
    value: value,
    percentage: ((value / total) * 100).toFixed(1),
  }));

  // Sort data from greatest to smallest
  const sortedData = dataWithPercentages.sort((a, b) => b.percentage - a.percentage);

  const svg = d3
    .select(container)
    .html('') // Clear existing chart
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(${radius + 20}, ${height / 2})`); // Center pie chart with some padding

  const pie = d3.pie().value(d => d.value)(sortedData);
  const arc = d3.arc().innerRadius(0).outerRadius(radius);

  // Draw pie chart
  svg
    .selectAll('path')
    .data(pie)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i));

  // Draw labels on the right with squares
  const labelGroup = d3
    .select(container)
    .select('svg')
    .append('g')
    .attr('transform', `translate(${radius * 2 + 40}, ${height / 2 - sortedData.length * 10})`); // Position to the right of the pie

  labelGroup
    .selectAll('rect')
    .data(sortedData)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', (d, i) => i * 30) // Adjust vertical spacing
    .attr('width', 16)
    .attr('height', 16)
    .attr('fill', (d, i) => color(i));

  labelGroup
    .selectAll('text')
    .data(sortedData)
    .enter()
    .append('text')
    .attr('x', 20) // Position text next to the square
    .attr('y', (d, i) => i * 30 + 12) // Align text vertically with squares
    .text(d => `${d.percentage}% ${d.label}`) // Percent first, then label
    .style('font-size', '14px') // Larger font size for readability
    .style('fill', '#333')
    .style('text-anchor', 'start'); // Align text to start
}





function loadLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.getElementById('language-select').value = savedLanguage;

  document.querySelectorAll('[data-en][data-es]').forEach(el => {
    el.innerText = el.getAttribute(`data-${savedLanguage}`);
  });

  calculateProportions(); // Recalculate and redraw Mix Recipe
  calculateFlatBreadProportions(); // Recalculate and redraw Flatbread Recipe
}

document.addEventListener('DOMContentLoaded', () => {
  calculateProportions();
  calculateFlatBreadProportions();
  loadLanguage();
});
