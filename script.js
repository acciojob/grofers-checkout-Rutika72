const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices=document.querySelectorAll(".price");
	let total=0;
	prices.forEach(price=>{
		total+=parseInt(price.textContent);
	});
	const table=document.querySelector("table");
	const newrow=document.querySelector("tr");
	const totalcell=document.querySelector("th");

	totalcell.setAttribute("collspan","2");
	newrow.appendChild(totalcell);
	table.appendChild(newrow);
	getSumBtn=true;
  
};

getSumBtn.addEventListener("click", getSum);

