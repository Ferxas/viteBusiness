import { useEffect, useState } from "react"
import "./Tienda.css"
import { ApiWebURL } from "../utils"
import Productos from "../components/Productos"
function Tienda() {
    const [listaCategorias, setListaCategorias] = useState([])
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "categorias.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaCategorias(data)
                seleccionarCategoria(data[0])
            })
    }
//list-group-item position-relative
    const dibujarLista = () => {
        return (
            <ul className="list-group" id="lista-categorias">
            
                {listaCategorias.map(item =>
                    <li className={item.idcategoria === categoriaSeleccionada.idcategoria 
                            ? "list-group-item position-relative active"
                            : "list-group-item position-relative" }
                        onClick={ () => seleccionarCategoria(item) }
                        key={item.idcategoria} title={item.descripcion}>
                        {item.nombre}
                        <span className="position-absolute top-50 end-0 translate-middle-y badge rounded-pill bg-danger">
                            {item.total}
                        </span>
                    </li>
                )}
            </ul>
        )
    }

    const seleccionarCategoria = (item) => {
        console.log(item)
        setCategoriaSeleccionada(item)
    }

    return (
        <section id="tienda" className="padded">
            <div className="container">
                <h2>Tienda</h2>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <h3>Categorías</h3>
                        {dibujarLista()}
                    </div>
                    <div className="col-xl-9 col-lg-8 col-md-7">
                        <h3>{categoriaSeleccionada.nombre}</h3>
                        <p>{categoriaSeleccionada.descripcion}</p>
                        <Productos categoriaProductos = {categoriaSeleccionada.idcategoria}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tienda