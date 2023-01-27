const newUserFormhandler = async (event) => {
    event.preventDefault();
    console.log('Create User')
    const first_name = document.getElementById('first-name').value.trim();
    const last_name = document.getElementById('last-name').value.trim();
    const email = document.getElementById('new-email').value.trim();
    const password = document.getElementById('new-password').value.trim();


    if(first_name && last_name && email && password){
        const response = await fetch('api/user/new',{
            method: 'POST',
            body: JSON.stringify({first_name, last_name, email, password}),
            headers: { 'Content-Type': 'application/json' },
        });

    if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
    }


    document
    .querySelector(".create-form")
    .addEventListener('submit', newUserFormhandler);