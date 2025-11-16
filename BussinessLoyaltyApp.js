document.getElementById('subbutton').addEventListener('click', function() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = 'TestUserName';
  const validPassword = 'TestPassWord';

  if (username === validUsername && password === validPassword) {
    window.location.href = 'https://lhupdj.mimo.run/BLAHome.html';
  } else {
    alert('Invalid username or password');
  }
});