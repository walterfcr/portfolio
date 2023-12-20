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
            Swal.fire({
                title: 'Atención usuario',
                html:'Debes llenar todos los campos' +
                '<iframe src="https://embed.lottiefiles.com/animation/75320"></iframe>',
                timer: 5000,
                onOpen: function() {
                }
            })
                        return false;
        } else if (nombre === '') {
            Swal.fire({
                title: 'Atención usuario',
                html:'El campo Nombre está vacio' +
                '<iframe src="https://embed.lottiefiles.com/animation/75320"></iframe>',
                timer: 5000,
                onOpen: function() {
                }
            })
                        return false;
        } else if (email === '') {
            Swal.fire({
                title: 'Atención usuario',
                html:'El campo email está vacio' +
                '<iframe src="https://embed.lottiefiles.com/animation/75320"></iframe>',
                timer: 5000,
                onOpen: function() {
                }
            })
                        return false;
        } else if (expressionEmail.test(email) === false) {
            Swal.fire({
                title: 'Atención usuario',
                html:'El email ingresado es inválido' +
                '<iframe src="https://embed.lottiefiles.com/animation/75320"></iframe>',
                timer: 5000,
                onOpen: function() {
                }
            })
                        return false;
        } else if (mensaje === '') {
            Swal.fire({
                title: 'Atención usuario',
                html:'El campo mensaje está vacio' +
                '<iframe src="https://embed.lottiefiles.com/animation/75320"></iframe>',
                timer: 5000,
                onOpen: function() {
                }
            })
                        return false;
        } else {
            Swal.fire({
                title: 'Atención usuario',
                html:'El Mensaje se ha enviado ' +
                '<iframe src="https://embed.lottiefiles.com/animation/93865"></iframe>',
                timer: 5000,
                onOpen: function() {
                    
                }
            })
                        
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