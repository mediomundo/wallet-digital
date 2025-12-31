// Botón Agregar Contacto
document.querySelector(".btn-primary").addEventListener("click", (e) => {
  e.preventDefault();
  // Simulando formulario emergente de captura de datos
  const nombre = prompt("Nombre y Apellido:");
  const rut = prompt("RUT:");

  if (nombre && rut) {
    alert(`Contacto ${nombre} agregado con éxito.`);
  }
});

// Botón Enviar Dinero (al final del formulario)
document.querySelectorAll(".btn-primary")[1].addEventListener("click", (e) => {
  e.preventDefault();
  const montoEnvio = parseFloat(prompt("Ingrese el monto a enviar:"));
  let saldo = parseFloat(localStorage.getItem("saldo"));

  if (montoEnvio <= saldo) {
    saldo -= montoEnvio;
    localStorage.setItem("saldo", saldo);

    const movs = JSON.parse(localStorage.getItem("movimientos"));
    movs.unshift(`Transferencia enviada: -$${montoEnvio}`);
    localStorage.setItem("movimientos", JSON.stringify(movs));

    alert("Envío confirmado. Saldo actualizado.");
    window.location.href = "menu.html";
  } else {
    alert("Saldo insuficiente.");
  }
});
