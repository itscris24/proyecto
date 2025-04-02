const consultar_usuarios = async () => {
    axios.get('http://127.0.0.1:8000/listadousuarios')
    .then(response => {
        console.log(response.data);
        let tabla = document.getElementById("tablausuarios");
        
        let usuarios = response.data.listado;
        for (let i = 0; i < usuarios.length; i++) {
            let nuevaFila = tabla.insertRow(tabla.length);
            celda0 = nuevaFila.insertCell(0);
            celda0.innerHTML = usuarios[i].id_usuario;
            celda1 = nuevaFila.insertCell(1);
            celda1.innerHTML = usuarios[i].usuario;
            celda2 = nuevaFila.insertCell(2);
            celda2.innerHTML = usuarios[i].contraseña;
            celda3 = nuevaFila.insertCell(3);
            celda3.innerHTML = usuarios[i].tipo_usuario;
            celda4 = nuevaFila.insertCell(4);
            celda4.innerHTML = usuarios[i].correo;
            celda5 = nuevaFila.insertCell(5);
            celda5.innerHTML = '<a class="btn btn-outline-success mx-5" onClick="onEdit(this)">Editar</a> <a class="btn btn-danger" onClick="onDelete(this)">Eliminar</a>';
        }
        
        
    }).catch(error => {
        console.log(error);
    });
}

consultar_usuarios();