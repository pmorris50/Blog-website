const loginFormHandler = async (event) => {
    console.log('Logging On')
    event.preventDefault();

    const email = document.getElementById('email').value.trim();

    const password = document.getElementById('password').value.trim();

    if(email && password){
        console.log(`email: ${email} password: ${password}`)
        const response = await fetch('/api/user/login',{
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/profile');
          } else {
            alert(response.statusText);
          }
    }


}

document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);