import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Clientes from "./Clientes";
import "./Servicios.css";

function Servicios() {
  return (
    <div className="app-container">
      <nav className="menu">
        <ul>    
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
        </ul>
      </nav>

      <main>
        <section className="nuestros-servicios">
          <h2>Nuestros Servicios</h2>
          <p>
            Ofrecemos una amplia gama de servicios para satisfacer las
            necesidades de nuestros clientes. Desde desarrollo web hasta
            consultoría de negocios, estamos aquí para ayudarte a tener éxito.
          </p>
        </section>

        <section className="ultimos-proyectos">
          <h2>Últimos Proyectos</h2>
          <div className="proyecto">
            <img
              src="https://picsum.photos/200/300"
              alt="Proyecto 1"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae fugit iusto suscipit iure placeat totam, temporibus neque obcaecati blanditiis omnis ipsum, reprehenderit maxime accusamus inventore, repellendus minima ducimus id molestiae?</p>
          </div>
          <div className="proyecto">
            <img
              src="https://picsum.photos/200/300"
              alt="Proyecto 2"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium impedit molestias illo ullam facilis nisi necessitatibus aliquid iusto repellat saepe facere tempora maxime eveniet laudantium, architecto at ipsum reprehenderit? Veritatis.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Servicios;
