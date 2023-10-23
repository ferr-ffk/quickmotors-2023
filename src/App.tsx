import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./components/paginas/Cadastro";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Forum from "./components/paginas/Forum";
import PaginaNaoEncontrada from "./components/paginas/PaginaNaoEncontrada";
import { Navigate } from "../node_modules/react-router-dom/dist/index";

export function App() {
  return (
    <Container classCSS="flex_column">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/404" element={<PaginaNaoEncontrada />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
