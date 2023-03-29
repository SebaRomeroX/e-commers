function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    
  
    if (input.validity.valid) {
      input.parentElement.classList.remove("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
      input.parentElement.classList.add("input-container--invalid");
      input.parentElement.querySelector(".input-message-error").innerHTML =
        mostrarMensajeDeError(tipoDeInput, input);
    }
}
  
const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    'patternMismatch'
    ];
  
const mensajesDeError = {
    nombre: {
      valueMissing: "Este campo no puede quedar vacío",
    },
  

    email: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "El correo no tiene un formato válido",
    },
    password: {
      valueMissing: "El campo contraseña no puede estar vacío",
      patternMismatch:
      "Debe tener al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
    },


    url: {
      valueMissing: "El campo correo no puede estar vacío",
      typeMismatch: "La url no tiene un formato válido",
    },
    categoria: {
      valueMissing: "El campo correo no puede estar vacío",
    },
    precio: {
      valueMissing: "El campo correo no puede estar vacío",
    },
    
};
  
  
function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
      if (input.validity[error]) {
        console.log(tipoDeInput, error);
        console.log(input.validity[error]);
        console.log(mensajesDeError[tipoDeInput][error]);
        mensaje = mensajesDeError[tipoDeInput][error];
      }
    });
    return mensaje;
}


const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});



