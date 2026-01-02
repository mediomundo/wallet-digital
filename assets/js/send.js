// Referencias a los elementos del HTML
const formContacto = document.getElementById("formRegistroContacto");
const listaContactosUI = document.getElementById("contactList");
const btnEnviar = document.getElementById("btnConfirmarEnvio");

// Función para registrar un nuevo contacto (Modal)
formContacto.addEventListener("submit", function (event) {
  event.preventDefault(); // Evitar que la página se refresque

  // Captura de datos usando variables
  let nombre = document.getElementById("regNombre").value;
  let banco = document.getElementById("regBanco").value;
  let cuenta = document.getElementById("regCuenta").value;

  // Si es el primer contacto, limpia el mensaje de "No hay contactos"
  if (listaContactosUI.innerText.includes("No has agregado")) {
    listaContactosUI.innerHTML = "";
  }

  // Crear el nuevo elemento en la lista
  let nuevoItem = document.createElement("li");
  nuevoItem.className =
    "list-group-item d-flex justify-content-between align-items-center";
  nuevoItem.innerHTML = `
        <div>
            <strong>${nombre}</strong><br>
            <small>Banco: ${banco} | Cuenta: ${cuenta}</small>
        </div>
        <input type="radio" name="contactoSeleccionado" value="${nombre}">
    `;

  // Agrega el contacto a la lista visual
  listaContactosUI.appendChild(nuevoItem);

  // Cierra el modal usando la función de Bootstrap
  let modalElement = document.getElementById("modalNuevoContacto");
  let modalBus = bootstrap.Modal.getInstance(modalElement);
  modalBus.hide();

  // Limpia el formulario y avisa al usuario
  formContacto.reset();
  alert("¡Contacto guardado con éxito!");
});

// Función para realizar el envío de dinero
btnEnviar.addEventListener("click", function () {
  // Obtener el monto y el contacto seleccionado
  let monto = Number.parseFloat(document.getElementById("montoEnvio").value);
  let contactoCheck = document.querySelector(
    'input[name="contactoSeleccionado"]:checked'
  );

  // Obtener el saldo del LocalStorage
  let saldoActual = Number.parseFloat(localStorage.getItem("saldo"));

  if (!contactoCheck) {
    alert("Por favor, selecciona un contacto de la lista.");
  } else if (Number.isNaN(monto) || monto <= 0) {
    alert("Por favor, ingresa un monto válido mayor a 0.");
  } else if (monto > saldoActual) {
    alert("Saldo insuficiente. Tu saldo actual es: $" + saldoActual);
  } else {
    saldoActual -= monto;

    // Actualiza el saldo en el almacenamiento local
    localStorage.setItem("saldo", saldoActual);

    // Guarda el movimiento en el historial
    let historial = JSON.parse(localStorage.getItem("movimientos")) || [];
    historial.unshift("Envío a " + contactoCheck.value + ": -$" + monto);
    localStorage.setItem("movimientos", JSON.stringify(historial));

    alert("¡Transferencia realizada! Redirigiendo al menú.");
    globalThis.location.href = "menu.html";
  }
});
