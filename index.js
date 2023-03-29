const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(8080, () => {
  console.log('Servidor funcionando')
})

// if (document.title=='nuevo-producto') {
//   console.log('eso')
// }

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit',(evento)=>{
    evento.preventDefault()
    const input_nombre= document.getElementById('nombre').value
    const nombre={ "nombre": input_nombre }
    //const input_precio= document.getElementById('precio').value
    //const precio={ "numero": input_precio }
    //const url= document.getElementById('url').value
    //const categoria= document.getElementById('categoria').value
    //const descripcion= document.getElementById('descripcion').value
    crearProducto(nombre).then((data)=>{
        console.log(data)
    }).catch((error) => alert("Ocurrió un error"));
})

const crearProducto =(nombre)=>{
  console.log(nombre)

  return fetch("http://localhost:3000/nombres", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({nombre}),
    

  }).catch((err) => alert("Ocurrió un error"));
}
// const crearProducto = async (precio) => {
//   try {
//     const response = await fetch("http://localhost:3000/producto", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ precio }),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     alert("Ocurrió un error");
//   }
// };
    
      
      
        
      
     