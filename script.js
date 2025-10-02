const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Get all price cells
  const prices = document.querySelectorAll(".price");
  let total = 0;

  prices.forEach(price => {
    total += parseInt(price.textContent);
  });

  // Create a new row
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Make cell span across 2 columns
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
 totalCell.id = "ans"; // <-- important for Cypress test
  totalCell.textContent = `Total Price = Rs ${total}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);

  // Disable button to prevent multiple totals
  getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);
