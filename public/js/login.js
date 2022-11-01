// grab variables of username/password
const username = document.querySelector('#username-login').value.trim();
const password = document.querySelector('#password-login').value.trim();


// function to handle log in
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    
    console.log(username, password);
    // fetch using POST method
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/landingpage');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);