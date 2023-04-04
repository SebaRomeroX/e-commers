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

//window.addEventListener('load', asignar_producto)

function cargar() {
    let span_nombre = document.getElementById('nombre')
    span_nombre.innerHTML = 'caca'
}
let categoria=''
function asignar_producto(id) {
    for (let i = 0; i < tarjetas_productos.length; i++) {
        if (id == tarjetas_productos[i].id) {
            nombre= tarjetas_productos[i].nombre
            precio= tarjetas_productos[i].precio
            img= tarjetas_productos[i].img
            descripcion= tarjetas_productos[i].descripcion
            categoria= tarjetas_productos[i].categoria
        } 
       
    }
    const galeria=document.getElementById('tarjeta_producto')
    const producto= crearNuevoProducto(nombre,precio,img,descripcion)
    galeria.appendChild(producto)
    filtrar_categoria()        
}

const crearNuevoProducto=(nombre,precio,img,descripcion)=>{
    const cartel = document.createElement('div')
    const contenido=
    `<div class='imagen'>
        <img src="${img}" alt="item">
    </div>
    <div class='tarjeta'>
        <div class='info-prod'>
            <h2>${nombre}</h2> 
            <p>$ ${precio}</p>
            <p>${descripcion}</p> 
        </div>
       
    </div>
    `;
    cartel.innerHTML=contenido
    return cartel
    
}

let productos_relacionados=[]
function filtrar_categoria(){
    for (let i = 0; i < tarjetas_productos.length; i++) {
         if (categoria == tarjetas_productos[i].categoria) {
            productos_relacionados.push(tarjetas_productos[i])
                            
        } 
                       
    }
    const galeria=document.getElementById('relacionados')
    productos_relacionados.forEach((tarjetas_productos) =>{
                
        const cartel = document.createElement('li')
        const contenido=
            `<img src="${tarjetas_productos.img}" alt="item">
            <p>${tarjetas_productos.nombre}</p> 
            <p>$ ${tarjetas_productos.precio}</p> 
            <button class="boton_producto" data-nombre='${tarjetas_productos.id} '>Ver producto</button>`;
        //asignar_botones()
        console.log(cartel)
        cartel.innerHTML=contenido
        galeria.appendChild(cartel)
                
    })
}

let bot_eliminar = document.getElementById('boton-eliminar')
bot_eliminar.addEventListener('click',eliminar_producto)

 

function eliminar_producto() {
    fetch(`http://localhost:3000/producto/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      console.log(`El elemento con ID ${id} ha sido eliminado.`);
    } else {
      console.log('Error al eliminar el elemento.');
    }
  })
  .catch(error => {
    console.log('Error al eliminar el elemento.', error);
  });

  window.location.href= "home.html"
}