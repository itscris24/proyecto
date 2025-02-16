document.addEventListener("DOMContentLoaded", () => {
    let sesion = localStorage.getItem("sesionIniciada");
    console.log("Estado de sesión:", sesion); // Para depuración

    if (sesion !== "true") { // Comparación correcta
        alert("Debes iniciar sesión para acceder.");
        window.location.href = "../index.html"; // Redirigir al login
    } else {
        // Evitar que el usuario regrese con el botón de retroceso
        history.pushState(null, null, location.href);
        window.onpopstate = () => {
            history.pushState(null, null, location.href);
        };
    }
});
