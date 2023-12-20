'use extrict';

window.addEventListener('load', init, false);

function init() {
    let nombre = document.getElementById('nombreTxt');
    let email = document.getElementById('emailTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let alerta = document.getElementById('mensajeAlert');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


    btnEnviar.onclick = function() {
        nombre = nombreTxt.value;
        email = emailTxt.value;
        mensaje = mensajeTxt.value;

        if (nombre === '' && email === '' && mensaje === '') {
            alerta.textContent = 'Debe llenar todos los campos';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (nombre === '') {
            alerta.textContent = 'El campo nombre esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (email === '') {
            alerta.textContent = 'El campo email esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email inválido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (mensaje === '') {
            alerta.textContent = 'El campo mensaje esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Mensaje enviado';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');
            //el id del formulario es #form2
            emailjs.sendForm('service_f2ovo0j', 'template_iitspxm', '#form2', '5ZmYdav0fSxQ77Eav');
            //limpia campos
            cleanInputs();
        }
    }

    function cleanInputs() {
        nombreTxt.value = '';
        emailTxt.value = '';
        mensajeTxt.value = '';
    }
}