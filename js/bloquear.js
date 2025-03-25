const bloquearRetroceso = () => {
    // Empuja un estado inicial al historial
    window.history.pushState({ page: "iniciouser" }, "", window.location.href);

    // Escucha el evento 'popstate' para detectar intentos de retroceso
    window.onpopstate = (event) => {
        // Si el usuario intenta retroceder al index.html
        if (!event.state || event.state.page !== "iniciouser") {
            // Vuelve a empujar el estado actual al historial
            window.history.pushState({ page: "iniciouser" }, "", window.location.href);
            alert("⚠️ No puedes retroceder sin cerrar sesión.");
        }
    };
};

// Llama a la función para bloquear el retroceso
bloquearRetroceso();