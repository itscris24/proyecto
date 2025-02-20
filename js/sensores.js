const obtenerDatostabla5 = () => {
    fetch("https://api.jsonbin.io/v3/b/67b698b9e41b4d34e494df2a") // Reemplaza con tu URL real
        .then(response => response.json())
        .then(data => cargarTabla5(data.record))
        .catch(error => console.error("Error al cargar datos:", error));
};

const obtenerDatostabla6 = () => {
    fetch("https://api.jsonbin.io/v3/b/67b69d95ad19ca34f80a9dfc") // Reemplaza con tu URL real
        .then(response => response.json())
        .then(data => cargarTabla6(data.record))
        .catch(error => console.error("Error al cargar datos:", error));
};

const cargarTabla5 = (datos) => {
    const tbody = document.querySelector("#tabla5 tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    datos.forEach(item => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.temperatura}</td>
            <td>${item.humedad}</td>
            <td>${item.estado}</td>
            <td>${item.ubicación}</td>
        `;
        tbody.appendChild(fila);
    });
};

const cargarTabla6 = (datos) => {
    const tbody = document.querySelector("#tabla6 tbody");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar nuevos datos

    datos.forEach(item => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${item.nivelCO}</td>
            <td>${item.estado}</td>
            <td>${item.ubicacion}</td>
        `;
        tbody.appendChild(fila);
    });
};

obtenerDatostabla5();
obtenerDatostabla6();
