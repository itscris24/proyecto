

const CargarTablaUsuarios = () => {
    let tabla = document.getElementById("tablausuarios");

    axios.get('http://127.0.0.1:8000/listadousuarios')
        .then(response => {
            for (let i = 0; i < response.data.length; i++) {

                let nuevaFila = tabla.insertRow(tabla.length);

                celda0 = nuevaFila.insertCell(0);
                celda0.innerHTML = response.data[i].id;
                celda1 = nuevaFila.insertCell(1);
                celda1.innerHTML = response.data[i].usuario;
                celda2 = nuevaFila.insertCell(2);
                celda2.innerHTML = response.data[i].contraseña;
                celda3 = nuevaFila.insertCell(3);
                celda3.innerHTML = response.data[i].tipo_usuario;
                celda4 = nuevaFila.insertCell(4);
                celda4.innerHTML = response.data[i].correo;
                celda5 = nuevaFila.insertCell(5);
                celda5.innerHTML = '<a class="btn btn-warning mx-5" onClick="onEdit(this)">Editar</a> <a class="btn btn-danger" onClick="onDelete(this)">Eliminar</a>';
            }
        }).catch(error => {
            console.error("Error al cargar datos:", error);
        });
}


CargarTablaUsuarios();

