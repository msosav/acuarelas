import BarraDeNavegacion from "./BarraDeNavegacion";

function Layout(props) {
  return (
    <div>
      <BarraDeNavegacion />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
