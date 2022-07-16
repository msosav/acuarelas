import Layout from "./components/layout/Layout";

import { Routes, Route } from "react-router-dom";
import Inicio from "./components/pages/Inicio";
import Contacto from "./components/pages/Contacto";
import SobreMi from "./components/pages/SobreMi";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
