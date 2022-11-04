// grab variables of username/password
const usernameData = document.getElementById('username-login').value;
const passwordData = document.getElementById('password-login').value;



// function to handle log in
const loginFormHandler = async (event) => {
    event.preventDefault();
    
       
    console.log(usernameData);
    console.log(passwordData);

    // sending user name to check if username/password already exist
    if (usernameData && passwordData) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ usernameData, passwordData }),
        headers: { 'Content-Type': 'application/json' },
      });
      //TO DO: Check if already registered or not
      if (response.ok) {
        console.log('the response appears good')
        //document.location.replace('/dashboard');
      } else {
        alert('Failed to log in.');
      }
    } else {
      console.log('There was a problem with signing in');
      //window.alert('What did you do?!');
    }
  };

  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);