const obtenerDatostabla1 = () => {
    fetch("https://api.jsonbin.io/v3/b/67b6789fad19ca34f80a732d") // Reemplaza con tu URL real
        .then(response => response.json())
        .then(data => cargarTabla1(data.record))
        .catch(error => console.error("Error al cargar datos:", error));
};

const obtenerDatostabla2 = () => {
    fetch("https://api.jsonbin.io/v3/b/67b67c58acd3cb34a8e8f259") // Reemplaza con tu URL real
        .then(response => response.json())
        .then(data => cargarTabla2(data.record))
        .catch(error => console.error("Error al cargar datos:", error));
};

const obtenerDatostabla3 = () => {
    fetch("https://api.jsonbin.io/v3/b/67b67fd0ad19ca34f80a7cc1") // Reemplaza con tu URL real
        .then(response => response.json())
        .then(data => cargarTabla3(data.record))
        .catch(error => console.error("Error al cargar datos:", error));
};

const obtenerDatostabla4 = () => {
    fetch("https://api.jsonbin.io/v3/b/67b6816aad19ca34f80a7ee7") // Reemplaza con tu URL real
        .then(response => response.json())
        .then(data => cargarTabla4(data.record))
        .catch(error => console.error("Error al cargar datos:", error));
};

const cargarTabla1 = (datos) => {
    const tbody = document.querySelector("#tabla1 tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    datos.forEach(item => {
        let fila = document.createElement("tr");

        // Manejar si las condiciones ambientales son un objeto o una lista
        let condiciones = "";
        if (Array.isArray(item.condiciones_ambientales)) {
            item.condiciones_ambientales.forEach(cond => {
                condiciones += `<p><b>Temp:</b> ${cond.temperatura} | <b>Humedad:</b> ${cond.humedad} | 
                <b>Gases:</b> ${cond.gases_inflamables} | <b>Viento:</b> ${cond.viento}</p>`;
            });
        } else {
            condiciones = `<p><b>Temp:</b> ${item.condiciones_ambientales.temperatura} | 
            <b>Humedad:</b> ${item.condiciones_ambientales.humedad} | 
            <b>Gases:</b> ${item.condiciones_ambientales.gases_inflamables} | 
            <b>Viento:</b> ${item.condiciones_ambientales.viento}</p>`;
        }

        fila.innerHTML = `
            <td>${item.nivel_riesgo}</td>
            <td>${item.descripcion}</td>
            <td>${condiciones}</td>
            <td>${item.acciones_recomendadas}</td>
        `;
        tbody.appendChild(fila);
    });
};

const cargarTabla2 = (datos) => {
    const tbody = document.querySelector("#tabla2 tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    datos.forEach(item => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.id}</td>
            <td>${item.fecha}</td>
            <td>${item.nivel_riesgo}</td>
            <td>${item.ubicacion}</td>
            <td>${item.estado}</td>
            <td>${item.acciones}</td>
        `;
        tbody.appendChild(fila);
    });
};

const cargarTabla3 = (datos) => {
    const tbody = document.querySelector("#tabla3 tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    datos.forEach(item => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.id}</td>
            <td>${item.fecha}</td>
            <td>${item.nivel_riesgo}</td>
            <td>${item.ubicacion}</td>
            <td>${item.estado}</td>
            <td>${item.acciones}</td>
        `;
        tbody.appendChild(fila);
    });
};

const cargarTabla4 = (datos) => {
    const tbody = document.querySelector("#tabla4 tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    datos.forEach(item => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.variable}</td>
            <td>${item.bajo}</td>
            <td>${item.moderado}</td>
            <td>${item.alto}</td>
            <td>${item.critico}</td>
        `;
        tbody.appendChild(fila);
    });
};

// Llamamos a la función al cargar la página
obtenerDatostabla1();
obtenerDatostabla2();
obtenerDatostabla3();
obtenerDatostabla4();
