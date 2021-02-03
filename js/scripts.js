const data = {
    name: '',
    email: '',
    message: ''
}

const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const form = document.querySelector('.form');

name.addEventListener('input', readText);
email.addEventListener('input', readText);
message.addEventListener('input', readText);

form.addEventListener('submit',function(event){
    event.preventDefault();
    const {name, email, message} = data;
    
    if(name === '' || email === '' || message === '') {
        showError('Todos los campos son obligatorios');
        return;
    }

    showSuccess('Mensaje enviado correctamente');
    
});

function readText(event) {
    data[event.target.id] = event.target.value;
    console.log(data);
}

function showError(message) {
    const error = document.createElement('P');
    error.textContent = message;
    error.classList.add('error');

    form.appendChild(error);

    setTimeout( () => {
        error.remove();
    },5000)
}

function showSuccess(message) {
    const success = document.createElement('P');
    success.textContent = message;
    success.classList.add('success');

    form.appendChild(success);

    setTimeout( () => {
        success.remove();
    },5000)
}