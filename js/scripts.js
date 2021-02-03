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
        showAlert('Todos los campos son obligatorios', true);
        return;
    }

    showAlert('Mensaje enviado correctamente');
    
});

function readText(event) {
    data[event.target.id] = event.target.value;
    // console.log(data);
}

//Refactoring
function showAlert(message, error = null){
    const alert = document.createElement('P');
    alert.textContent = message;

    if(error){
        alert.classList.add('error');
    } else {
        alert.classList.add('success');
    }

    form.appendChild(alert);
    setTimeout(() => {
        alert.remove();
    },5000)
}
