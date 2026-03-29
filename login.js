
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC93lSRFJl9NgwCdTOOxqje8oZNrGTdgbA",
  authDomain: "sabor-selecto-55350.firebaseapp.com",
  projectId: "sabor-selecto-55350",
  storageBucket: "sabor-selecto-55350.firebasestorage.app",
  messagingSenderId: "704469592255",
  appId: "1:704469592255:web:f004b07cd56489506c7e0a",
  measurementId: "G-VFR9743E3R"
};
 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


const loginBtn = document.getElementById("googleLogin");

loginBtn.addEventListener("click", async () => {
  try {
    console.log("🔹 Iniciando sesión con Google...");
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log(" Usuario logueado:", user.displayName, user.email);


    localStorage.setItem("usuario", JSON.stringify({
      nombre: user.displayName,
      correo: user.email,
      foto: user.photoURL
    }));

    setTimeout(() => {
      window.location.href = "../reservas/reserva.html";
    }, 200);

  } catch (error) {
    console.error(" Error al iniciar sesión:", error);
    alert("Error al iniciar sesión: " + error.message);
  }
  
});
// Mostrar la foto y nombre si el usuario ya inició sesión antes
document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario) {
    const foto = document.getElementById("fotoUsuario");
    const nombre = document.getElementById("nombreUsuario");

    foto.src = usuario.foto;
    foto.style.display = "block";
    nombre.textContent = usuario.nombre;
  }
});




