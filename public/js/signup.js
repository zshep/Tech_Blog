
//function to handle sign up 
const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user/', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/landingpage');
      } else {
        alert('Failed to sign up.');
      }
    }
  };
//setting up add event listener to the signup form
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
