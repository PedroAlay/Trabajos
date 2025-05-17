function validarNombreApellido(cadena) {
  var cadenaRegex = /^[a-zA-ZÁÉÍÓÚÜÑáéíóúüñ\s]{2,}$/; //Permitir solo letras (incluyendo acentuadas y la "ñ"/"Ñ") y espacios, con un mínimo de 2 caracteres.
  return cadenaRegex.test(cadena);
}

function validarCedulaTelefono(numeros) {
  const digitosRegex = /^\d{10}$/; // Validar exactamente 10 dígitos numéricos
  return digitosRegex.test(numeros);
}

function validarEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // validar si un correo electronico tiene un formato correcto
  return emailRegex.test(email);
}

function validarFechaNacimiento(fecha) {
  const fechaNacimiento = new Date(fecha);
  const fechaActual = new Date();
  const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear(); 
  return fechaNacimiento < fechaActual && edad < 120;
}


function validaciones() {
      const nombre = document.getElementById("nombre").value.trim();
      const apellido = document.getElementById("apellido").value.trim();
      const cedula = document.getElementById("cedula").value.trim();
      const telefono = document.getElementById("telefono").value.trim();
      const email = document.getElementById("email").value;
      const fecha = document.getElementById("date").value;
      
      if (!validarNombreApellido(nombre)) {
        alert("Nombre no válido. Solo letras y mínimo 2 caracteres.");
        return false;
      }

      if (!validarNombreApellido(apellido)) {
        alert("Apellido no válido. Solo letras y mínimo 2 caracteres.");
        return false;
      }

      if (!validarCedulaTelefono(cedula)) {
        alert("La cédula debe contener exactamente 10 dígitos numéricos.");
        return false;
      }

      if (!validarCedulaTelefono(telefono)) {
        alert("Por favor, ingrese un número de teléfono válido de 10 dígitos.")
        return false;
      }

      if(!validarEmail(email)) {
        alert("Por favor ingresa un correo electrónico válido.");
        return false;
      }

      if (!validarFechaNacimiento(fecha)) {
        alert("Por favor ingrese una fecha de nacimiento válida.");
        return false;
      }

      alert("Formulario enviado correctamente")
      return true;
    }
