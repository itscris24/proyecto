let usuarios = [];

// Cargar datos desde usuarios.json
async function cargarUsuarios() {
    try {
        let respuesta = await fetch("/json/usuarios.json");
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
        window.location.href = "../html/iniciouser.html"
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
}

const limpiar = () => {
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
}
