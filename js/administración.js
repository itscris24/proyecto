const redireccionar = () => {
    let select = document.getElementById("Administración");
    let url = select.value;

    if (url) {
        window.location.href = url; // Redirige a la página seleccionada
    }
};