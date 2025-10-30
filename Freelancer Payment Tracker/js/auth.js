const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');

// Toggle between Login and Signup
showSignup.addEventListener('click', () => {
  loginForm.classList.remove('active');
  signupForm.classList.add('active');
  formTitle.textContent = 'Sign Up';
});

showLogin.addEventListener('click', () => {
  signupForm.classList.remove('active');
  loginForm.classList.add('active');
  formTitle.textContent = 'Login';
});

// Handle Signup
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (!name || !email || !password) return alert('Please fill all fields');

  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  alert('Signup successful! You can now log in.');
  signupForm.reset();
  showLogin.click();
});

// Handle Login
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.email === email && user.password === password) {
    alert(`Welcome back, ${user.name}!`);
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid credentials');
  }
});
