import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./components/pages/Cadastro";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Forum from "./components/pages/Forum";

export function App() {
  return (
    <Container classCSS="flex_column">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>

      <Footer />
    </Container>
  );
}

export default App;
