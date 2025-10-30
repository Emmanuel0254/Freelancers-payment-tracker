// reports.js
const payments = JSON.parse(localStorage.getItem('payments')) || [];

let totalIncome = 0;
let pendingIncome = 0;

payments.forEach(p => {
  if (p.status === 'Paid') totalIncome += Number(p.amount);
  else pendingIncome += Number(p.amount);
});

document.getElementById('totalIncome').textContent = `$${totalIncome}`;
document.getElementById('pendingIncome').textContent = `$${pendingIncome}`;

// Simple visual representation
const chart = document.getElementById('chart');
const paidBar = document.createElement('div');
const pendingBar = document.createElement('div');

paidBar.className = 'bar paid';
pendingBar.className = 'bar pending';

paidBar.style.width = `${(totalIncome / (totalIncome + pendingIncome || 1)) * 100}%`;
pendingBar.style.width = `${(pendingIncome / (totalIncome + pendingIncome || 1)) * 100}%`;

chart.appendChild(paidBar);
chart.appendChild(pendingBar);
