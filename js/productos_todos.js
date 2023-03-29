const crearNuevoProducto=(nombre,precio,img)=>{
    const cartel = document.createElement('li')
    const contenido=
    `<img src="${img}" alt="item">
    <p>${nombre}</p> 
    <p>$ ${precio}</p> 
    <a href="../screens/pagina-producto.html"> Ver producto </a>`;
    cartel.innerHTML=contenido
    return cartel
    
}

const cartelProductos = () =>
  fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
cartelProductos()
    .then((data) => {
        data.forEach((producto) => {
            const galeria=document.getElementById('todos_productos')
            const nuevoProducto= crearNuevoProducto(producto.nombre,producto.precio,producto.img)
            galeria.appendChild(nuevoProducto)
        });
    })
    .catch((error) => alert("Ocurrió un error"));


