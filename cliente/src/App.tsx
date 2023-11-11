import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Forum from "./components/paginas/Forum";
import PaginaNaoEncontrada from "./components/paginas/paginaNaoEncontrada/PaginaNaoEncontrada";
import { Navigate } from "../node_modules/react-router-dom/dist/index";
import CadastroUsuario from "./components/paginas/cadastro/PaginaCadastroUsuario";
import CadastroMecanico from "./components/paginas/cadastro/PaginaCadastroMecanico";
import PaginaComentario from "./components/paginas/comentario/PaginaComentario";
import LoginUsuario from "./components/paginas/LoginUsuario";
import LoginMecanico from "./components/paginas/LoginMecanico";

export function App() {
  return (
    <Container classCSS="">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Forum />} />
          <Route
            path="/cadastro"
            element={<Navigate to="/cadastro/usuario" />}
          />
          <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
          <Route path="/cadastro/mecanico" element={<CadastroMecanico />} />
          <Route path="/comentarios/:id/:usuario" element={<PaginaComentario />} />
          <Route path="/login/usuario" element={<LoginUsuario />} />
          <Route path="/login/mecanico" element={<LoginMecanico />} />

          <Route path="/404" element={<PaginaNaoEncontrada />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
