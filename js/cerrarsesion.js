const cerrarSesion = () => {
    localStorage.removeItem("sesionIniciada");
    window.location.href = "../index.html"; // Redirigir al login
}