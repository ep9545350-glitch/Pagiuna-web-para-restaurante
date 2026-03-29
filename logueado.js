document.addEventListener("DOMContentLoaded", mostrarUsuario);

function mostrarUsuario() {
  const usuario = JSON.parse(localStorage.getItem("usuario"));
  const contenedor = document.getElementById("usuario-info");

  if (usuario && usuario.nombre && usuario.foto) {
    document.getElementById("usuario-nombre").textContent = usuario.nombre;
    document.getElementById("usuario-foto").src = usuario.foto;
    contenedor.style.display = "flex";
  } else {
    contenedor.style.display = "none";
  }
}

function cerrarSesion() {
  localStorage.removeItem("usuario");
  document.getElementById("usuario-info").style.display = "none";
  window.location.href = "index.html"; 
}
