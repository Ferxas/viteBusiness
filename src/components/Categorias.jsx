import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";
import "./Categorias.css";

function Categorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    leerCategorias();
  }, []);

  const leerCategorias = () => {
    const rutaServicio = ApiWebURL + "/categorias.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log("Categorias data:", data); // Log the received data
        setCategorias(data);
      })
      .catch((error) => {
        console.error("Error fetching categorias:", error);
      });
  };

  const dibujarTarjetas = () => {
    return (
      <div className="row row-cols-4 g-4">
        {categorias.map((categoria, index) => (
          <div className="col" key={categoria.id || index}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{categoria.nombre}</h5>
                <p className="card-text">{categoria.descripcion}</p>
                <p className="card-text">Total: {categoria.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      {categorias.length > 0 ? dibujarTarjetas() : <p>No categories found</p>}
    </>
  );
}

export default Categorias;
