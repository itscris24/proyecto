const CargarTablaMediciones = () => {
    axios.get('http://127.0.0.1:8000/listadomediciones')
    .then(response => {
        console.log(response.data);
        let tabla = document.getElementById("tablamediciones");
        
        let mediciones = response.data.listado;
        for (let i = 0; i < mediciones.length; i++) {
            let nuevaFila = tabla.insertRow(tabla.length);
            celda0 = nuevaFila.insertCell(0);
            celda0.innerHTML = mediciones[i].id_medicion;
            celda1 = nuevaFila.insertCell(1);
            celda1.innerHTML = mediciones[i].zona;
            celda2 = nuevaFila.insertCell(2);
            celda2.innerHTML = mediciones[i].co;
            celda3 = nuevaFila.insertCell(3);
            celda3.innerHTML = mediciones[i].unidad_co;
            celda4 = nuevaFila.insertCell(4);
            celda4.innerHTML = mediciones[i].temperatura;
            celda5 = nuevaFila.insertCell(5);
            celda5.innerHTML = mediciones[i].unidad_temp;
            celda6 = nuevaFila.insertCell(6);
            celda6.innerHTML = mediciones[i].humedad;
            celda7 = nuevaFila.insertCell(7);
            celda7.innerHTML= mediciones[i].unidad_hum;
            celda8 = nuevaFila.insertCell(8);
            celda8.innerHTML = mediciones[i].fecha_hora;
            celda9 = nuevaFila.insertCell(9);
            celda9.innerHTML = '<a class="btn btn-outline-success mx-5" onClick="onEdit(this)">Editar</a> <a class="btn btn-danger" onClick="onDelete(this)">Eliminar</a>';
        }
    }).catch(error => {
        console.log(error);
    });
}

CargarTablaMediciones();
