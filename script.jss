function showForm(type) {
  document.getElementById('login-form').style.display = type === 'login' ? 'block' : 'none';
  document.getElementById('register-form').style.display = type === 'register' ? 'block' : 'none';
  document.getElementById('dashboard').style.display = 'none';
}

function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const role = document.getElementById('reg-role').value;

  if (!username || !password) {
    alert('Please fill all fields');
    return;
  }

  const users = JSON.parse(localStorage.getItem('users') || '[]');

  if (users.find(u => u.username === username)) {
    alert('Username already exists!');
    return;
  }

  users.push({ username, password, role });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registration successful! Please log in.');
  showForm('login');
}

function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    showDashboard(user);
  } else {
    alert('Invalid credentials');
  }
}

function showDashboard(user) {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
  document.getElementById('user-name').textContent = user.username;
  document.getElementById('user-role').textContent = user.role;
}

function logout() {
  localStorage.removeItem('loggedInUser');
  showForm('login');
}

// Auto-login if user is stored
window.onload = function() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  if (user) {
    showDashboard(user);
  } else {
    showForm('login');
  }
};
