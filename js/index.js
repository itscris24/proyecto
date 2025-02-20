const ingresar = async () => {
    let usuarioInput = document.getElementById("Usuario").value.trim();
    let contraseñaInput = document.getElementById("Contraseña").value.trim();

    try {
        let respuesta = await fetch("https://script.google.com/macros/s/AKfycbwqCBiNoYkK35jRj_RhnnoTZaswE2Hh6Zf5_uWS_VQaoxXDs-hgi5RsATe7-H8VH1kJ/exec");
        let usuarios = await respuesta.json();

        console.log("Usuarios cargados desde API:", usuarios); // 🔍 Verifica los datos en la consola

        // 💡 Asegurar que los valores sean comparables
        let usuarioEncontrado = usuarios.find(user =>
            String(user.usuario).trim() === usuarioInput && 
            String(user.contraseña).trim() === contraseñaInput
        );

        if (usuarioEncontrado) {
            alert(`Bienvenido, ${usuarioEncontrado.usuario}. Rol: ${usuarioEncontrado.rol}`);

            // Guardar usuario en localStorage
            localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
            window.location.href = "html/iniciouser.html"
            limpiar();

        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
};




const mostrarUsuario = () => {
    let usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
        let usuario = JSON.parse(usuarioGuardado);
        
        // Mostrar nombre de usuario en el header
        document.getElementById("user-info").textContent = `Bienvenido, ${usuario.usuario}`;
        
        // Mostrar/ocultar el menú de administración dependiendo del rol
        let menuAdministracion = document.getElementById("Administración");

        if (menuAdministracion) {
            if (usuario.rol === "Usuario") {
                menuAdministracion.style.display = "none";
            } else if (usuario.rol === "Administrador") {
                menuAdministracion.style.display = "block";
            }
        }
    }
}

mostrarUsuario();

const limpiar = () => {
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
}
