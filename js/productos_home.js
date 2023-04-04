const crearNuevoProducto=(nombre,precio,img,id)=>{
    const cartel = document.createElement('li')
    const contenido=
    `<img src="${img}" alt="item">
    <p>${nombre}</p> 
    <p>$ ${precio}</p> 
    <button class="boton_producto" data-nombre='${id} '>Ver producto</button>`;
    asignar_botones()
    cartel.innerHTML=contenido
    return cartel
    
}

function asignar_botones(){
    document.querySelectorAll('.boton_producto').forEach(button => {
        button.addEventListener('click', e => {
          const producto_seleccionado = e.target.dataset.nombre; 
          guardar_producto_seleccionado(producto_seleccionado);
        });
      });
}


const cartelProductos = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
cartelProductos()
    .then((data) => {
        tarjetas_productos = data;
        data.forEach((producto) => {
            const categoria= producto.categoria
            const galeria=document.getElementById(categoria)
            const nuevoProducto= crearNuevoProducto(producto.nombre,producto.precio,producto.img,producto.id)
            galeria.appendChild(nuevoProducto)
        });
    })
    .catch((error) => alert("Ocurrió un error"));


function guardar_producto_seleccionado(producto_seleccionado) {
    
        fetch('http://localhost:3000/seleccionado', {
          method: 'POST',
          body: JSON.stringify({ producto_seleccionado }),
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

        window.location.href= "pagina-producto.html"
      }
        
        
let boton_buscar=document.getElementById('buscar')
boton_buscar.addEventListener('click',comparar)

let input_busqueda=document.getElementById('busqueda')

let tarjetas_productos = [];

function comparar() {
  let busqueda=input_busqueda.value
  for (let i = 0; i < tarjetas_productos.length; i++) {
    if (busqueda == tarjetas_productos[i].nombre) {
      console.log(tarjetas_productos[i].nombre,tarjetas_productos[i].id);
      const producto_seleccionado = tarjetas_productos[i].id
      guardar_producto_seleccionado(producto_seleccionado);
      console.log(producto_seleccionado);
    } 
}
}
