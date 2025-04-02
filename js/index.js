const ingresar = async () => {
    let usuarioInput = document.getElementById("Usuariotxt").value.trim();
    let contraseñaInput = document.getElementById("Contraseñatxt").value.trim();

    axios.get('http://127.0.0.1:8000/listadousuarios')
    .then(response => {
        let usuarios = response.data.listado;
        console.log("Usuarios encontrados desde la API:", usuarios);

        let usuarioEncontrado = usuarios.find(user =>
            String(user.usuario).trim() === usuarioInput &&
            String(user.contraseña).trim() === contraseñaInput
        );
        
        if (usuarioEncontrado) {
            alert(`Bienvenido, ${usuarioEncontrado.usuario}. Rol: ${usuarioEncontrado.tipo_usuario}`)

            localStorage.setItem("usuario", JSON.stringify(usuarioEncontrado));
            window.location.href = "html/iniciouser.html"
            limpiar();
        }else{
            alert("Ususario o contraseña incorrectos.");
        }
    }).catch(error =>{
        console.log(error);
    });
};




const mostrarUsuario = () => {
    let usuarioGuardado = localStorage.getItem("usuario");

    if (usuarioGuardado) {
        let usuario = JSON.parse(usuarioGuardado);
        
        // Mostrar nombre de usuario en el header
        document.getElementById("user-info").textContent = `Bienvenido, ${usuario.usuario}`;
        
        // Ocultar la opción de "Administración" si no es Administrador
        let menuAdministracion = document.querySelector("a[href='administracion.html']").parentElement;
        if (menuAdministracion) {
            if (usuario.tipo_usuario !== "Administrador") {
                menuAdministracion.style.display = "none";
            }
        }
    }
}

mostrarUsuario();

const limpiar = () => {
    document.getElementById("Usuariotxt").value = "";
    document.getElementById("Contraseñatxt").value = "";
}
