let mensajes = [];
console.log(mensajes)

fetch('http://localhost:3000/mensaje')
  .then(response => response.json())
  .then(data => {
    mensajes = data;
    console.log(mensajes)
  })
  .catch(error => {
    console.error('Ha ocurrido un error al cargar el archivo JSON del servidor', error);
});

const form = document.querySelector('[data-form]')
form.addEventListener('submit',enviar_mensaje)

function enviar_mensaje() {
   
  const nombre_usuario= document.getElementById('nombre_usuario').value
  const mensaje_usuario= document.getElementById('mensaje_usuario').value
  
  mensajes.push(nombre_usuario,mensaje_usuario);
  console.log(mensajes)
  fetch('http://localhost:3000/mensaje', {
    method: 'POST',
    body: JSON.stringify({"usuario": nombre_usuario , "mensaje": mensaje_usuario}),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      console.log('guardado.');
    } else {
      console.log('error.');
    }
  })
  .catch(error => {
    console.log('error.');
  });
}