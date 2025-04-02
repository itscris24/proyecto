const CargarTablaAlertas = () => {
    axios.get('http://127.0.0.1:8000/listadoalertas')
        .then(response => {
            console.log(response.data);
            let tabla = document.getElementById("tablaalertas");

            let alertas = response.data.listado;
            for (let i = 0; i < alertas.length; i++) {
                let nuevaFila = tabla.insertRow(tabla.length);
                celda0 = nuevaFila.insertCell(0);
                celda0.innerHTML = alertas[i].id_alerta;
                celda1 = nuevaFila.insertCell(1);
                celda1.innerHTML = alertas[i].id_caso;
                celda2 = nuevaFila.insertCell(2);
                celda2.innerHTML = alertas[i].id_medicion;
                celda3 = nuevaFila.insertCell(3);
                celda3.innerHTML = alertas[i].gestionado_por;
                celda4 = nuevaFila.insertCell(4);
                celda4.innerHTML = alertas[i].zona;
                celda5 = nuevaFila.insertCell(5);
                celda5.innerHTML = alertas[i].fecha_hora;
                celda6 = nuevaFila.insertCell(6);
                celda6.innerHTML = alertas[i].estado;
            }


        }).catch(error => {
            console.log(error);
        });
}
    
CargarTablaAlertas();