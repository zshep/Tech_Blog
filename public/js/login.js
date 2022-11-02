// grab variables of username/password



// function to handle log in
const loginFormHandler = async (event) => {
    event.preventDefault();
    
   
    const usernameData = document.getElementById('username-login').value;
    const passwordData = document.getElementById('password-login').value;

    
    console.log(usernameData);
    console.log(passwordData);
    // fetch using POST method
    if (usernameData && passwordData) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ usernameData, passwordData }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/landingpage');
        console.log('the response appears good')
      } else {
        alert('Failed to log in.');
      }
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);