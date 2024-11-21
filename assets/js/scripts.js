function validateEmail(email) {
  const allowedDomains = ['gmail.com', 'hotmail.com', 'yahoo.com']; //Permitimos estos dominios de correo
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  // creamos una regla para que sea obligatorio añadir esto

  // Verificamos el correo
  if (!regex.test(email)) {
    return "El correo debe tener el formato válido.";
  }

  const domain = email.split('@')[1];
  if (!allowedDomains.includes(domain)) {
    return "Solo se permiten correos de Gmail, Hotmail o Yahoo.";
  }

  return ''; // Si no hay errores no devolvera nada
}
// Cogemos el ID correo y el ID MensajeError del HTML
const emailInput = document.getElementById('correo');
const errorMessage = document.getElementById('MensajeError');

// Validamos el correo
emailInput.addEventListener('input', function() {
  const email = emailInput.value.trim();
  
  // Valida el email
  const error = validateEmail(email);

  if (error) {
    errorMessage.textContent = error; // Muestra el mensaje de error
  } else {
    errorMessage.textContent = ''; // Borra el mensaje de error si el email es válido
  }
});