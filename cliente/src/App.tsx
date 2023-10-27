import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroUsuario from "./components/paginas/CadastroUsuario";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Forum from "./components/paginas/Forum";
import PaginaNaoEncontrada from "./components/paginas/PaginaNaoEncontrada";
import { Navigate } from "../node_modules/react-router-dom/dist/index";
import PaginaCriarUsuario from "./components/PaginaCriarUsuario";

export function App() {
  return (
    <Container classCSS="flex_column">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/404" element={<PaginaNaoEncontrada />} />
          <Route path="/criar-usuario" element={<PaginaCriarUsuario />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
