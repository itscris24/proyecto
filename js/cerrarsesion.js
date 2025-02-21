
const cerrarsesion = () => {
    localStorage.removeItem("sesion");
    window.location.href = "../index.html"; 
};


history.pushState(null, "", location.href);
window.onpopstate = () => {
    history.pushState(null, "", location.href);
    alert("Debes cerrar sesión para salir.");
};


