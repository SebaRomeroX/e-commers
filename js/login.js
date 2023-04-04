let cuenta=[]
let mail = '';
let contraseña = '';

fetch('http://localhost:3000/cuenta')
  .then(response => response.json())
  .then(data => {
    cuenta = data;
    mail=cuenta["mail"]
    contraseña=cuenta["contraseña"]
    console.log(mail,contraseña)
  })
  .catch(error => {
    console.error('Ha ocurrido un error al cargar el archivo JSON del servidor', error);
});

const button = document.querySelector('[data-button]')
button.addEventListener('click',comprobar_cuenta)



function comprobar_cuenta() {
  const mail_usuario= document.getElementById('mail_usuario').value
  const contraseña_usuario= document.getElementById('contraseña_usuario').value
  if (mail==mail_usuario&&contraseña==contraseña_usuario) {
    window.location.href= "home.html"
  }else {
    window.location.href= "error.html"
  }
}