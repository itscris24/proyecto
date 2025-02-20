const verificarSesion = () => {
    let sesionIniciada = localStorage.getItem("sesionIniciada");
    console.log("Estado de sesión:", sesionIniciada); // Depuración

    if (sesionIniciada !== "true") {
        alert("⚠️ Acceso denegado. Debes iniciar sesión primero.");
        window.location.href = "../index.html"; // Asegura que la ruta sea correcta
    }
};

verificarSesion();
