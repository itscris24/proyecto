const CargarTablaCasos = () => {
    axios.get('http://127.0.0.1:8000/listadocasos')
    .then(response => {
        console.log(response.data);
        let tabla = document.getElementById("tablacasos");
        
        let casos = response.data.Listado;
        for (let i = 0; i < casos.length; i++) {
            let nuevaFila = tabla.insertRow(tabla.length);
            celda0 = nuevaFila.insertCell(0);
            celda0.innerHTML = casos[i].id_caso;
            celda1 = nuevaFila.insertCell(1);
            celda1.innerHTML = casos[i].nombre;
            celda2 = nuevaFila.insertCell(2);
            celda2.innerHTML = casos[i].descripcion;
            celda3 = nuevaFila.insertCell(3);
            celda3.innerHTML = casos[i].solucion;
            celda4 = nuevaFila.insertCell(4);
            celda4.innerHTML = '<a class="btn btn-outline-success mx-5" onClick="onEdit(this)">Editar</a> <a class="btn btn-danger" onClick="onDelete(this)">Eliminar</a>';
        }
    }).catch(error => {
        console.log(error);
    });
}

CargarTablaCasos();
