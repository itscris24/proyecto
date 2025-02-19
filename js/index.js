let usuarios = [];

// Cargar datos desde usuarios.json
async function cargarUsuarios() {
    try {
        let respuesta = await fetch("https://itscris24.github.io/proyecto/json/usuarios.json");
        usuarios = await respuesta.json();
        console.log("Usuarios cargados: ", usuarios)
    } catch (error) {
        console.error("Error cargando los usuarios:", error);
    }
}

// Llamar a la función para cargar usuarios al inicio
cargarUsuarios();

const ingresar = () => {
    let usuarioInput = document.getElementById("Usuario").value;
    let contraseñaInput = document.getElementById("Contraseña").value;

    let usuarioEncontrado = usuarios.find(user =>
        user.usuario === usuarioInput && user.contraseña === contraseñaInput
    );

    if (usuarioEncontrado) {
        alert(`Bienvenido, ${usuarioEncontrado.usuario}. Rol: ${usuarioEncontrado.rol}`);

        // Guardar en localStorage que la sesión está iniciada
        localStorage.setItem("sesionIniciada", "true");

        // Verificar si se guardó correctamente
        console.log("Sesión iniciada:", localStorage.getItem("sesionIniciada"));

        // Redirigir a la página de usuario
        window.location.href = "http:/html/iniciouser.html";
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
};


const limpiar = () => {
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
}
