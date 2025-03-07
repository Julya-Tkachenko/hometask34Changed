import './style.scss';


const userForm = document.querySelector('.user-form');
userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputUserName = document.querySelector('.first-name');
    if (inputUserName.value.trim() !=='') {
    inputUserName.classList.add('valid');
    inputUserName.classList.remove('error');
    inputUserName.nextElementSibling.style.display = 'none'; 
    } else {
        inputUserName.nextElementSibling.style.display = '';
        inputUserName.classList.add('error');
        inputUserName.classList.remove('valid');
    }

    const userMessage = document.querySelector('.user-message');
    if (userMessage.value.trim() !=='') {
        userMessage.classList.add('valid'); 
        userMessage.classList.remove('error');
        userMessage.nextElementSibling.style.display = 'none';
    } else {
        userMessage.nextElementSibling.style.display = '';
        userMessage.classList.add('error');
        userMessage.classList.remove('valid');
    }

    const userPhone = document.querySelector('.user-phone');
    const userPhoneMatch = userPhone.value.match(/^\+380/);
    if (userPhoneMatch !== null) {
        userPhone.classList.add('valid');
        userPhone.classList.remove('error');
        userPhone.nextElementSibling.style.display = 'none';
    } else {
        userPhone.nextElementSibling.style.display = '';
        userPhone.classList.add('error');
        userPhone.classList.remove('valid');
    }

    const userEmail = document.querySelector('.user-email');
    const userEmailMatch = userEmail.value.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    if (userEmailMatch !== null) {
        userEmail.classList.add('valid');
        userEmail.classList.remove('error');
        userEmail.nextElementSibling.style.display = 'none';
    } else {
        userEmail.nextElementSibling.style.display = '';
        userEmail.classList.add('error');
        userEmail.classList.remove('valid');
    }
});

