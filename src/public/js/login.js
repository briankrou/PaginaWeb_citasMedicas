const btn = document.querySelector('#btnIniciarSesion');

btn.addEventListener('click', function () {
  console.log('Iniciando....');
  const email = document.querySelector('#inputEmail').value;
  const password = document.querySelector('#inputPassword').value;

  const url = `http://localhost:3000/login/iniciar?user=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
  console.log('Hasta aquí bien:', url);

  fetch(url)
    .then(response => {
      console.log(`Estado de la respuesta: ${response.status}`);
      // Puedes agregar lógica para manejar la respuesta aquí
      return response.text();
    })
    .then(data => {
      console.log('datos' +data)
          if(data=='true'){
            console.log('sesion iniciada');
            window.location.href = 'http://localhost:3000/';
          }else{
            console.log('denegado');
          }
      // Puedes agregar lógica adicional aquí para manejar los datos recibidos
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });

  console.log('Botón Iniciar Sesión clickeado');
});
