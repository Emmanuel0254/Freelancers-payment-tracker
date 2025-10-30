// clients.js

const form = document.getElementById('client-form');
const list = document.getElementById('client-list');
let clients = JSON.parse(localStorage.getItem('clients')) || [];

function renderClients() {
  list.innerHTML = '';
  clients.forEach((c, i) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${c.name}</td>
      <td>${c.project}</td>
      <td>${c.contact}</td>
      <td><button class="btn" onclick="deleteClient(${i})">Delete</button></td>
    `;
    list.appendChild(row);
  });
}
renderClients();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('client-name').value;
  const project = document.getElementById('client-project').value;
  const contact = document.getElementById('client-contact').value;

  clients.push({ name, project, contact });
  localStorage.setItem('clients', JSON.stringify(clients));
  form.reset();
  renderClients();
});

function deleteClient(index) {
  clients.splice(index, 1);
  localStorage.setItem('clients', JSON.stringify(clients));
  renderClients();
}
