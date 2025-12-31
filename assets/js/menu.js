document.addEventListener("DOMContentLoaded", () => {
  //mostrar saldo actualizado
  const saldoH3 = document.querySelector("h3");
  saldoH3.innerText = `$${localStorage.getItem("saldo")}`;

  // eventos de redirección
  const botones = document.querySelectorAll(".btn-primary");
  botones.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const destino = btn.getAttribute("href");
      const texto = btn.innerText.toLowerCase();
      alert(`Redirigiendo a ${texto}...`);
      window.location.href = destino;
    });
  });
});
