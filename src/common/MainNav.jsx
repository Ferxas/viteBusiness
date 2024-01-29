import { Link } from "react-router-dom"

function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top bg-dark" data-bs-theme="dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    ID+
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">
                                Nosotros
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#noticias">
                                Noticias
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#historia">
                                Historia
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/inversiones">
                                Inversiones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">
                                Proveedores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/empleados">
                                Empleados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tienda">
                                Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/servicios">
                                Servicios
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav