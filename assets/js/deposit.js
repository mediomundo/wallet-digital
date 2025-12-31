document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const monto = parseFloat(document.getElementById("depositAmount").value);

  if (monto > 0) {
    let saldo = parseFloat(localStorage.getItem("saldo"));
    saldo += monto;
    localStorage.setItem("saldo", saldo);

    // Guardar en historial
    const movs = JSON.parse(localStorage.getItem("movimientos"));
    movs.unshift(`Depósito realizado: +$${monto}`);
    localStorage.setItem("movimientos", JSON.stringify(movs));

    alert(`Depósito exitoso. Nuevo saldo: $${saldo}`);
    window.location.href = "menu.html";
  }
});
