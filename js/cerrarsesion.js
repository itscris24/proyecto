
const cerrarsesion = () => {
    localStorage.removeItem("sesion");
    window.location.href = "../index.html"; 
};

const bloquearRetroceso = () => {
    history.pushState(null, "", location.href);
    
    window.addEventListener("popstate", () => {
        let sesion = localStorage.getItem("sesionIniciada");
        if (sesion) {
            alert("⚠️ Debes cerrar sesión antes de salir.");
            history.pushState(null, "", location.href); // Evita el retroceso
        }
    });
};

window.onload = () => {
    bloquearRetroceso();
};

