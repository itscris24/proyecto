const BIN_ID = "67b7a6c6acd3cb34a8ea3f9f "; // Reemplaza con tu ID real
const API_KEY = "$2a$10$RmjwjRZWa.B1D/n.D3Jg1u9SzymWYnRFKbBlntUDejA8dHP1XNd9u"; // Reemplaza con tu API Key
const URL = `https://api.jsonbin.io/v3/b/67b7a6c6acd3cb34a8ea3f9f`;


const cargarUsuarios = async () => {
    try {
        let response = await fetch(URL, { headers: { "X-Master-Key": API_KEY } });
        let data = await response.json();
        let record = data.record;

        if (!Array.isArray(record)) {
            console.error("❌ Error: La estructura de datos no es válida.");
            return;
        }

        mostrarUsuarios(record);
    } catch (error) {
        console.error("❌ Error al obtener los datos:", error);
    }
};





const mostrarUsuarios = (usuarios) => {
    const tbody = document.getElementById("tablaUsuarios");
    tbody.innerHTML = ""; // Limpia la tabla antes de agregar los datos

    usuarios.forEach((usuario, index) => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td><input type="text" value="${usuario.usuario}" readonly></td>
            <td>
                <input type="password" id="pass-${index}" value="${usuario.contraseña}" readonly>
                <button onclick="togglePassword(${index})">👁</button>
            </td>
            <td>
                <select>
                    <option value="Administrador" ${usuario.rol === "Administrador" ? "selected" : ""}>Administrador</option>
                    <option value="Usuario" ${usuario.rol === "Usuario" ? "selected" : ""}>Usuario</option>
                </select>
            </td>
            <td><button onclick="eliminarUsuario(${index})">❌ Eliminar</button></td>
        `;

        tbody.appendChild(fila);
    });
};


const togglePassword = (index) => {
    let inputPass = document.getElementById(`pass-${index}`);
    inputPass.type = inputPass.type === "password" ? "text" : "password";
};


const registrar = async () => {
    let usuario = document.getElementById("Usuario").value.trim();
    let contraseña = document.getElementById("Contraseña").value.trim();
    let rol = document.getElementById("Roles").value;

    if (!usuario || !contraseña) {
        alert("⚠️ Usuario y contraseña son obligatorios.");
        return;
    }

    let response = await fetch(URL, { headers: { "X-Master-Key": API_KEY } });
    let data = await response.json();
    
    let usuarios = Array.isArray(data.record) ? data.record : [];
    usuarios.push({ usuario, contraseña, rol });

    await actualizarUsuarios(usuarios);
    limpiarFormulario();
    cargarUsuarios();
};

const actualizarUsuarios = async (usuarios) => {
    try {
        await fetch(URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Master-Key": API_KEY
            },
            body: JSON.stringify(usuarios) // ✅ Guarda solo el array
        });

        cargarUsuarios();
    } catch (error) {
        console.error("❌ Error al actualizar los datos:", error);
    }
};


const editarUsuario = async (index, campo, valor) => {
    try {
        let response = await fetch(URL, { headers: { "X-Master-Key": API_KEY } });
        let data = await response.json();

        // ✅ Asegurar que record existe y es un array
        let usuarios = data.record;
        if (!usuarios || !Array.isArray(usuarios)) {
            console.error("❌ Error: La estructura de datos no es válida.");
            return;
        }

        console.log("✅ Usuarios antes de editar:", usuarios); // Verificar estructura en consola

        // ✅ Verificar si el índice es válido
        if (index < 0 || index >= usuarios.length) {
            console.error("❌ Error: Índice fuera de rango.");
            return;
        }

        // ✅ Modificar el usuario en la posición indicada
        usuarios[index][campo] = valor;
        console.log(`✏️ Editando usuario ${index}:`, usuarios[index]); // Verificar en consola

        // ✅ Guardar los cambios en JSONBin
        await actualizarUsuarios(usuarios);
    } catch (error) {
        console.error("❌ Error al editar usuario:", error);
    }
};


const eliminarUsuario = async (index) => {
    let response = await fetch(URL, { headers: { "X-Master-Key": API_KEY } });
    let data = await response.json();
    let usuarios = Array.isArray(data.record) ? data.record : [];

    usuarios.splice(index, 1);

    await actualizarUsuarios(usuarios);
};


const limpiarFormulario = () => {
    document.getElementById("Usuario").value = "";
    document.getElementById("Contraseña").value = "";
    document.getElementById("Roles").value = "Usuario";
};


document.addEventListener("DOMContentLoaded", cargarUsuarios);