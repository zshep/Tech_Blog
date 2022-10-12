//click button to submit UN and PW
//Post route


// function to handle log in
const loginFormHandler = async (event) => {
    event.preventDefault();
    
    // grab variables of username/password
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#username-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);