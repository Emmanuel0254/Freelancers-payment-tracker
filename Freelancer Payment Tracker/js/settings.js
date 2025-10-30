// settings.js

const user = JSON.parse(localStorage.getItem('user')) || { name: "Guest", email: "-" };
document.getElementById('profile-name').textContent = user.name;
document.getElementById('profile-email').textContent = user.email;

const toggleTheme = document.getElementById('toggle-theme');
const clearData = document.getElementById('clear-data');

toggleTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

clearData.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear all saved data?')) {
    localStorage.clear();
    alert('All data cleared.');
    window.location.href = 'index.html';
  }
});

// Maintain theme state
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}
