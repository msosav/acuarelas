import BarraDeNavegacion from "./BarraDeNavegacion";

import classes from "./Layout.css";

function Layout(props) {
  return (
    <div className="container">
      <BarraDeNavegacion />
      <main className="main">{props.children}</main>
    </div>
  );
}

export default Layout;
