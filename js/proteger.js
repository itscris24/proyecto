// js/proteger.js
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("sesionIniciada") !== "true") {
        alert("Debes iniciar sesión para acceder.");
        window.location.href = "../index.html"; // Redirige a la página de inicio de sesión
    } else {
        // Evitar que el usuario regrese con el botón de retroceso
        history.pushState(null, null, location.href);
        window.onpopstate = () => {
            history.pushState(null, null, location.href);
        };
    }
});
