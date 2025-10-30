// payments.js

const paymentForm = document.getElementById('payment-form');
const paymentList = document.getElementById('payment-list');
let payments = JSON.parse(localStorage.getItem('payments')) || [];

function renderPayments() {
  paymentList.innerHTML = '';
  payments.forEach((p, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${p.client}</td>
      <td>$${p.amount}</td>
      <td>${p.status}</td>
      <td><button class="btn" onclick="deletePayment(${i})">Delete</button></td>
    `;
    paymentList.appendChild(row);
  });
}
renderPayments();

paymentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const client = document.getElementById('payment-client').value;
  const amount = document.getElementById('payment-amount').value;
  const status = document.getElementById('payment-status').value;

  payments.push({ client, amount, status });
  localStorage.setItem('payments', JSON.stringify(payments));
  paymentForm.reset();
  renderPayments();
});

function deletePayment(index) {
  payments.splice(index, 1);
  localStorage.setItem('payments', JSON.stringify(payments));
  renderPayments();
}
