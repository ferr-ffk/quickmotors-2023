import { useState } from "react";
import NavBar from "./components/layout/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cadastro from "./components/pages/Cadastro";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <NavBar />
        <p>{count}</p>
        <h1>QUICKMOTORS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad expedita,
          ullam consequuntur aut consectetur reprehenderit, quas qui nisi
          numquam neque animi tenetur nam similique ipsa autem atque suscipit
          natus velit!
        </p>
        <button onClick={() => setCount(count + 1)}>me aperta rs</button>

        <Routes>
          <Route path="/" element={<Cadastro />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
