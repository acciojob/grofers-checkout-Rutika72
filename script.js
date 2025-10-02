const getSum = () => {
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += parseInt(price.textContent);
  });

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // span across both columns
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.id = "ans"; // <-- important for Cypress test
  totalCell.textContent = total; // Cypress expects just the number (not "Total Price = Rs ...")

  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  getSumBtn.disabled = true;
};
