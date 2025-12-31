const loginForm = document.querySelector("form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "usuario@wallet.com" && pass === "Wallet1234") {
    alert("¡Éxito! Redirigiendo al menú...");

    if (!localStorage.getItem("saldo")) localStorage.setItem("saldo", "60000");
    if (!localStorage.getItem("movimientos"))
      localStorage.setItem("movimientos", JSON.stringify([]));

    window.location.href = "menu.html";
  } else {
    alert("Credenciales incorrectas. Intente nuevamente.");
  }
});
