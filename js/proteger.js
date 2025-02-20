const verificarSesion = () => {
    let sesionIniciada = localStorage.getItem("usuario");

    // Convertir el valor del usuario almacenado a un objeto JavaScript
    let usuario = JSON.parse(sesionIniciada); 

    // Depuración: Verifica el contenido de la sesión
    console.log("Estado de sesión:", usuario);

    // Si no hay un usuario en el localStorage, redirigir a la página de inicio
    if (!usuario) {
        alert("⚠️ Acceso denegado. Debes iniciar sesión primero.");
        window.location.href = "../index.html"; // Asegura que la ruta sea correcta
    }
};

verificarSesion();
