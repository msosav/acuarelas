import { Link } from "react-router-dom";

function BarraDeNavegacion() {
  return (
    <nav>
      <h1>Acuarelas</h1>
      <ul>
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
    </nav>
  );
}

export default BarraDeNavegacion;
