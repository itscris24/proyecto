const cerrarSesion = () => {
    localStorage.removeItem("usuario");
    window.location.href = "../index.html"; // Redirigir al login
}
