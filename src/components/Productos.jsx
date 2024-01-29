/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"
import nofoto from "./../assets/images/nofoto.jpg"
import "./Productos.css"
function Productos(props) {
    console.log(props)
    const [listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        leerServicio(props.categoriaProductos)
    }, [props.categoriaProductos])

    const leerServicio = (idcategoria) => {
        const rutaServicio = ApiWebURL + "productos.php?idcategoria=" + idcategoria
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaProductos(data)
            })
    }

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2 g-4">
                {listaProductos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className="card h-100">
                            <img src={item.imagenchica === null
                                ? nofoto
                                : ApiWebURL + item.imagenchica}
                                className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-title text-center">{item.nombre}</p>
                                <p className="card-text text-center">S/ {
                                    item.preciorebajado === "0"
                                        ? parseFloat(item.precio).toFixed(2)
                                        : parseFloat(item.preciorebajado).toFixed(2)
                                } <span className="precio-anterior">{
                                    item.preciorebajado === "0"
                                    ? "" 
                                    : "S/ " + parseFloat(item.precio).toFixed(2)
                                }</span>
                                
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    return (
        <>
            {dibujarCuadricula()}
        </>
    )
}

export default Productos