// dashboard.js

const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  window.location.href = 'login.html';
}

document.getElementById('username').textContent = user.name;

const clients = JSON.parse(localStorage.getItem('clients')) || [];
const payments = JSON.parse(localStorage.getItem('payments')) || [];

document.getElementById('totalClients').textContent = clients.length;
document.getElementById('totalPayments').textContent = payments.length;

const pendingCount = payments.filter(p => p.status === 'Pending').length;
document.getElementById('pendingPayments').textContent = pendingCount;

// Logout
document.getElementById('logout').addEventListener('click', () => {
  localStorage.removeItem('user');
});
