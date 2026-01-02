// Capturar el formulario
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // para evitar que la página se recargue

  // Obtengo los valores de los inputs
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  // Estructura de control if-else
  if (email === "usuario@wallet.com" && pass === "Wallet1234") {
    alert("¡Éxito! Redirigiendo al menú...");

    // Inicializar datos en el almacenamiento del navegador
    if (!localStorage.getItem("saldo")) {
      localStorage.setItem("saldo", "60000");
    }
    if (!localStorage.getItem("movimientos")) {
      localStorage.setItem("movimientos", JSON.stringify([]));
    }

    globalThis.location.href = "menu.html";
  } else {
    alert("Credenciales incorrectas. Intente nuevamente.");
  }
});
