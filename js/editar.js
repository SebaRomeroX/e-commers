const input_nombre = document.getElementById("nombre");
const input_precio = document.getElementById("precio");
const input_img = document.getElementById("img");
const input_categoria = document.getElementById("categoria");
const input_descripcion = document.getElementById("descripcion");

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


fetch('http://localhost:3000/seleccionado')
  .then(response => response.json())
  .then(data => {
    prod = data;
    id=prod["producto_seleccionado"]
    asignar_producto(id)
  })
  .catch(error => {
    console.error('Ha ocurrido un error al cargar el archivo JSON del servidor', error);
});

function asignar_producto(id) {
    let nombre = "Este es un valor dinámico";
    let precio = "Este es un valor dinámico";
    let img = "Este es un valor dinámico";
    let categoria = "Este es un valor dinámico";
    let descripcion = "Este es un valor dinámico";

    for (let i = 0; i < tarjetas_productos.length; i++) {
        if (id == tarjetas_productos[i].id) {
            nombre= tarjetas_productos[i].nombre
            precio= tarjetas_productos[i].precio
            img= tarjetas_productos[i].img
            descripcion= tarjetas_productos[i].descripcion
            categoria= tarjetas_productos[i].categoria
        } 
    }
    input_nombre.value = nombre;
    input_precio.value = precio;
    input_img.value = img;
    input_categoria.value = categoria;
    input_descripcion.value = descripcion;
}

let boton_guardar = document.getElementById('boton-guardar') 
boton_guardar.addEventListener('click',guardar_cambios)

function guardar_cambios() {
    console.log(tarjetas_productos)
    
    console.log(tarjetas_productos)
    fetch(`http://localhost:3000/producto/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ "nombre": input_nombre.value ,
        "precio": input_precio.value, "img": input_img.value ,
        "categoria": input_categoria.value , "descripcion": input_descripcion.value
        }),
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
    
    window.location.href= "home.html"
}
