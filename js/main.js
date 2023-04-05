function alertita(){
    Swal.fire(
        'Nos pondremos en contacto a la brevedad',
        'Muchas gracias por tu interes en nosotros!',
        'success'
      )
}

function alertota(){
    Swal.fire({
        title: 'Gracias por tu voto! Esperamos esta pelicula gane.',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      
}
function login(){
    window.open("login.html", "_blank");
}

function sale(){
        window.alert("Gracias por iniciar Sesion en nuestra página web");
        window.close();
}
function registro(){
    window.alert("Gracias por Registrarte en nuestra página web");
    window.close();
}
function registra(){
    window.open("registro.html" , "_blank")
}