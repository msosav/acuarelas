import { useState } from "react";
import { Link } from "react-router-dom";

import Menu from "../../images/Menu.svg";
import "./BarraDeNavegacion.css";

function BarraDeNavegacion() {
  const [estaLaBarraDeBusquedaExpandida, ponerLaBarraDeBusquedaExpandida] =
    useState(false);

  function quitarBarraDeBusqueda() {
    if (estaLaBarraDeBusquedaExpandida) {
      ponerLaBarraDeBusquedaExpandida(false);
    }
  }

  return (
    <nav className="navigation">
      <div className="titulo">Acuarelas</div>
      <button
        className="menu"
        onClick={() => {
          ponerLaBarraDeBusquedaExpandida(!estaLaBarraDeBusquedaExpandida);
        }}
      >
        <img src={Menu} />
      </button>
      <div
        className={
          estaLaBarraDeBusquedaExpandida
            ? "navigation-menu expanded"
            : "navigation-menu"
        }
      >
        <ul onClick={quitarBarraDeBusqueda}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/sobre-mi">Sobre Mi</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BarraDeNavegacion;
