const lista = document.querySelector(".list-group");
const historial = JSON.parse(localStorage.getItem("movimientos")) || [];

if (historial.length > 0) {
  lista.innerHTML = ""; // Limpiar los estáticos
  historial.forEach((mov) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = mov;
    lista.appendChild(li);
  });
}
