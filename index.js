// if (document.title=='nuevo-producto') {
//   console.log('eso')
// }


//modelo
let tarjetas_productos = [];
      
fetch('http://localhost:3000/producto')
  .then(response => response.json())
  .then(data => {
    tarjetas_productos = data;
    console.log(tarjetas_productos)
  })
  .catch(error => {
    console.error('Ha ocurrido un error al cargar el archivo JSON del servidor', error);
});

const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit',guardar_nuevo_producto)

function guardar_nuevo_producto() {
  const nombre= document.getElementById('nombre').value
  const precio= document.getElementById('precio').value
  const img= document.getElementById('img').value
  const categoria= document.getElementById('categoria').value
  const descripcion= document.getElementById('descripcion').value
  tarjetas_productos.push(nombre,precio,img,categoria,descripcion);
  console.log(tarjetas_productos)
  fetch('http://localhost:3000/producto', {
    method: 'POST',
    body: JSON.stringify({ "nombre": nombre , "precio": precio, "img": img , "categoria": categoria , "descripcion": descripcion }),
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


        
      
     