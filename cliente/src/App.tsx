import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroUsuario from "./components/paginas/cadastro/CadastroUsuario";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Forum from "./components/paginas/Forum";
import PaginaNaoEncontrada from "./components/paginas/PaginaNaoEncontrada";
import { Navigate } from "../node_modules/react-router-dom/dist/index";
import PaginaCriarUsuario from "./components/PaginaCriarUsuario";
import Cadastro from "./components/paginas/Cadastro";
import CadastroMecanico from "./components/paginas/cadastro/CadastroMecanico";

export function App() {
  return (
    <Container classCSS="">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
          <Route path="/cadastro/mecanico" element={<CadastroMecanico />} />
          <Route path="/404" element={<PaginaNaoEncontrada />} />
          <Route path="*" element={<Navigate to="/404" />} />

          <Route path="/criar-usuario" element={<PaginaCriarUsuario />} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
