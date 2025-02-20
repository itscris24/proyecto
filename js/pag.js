

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Asegúrate de importar el componente

export default function Homepage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://docs.google.com/spreadsheets/d/e/2PACX-1vRUSoy3298uZDiCgbxv3dOttp9ZM9dgTjMQu70QCbL3e3LwnadysLtgU_Hf2kF0zf9l2NPIn4Czwnxw/pub?output=csv"
                );
                const csvText = await response.text();

                const rows = csvText.split("\n").slice(1); // Saltamos la primera fila (encabezado)

                const productsArray = rows.map((row) => {
                    const [nombre, apellido, correo] = row.split(",");
                    return { nombre, apellido, correo }; // Retornamos un objeto válido
                });

                setProducts(productsArray); // Guardamos los datos en el estado
            } catch (error) {
                console.error("Error cargando datos:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista de Usuarios</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                </ul>
            ) : (
                <p>Cargando datos...</p>
            )}
        </div>
    );
}
