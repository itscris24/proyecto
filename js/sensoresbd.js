const CargarTablaSensores = ()=> {
    axios.get('http://127.0.0.1:8000/listadodispositivos')
    .then(response => {
        console.log(response.data);
        let tabla = document.getElementById("tablasensores");
        
        let sensores = response.data.listado;
        for (let i = 0; i < sensores.length; i++) {
            let nuevaFila = tabla.insertRow(tabla.length);
            celda0 = nuevaFila.insertCell(0);
            celda0.innerHTML = sensores[i].id_sensor;
            celda1 = nuevaFila.insertCell(1);
            celda1.innerHTML = sensores[i].nombre;
            celda2 = nuevaFila.insertCell(2);
            celda2.innerHTML = sensores[i].estado;
            celda3 = nuevaFila.insertCell(3);
            celda3.innerHTML = '<a class="btn btn-outline-success mx-5" onClick="onEdit(this)">Editar</a> <a class="btn btn-danger" onClick="onDelete(this)">Eliminar</a>';
        }
        
        
    }).catch(error => {
        console.log(error);
    });
}

CargarTablaSensores();